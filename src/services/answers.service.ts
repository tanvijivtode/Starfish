import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Answer } from 'src/app/objects/answer'

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  answers: Answer[] = [];

  private answersUrl = 'api/answers';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(protected http: HttpClient) { 
   
  }

  public getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.answersUrl);
  }

  public addAnswer(answer: Answer): Observable<Answer>  {
    return this.http.post<Answer>(this.answersUrl, answer);
  }

  //unused, practice with CRUD commands
  public deleteAnswer(answer: Answer): Observable<Answer>  {
    const id = answer.id;
    const url = `${this.answersUrl}/${id}`;
    return this.http.delete<Answer>(url);
  }

  public updateAnswer(answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(this.answersUrl, answer);
  }

}
