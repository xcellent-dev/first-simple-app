import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl:'./app.component.html',
  template : `
    <app-customers></app-customers>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string;

  constructor() {
  }

  ngOnInit() {
    this.title = "Hello World using Data Binding"
  }

}
