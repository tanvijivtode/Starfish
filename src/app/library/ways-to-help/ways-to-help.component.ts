import { Component, OnInit, ErrorHandler, Input } from '@angular/core';
import { WayToHelp } from 'src/app/objects/wayToHelp'
import { WaysToHelpService } from 'src/services/ways-to-help.service';
import { Router } from '@angular/router';
import { AnswersService } from 'src/services/answers.service';


@Component({
  selector: 'app-ways-to-help',
  templateUrl: './ways-to-help.component.html',
  styleUrls: ['./ways-to-help.component.css'],
})
export class WaysToHelpComponent implements OnInit {



  results: WayToHelp[];
  filteredResults: any[];
  answers: any[];
  errorHandler: ErrorHandler;
  router:  Router;

  constructor(private answersService: AnswersService, private waysToHelpService: WaysToHelpService) { 
    this.results = [];
    this.filteredResults = [];
    this.answers = [];
  }

  filterResults() {
    for(let i = 0; i < this.answers.length; ++i) {
      for(let j = 0; j < this.results.length; ++j) {
        for(let k = 0; k < this.results[j].tags.length; ++k)
        {
          if(this.answers[i].toLocaleLowerCase().includes(this.results[j].tags[k]))
          {
            this.filteredResults.push(this.results[j]);
          }
        }
      }
    }
  }

  ngOnInit() {
    this.answers = this.answersService.getAnswers();
    console.log('answers: ' + this.answers);
    this.waysToHelpService.getWaysToHelp().toPromise()
    .then((temp: WayToHelp[]) => {
      this.results = temp;
      console.log("results: " + this.results);
      this.filterResults();
      console.log("filtered results: " + this.filteredResults);
      for(let i = 1; i < this.filteredResults.length+1; ++i) {
        setTimeout(() => {
          this.filteredResults[i-1].fadeIn = true;
        }, i*300); 
      } 
    }).catch(err => {
      this.errorHandler.handleError(err);
    });
  }


}
