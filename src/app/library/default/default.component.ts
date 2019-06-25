import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  isLoaded: boolean;
  
  constructor(private router: Router){
    this.isLoaded = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = false
    }, 2000);

    setTimeout(() => {
      this.router.navigateByUrl('library/welcome');
    }, 4000);  //6s
  }

}
