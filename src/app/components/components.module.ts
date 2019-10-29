import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  imports: [ CommonModule , RouterModule, NgbModule, FontAwesomeModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class ComponentsModule { }
