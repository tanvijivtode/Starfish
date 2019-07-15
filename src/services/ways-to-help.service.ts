
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WayToHelp } from 'src/app/objects/wayToHelp';

@Injectable({
  providedIn: 'root'
})
export class WaysToHelpService {

  private waysUrl = 'api/ways';  // URL to web api

  constructor(protected http: HttpClient) { 
    // this.getWaysToHelp().subscribe(data => {
    //               console.log(data);
    //           });
  }

  public getWaysToHelp(): Observable<WayToHelp[]> {
  
    return this.http.get<WayToHelp[]>(this.waysUrl);
  }
}