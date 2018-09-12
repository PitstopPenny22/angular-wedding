import { Component, OnInit } from '@angular/core';
import { TimeSlot } from '../timeSlot';
import { SCHEDULE } from '../schedule';

@Component({
  selector: 'app-on-the-day',
  templateUrl: './on-the-day.component.html',
  styleUrls: ['./on-the-day.component.css']
})

export class OnTheDayComponent implements OnInit {
  schedule: TimeSlot[];

  constructor() {
  }

  ngOnInit() {
    this.schedule = SCHEDULE;
  }
}
