import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from '../timeSlot'

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})

export class TimeSlotComponent implements OnInit {
  @Input() timeSlot : TimeSlot ;

  constructor() { }

  ngOnInit() {
  }
}
