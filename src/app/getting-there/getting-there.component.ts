import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-there',
  templateUrl: './getting-there.component.html',
  styleUrls: ['./getting-there.component.css']
})
export class GettingThereComponent implements OnInit {
  abbeyParkingImagePath: string;
  venueLocationImagePath: string;

  constructor() {
    this.abbeyParkingImagePath = "assets/getting-there/abbey_parking.jpg";
    this.venueLocationImagePath = "assets/getting-there/venue_location.png";
  }

  ngOnInit() {
  }

}
