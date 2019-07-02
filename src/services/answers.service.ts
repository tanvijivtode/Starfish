import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  answers: any[] = [];

  constructor() { 
  }

  public getAnswers(): any[] {
    return this.answers;
  }

  public setAnswers(array: any[]) {
    for(let i = 0; i < array.length - 1; ++i){
      this.answers[i] = array[i];
    }
  }
}
