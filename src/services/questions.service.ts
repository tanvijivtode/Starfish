import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'src/app/objects/question';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questUrl = 'api/questions';  // URL to web api

  constructor(protected http: HttpClient) { 
   
    this.getQuestions().subscribe(data => {
                  console.log(data);
              });

  }

  public getQuestions(): Observable<Question[]> {
  //return of <Question[]>(questions);
    return this.http.get<Question[]>(this.questUrl);
  }
}
