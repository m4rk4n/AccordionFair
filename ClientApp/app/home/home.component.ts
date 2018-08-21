import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
    templateUrl: 'home.component.html',
    providers: [
        { provide: CarouselConfig, useValue: { interval: 4350, noPause: true, showIndicators: false } }
    ],
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
