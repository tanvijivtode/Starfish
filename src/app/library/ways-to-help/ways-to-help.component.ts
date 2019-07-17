import { Component, OnInit, ErrorHandler, Input } from '@angular/core';
import { WayToHelp } from 'src/app/objects/wayToHelp'
import { WaysToHelpService } from 'src/services/ways-to-help.service';
import { Router } from '@angular/router';
import { AnswersService } from 'src/services/answers.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Answer } from 'src/app/objects/answer';


@Component({
  selector: 'app-ways-to-help',
  templateUrl: './ways-to-help.component.html',
  styleUrls: ['./ways-to-help.component.css'],
})
export class WaysToHelpComponent implements OnInit {

  results: WayToHelp[];
  filteredResults: any[];
  errorHandler: ErrorHandler;
  router:  Router;
  loaded: boolean;

  constructor(private answersService: AnswersService, private waysToHelpService: WaysToHelpService) { 
    this.results = [];
    this.filteredResults = [];
    this.loaded = false;
  }

  filterResults(array: Answer[]) {
  //determine which waystohelp have all tags in their tags array match to any of answers in the answers array
  //filter the results array by the objects where any of their tags are included in any of the answers names
    function check(element) {
      return array.some(x => x.name.toString().toLocaleLowerCase().includes(element));
    }
    this.filteredResults = this.results.filter(x => x.tags.some(check)); 
  }

  printResults(){
    console.log("filtered results: " + this.filteredResults);
    for(let i = 1; i < this.filteredResults.length+1; ++i) {
      setTimeout(() => {
        this.filteredResults[i-1].fadeIn = true;
      }, i*300); 
    } 
  }

  ngOnInit() {
    this.waysToHelpService.getWaysToHelp().subscribe((temp: WayToHelp[]) => {
      this.results = temp; 
    });
    this.answersService.getAnswers().subscribe((answers: Answer[]) => {
     setTimeout(() => {
      this.filterResults(answers);
      this.loaded = true;
      this.printResults();
    }, 3000); 
    });
  }
}
