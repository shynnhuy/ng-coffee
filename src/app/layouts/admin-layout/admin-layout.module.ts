import { routes } from './../../app-routing.module';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './../../pages/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
