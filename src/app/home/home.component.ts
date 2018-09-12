import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wedding_homeImagePath: string;

  constructor() {
  this.wedding_homeImagePath = "assets/home/home.jpg"
}

  ngOnInit() {
  }
}
