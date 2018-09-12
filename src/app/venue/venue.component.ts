import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  abbeyImagePath: string;
  constructor() {
    this.abbeyImagePath = "assets/venue/abbeyBuildings.jpg"
  }

  ngOnInit() {
  }

}
