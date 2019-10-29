import { User } from './../../core/user.model';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faKey, faUserPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  user: User;
  public isCollapsed = false;
  menu = faCoffee;
  login = faKey;
  register = faUserPlus;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

}
