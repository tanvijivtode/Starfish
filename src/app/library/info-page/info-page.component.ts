import { Component, OnInit, ErrorHandler, OnChanges } from '@angular/core';
import { Question } from 'src/app/objects/question'
import { QuestionsService } from '/Users/tjivtode/Documents/Personal/starfish/src/services/questions.service'
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
    this.checked = false;
  }

  addResponse(response: any, event:any) {
    var target = event.target || event.srcElement || event.currentTarget;
    if (target) {
      // this.questions[index].responses.push(response);
      this.response = response;
    }
    // console.log(this.questions[index].responses);
  }

  show() {
    console.log(this.responses);
  }

  toggleChecked() {
    
  }

  addResponses(checkedElem: any, event:any) {
    //var target = event.target || event.srcElement || event.currentTarget;
    if (checkedElem.clicked) {
      // this.questions[index].responses.push(response);
      this.responses.push(checkedElem);
    }
    else {
      var index = this.responses.findIndex(checkedElem);
      this.responses.splice(index, 1);
    }
    console.log(this.responses);
    // console.log(this.questions[index].responses);
  }



  increment() {
    ++this.count;
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

