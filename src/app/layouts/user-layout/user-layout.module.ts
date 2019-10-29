import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './../../pages/home/home.component';
import { LandingComponent } from './../../pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserLayoutRoutingModule } from './user-layout-routing.module';

const UserLayout = [
  LandingComponent,
  HomeComponent
]

@NgModule({
  declarations: [
    UserLayout
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    FontAwesomeModule,
    NgbModule,
  ],
  // exports: [
  //   UserLayout
  // ]
})
export class UserLayoutModule { }
