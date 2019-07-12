import { Component, OnInit, ErrorHandler, OnChanges } from '@angular/core';
import { Question } from 'src/app/objects/question'
import { Option } from 'src/app/objects/option'
import { QuestionsService } from 'src/services/questions.service'
import { Router } from '@angular/router';
import { AnswersService } from 'src/services/answers.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {

  questions: Question[];
  errorHandler: ErrorHandler;
  count: number;
  response: any;
  responses: any[];
  //checked: boolean;
  changed: boolean;
  answers: string[];
  
  constructor(private questionService: QuestionsService,
     private answersService: AnswersService, private router: Router) { 
    this.count = 0;
    this.responses = [];
    this.response = undefined;
    //this.checked = false;
    this.changed = false;
    this.answers = [];
  }

  ngOnInit() {
    this.questionService.getQuestions().toPromise()
    .then((temp: Question[]) => {
      this.questions = temp;
    }).catch(err => {
      this.errorHandler.handleError(err);
    });
  }

  toggleChecked(option: Option) {
    option.checked = !option.checked;
  }

  addResponses(response: Option, event:any, inputType: string) {
    this.toggleChecked(response);
    var target = event.target || event.srcElement || event.currentTarget;
    if(inputType !== "checkbox") {
      if (target && response.checked) {
        this.response = response.name;
      }
      // else if(target){
      //   this.response = undefined;
      // }
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
    if(inputType !== "checkbox") {
      this.questions[index].responses.push(this.response);
    }
    else if(inputType === "checkbox") {
      this.questions[index].responses = this.responses;
    }
    this.response = undefined;
    this.responses = [];
    if(this.done()) {
      this.compile();
      this.navToResults();
    } 
    if(this.questions[index].alternate) {
      if(this.questions[index].responses[0] === "Yes") {
        ++this.count;
      }
      else {
        this.count += 2;
      }
    }
    else {
      ++this.count;
    }
  }

  exists( array: any[]): boolean {
    if(array.length === 0)
    {
      return false;
    }
    return true;
  }

  navToResults(){
    this.changed = true;
    setTimeout(() => {
      this.router.navigateByUrl('library/ways-to-help');
    }, 1000);  
  }

  done() {
    if(this.count === this.questions.length-1) {
      return true;
    }
    return false;
  }

  compile() {
    for(let i = 0; i < this.questions.length; ++i) {
      for(let j = 0; j < this.questions[i].responses.length; ++j) {
        this.answers.push(this.questions[i].responses[j]);
      }
    }
    this.answersService.setAnswers(this.answers);
  }



}


