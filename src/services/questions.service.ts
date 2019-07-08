import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'src/app/objects/question';
import { Observable, of } from 'rxjs';
//import questions from  '../assets/mockData/questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(protected http: HttpClient) { 
   
    this.getQuestions().subscribe(data => {
                  console.log(data);
              });

  }

  public getQuestions(): Observable<Question[]> {
  //return of <Question[]>(questions);
    return this.http.get<Question[]>('./assets/mockData/questions.json');
  }
}
