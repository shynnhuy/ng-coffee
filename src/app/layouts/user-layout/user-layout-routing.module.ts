import { RegisterComponent } from './../../pages/register/register.component';
import { LoginComponent } from './../../pages/login/login.component';
import { HomeComponent } from './../../pages/home/home.component';
import { LandingComponent } from './../../pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
