import { Component, OnInit, ErrorHandler, OnChanges } from '@angular/core';
import { Question } from 'src/app/objects/question'
import { Option } from 'src/app/objects/option'
import { QuestionsService } from 'src/services/questions.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
  providers: [QuestionsService]
})
export class InfoPageComponent implements OnInit {

  questions: Question[];
  errorHandler: ErrorHandler;
  count: number;
  http: HttpClient;
  response: string;
  responses: string[];
  checked: boolean;
  
  constructor(private questionService: QuestionsService) { 
    this.count = 0;
    this.responses = [];
    this.response = undefined;
    this.checked = false;
  }

  toggleChecked(option: Option) {
    option.checked = !option.checked;
  }

  addResponses(response: Option, event:any, inputType: string) {
    this.toggleChecked(response);
    var target = event.target || event.srcElement || event.currentTarget;
    if(inputType === "select") {
      if (target && response.checked) {
        this.response = response.name;
      }
      else if(target){
        this.response = undefined;
      }
    }
    else if(inputType === "checkbox")
    {
      if (target && response.checked) {
        this.responses.push(response.name);
      }
      else if(target){
        this.responses = this.responses.filter(obj => obj !== response.name);
      }
    }
  }

  add(index: number, inputType: string) {
    if(inputType === "select") {
      this.questions[index].responses.push(this.response);
      console.log(this.questions[index].responses);
    }
    else if(inputType === "checkbox")
    {
      this.questions[index].responses = this.responses;
      console.log(this.questions[index].responses);
    }
    this.response = undefined;
    this.responses = [];
    ++this.count;
  }

  increment() {
    ++this.count;
  }

  exists( array: any[]): boolean {
    if(array.length === 0)
    {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.questionService.getQuestions().toPromise()
    .then((temp: Question[]) => {
      this.questions = temp;
    }).catch(err => {
      this.errorHandler.handleError(err);
    });
  }

}


