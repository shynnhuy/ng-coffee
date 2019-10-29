import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  google = faGoogle;
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.service.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/'])
      }
    })
  }


  googleSignIn() {
    this.service.googleLogin()
  }
}
