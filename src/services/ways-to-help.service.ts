
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WayToHelp } from 'src/app/objects/wayToHelp';

@Injectable({
  providedIn: 'root'
})
export class WaysToHelpService {

  constructor(protected http: HttpClient) { 
    // this.getWaysToHelp().subscribe(data => {
    //               console.log(data);
    //           });
  }

  public getWaysToHelp(): Observable<WayToHelp[]> {
  
    return this.http.get<WayToHelp[]>('./assets/mockData/ways-to-help.json');
  }
}