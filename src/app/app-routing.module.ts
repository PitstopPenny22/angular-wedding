import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import { OnTheDayComponent } from './on-the-day/on-the-day.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'getting-there', component: GettingThereComponent },
  { path: 'gifts', component: GiftsComponent},
  { path: '', component: HomeComponent },
  { path: 'on-the-day', component: OnTheDayComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'venue', component: VenueComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
