import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { HomeComponent } from './home/home.component';
import { OnTheDayComponent } from './on-the-day/on-the-day.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { VenueComponent } from './venue/venue.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    HomeComponent,
    OnTheDayComponent,
    GettingThereComponent,
    VenueComponent,
    ContactUsComponent,
    TimeSlotComponent,
    RsvpComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
