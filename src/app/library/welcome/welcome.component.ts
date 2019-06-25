import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  changed: boolean;

  constructor(private router: Router){
    this.changed = false;
   }

  navToInfoPage() {
    this.changed = true;
    setTimeout(() => {
      this.router.navigateByUrl('library/info-page');
    }, 2000);  //6s
  }

  ngOnInit() {
  }

}
