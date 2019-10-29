import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from "firebase/app";


import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private route: Router
  ) {
    // @ts-ignores
    this.user$ = afAuth.authState.pipe(switchMap(user => {
      if (user) {
        // this.db.doc<User>(`user/${user.uid}`).valueChanges().subscribe(u => console.log(u));
        return this.db.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null)
      }
    }))
  }

  /// Login and update Data

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log(credential.user);
    return this.updateUserData(credential.user)
  }

  private updateUserData({ uid, displayName, email, photoURL }: User) {
    console.log(uid, displayName, email, photoURL);
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${uid}`);
    const data = {
      uid,
      displayName,
      email,
      photoURL,
      roles: {
        member: true
      }
    };
    return userRef.set(data, { merge: true })
  }

  async logout() {
    await this.afAuth.auth.signOut();
    return this.route.navigate(['/'])
  }

  /// Authorization 

  private checkAuthorization(user: User, allowedRoles: string[]) {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  isAdmin(user: User): boolean {
    const allowed = ['administrator'];
    return this.checkAuthorization(user, allowed);
  }
}
