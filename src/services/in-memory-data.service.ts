import { Injectable } from '@angular/core';
import waysToHelp from 'src/assets/mockData/ways-to-help.json'
import questionsArray from 'src/assets/mockData/questions.json'
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = questionsArray;
    const ways = waysToHelp;
    const answers = [];
    return {questions, ways, answers};
  }

  constructor() { }
}
