import { environment } from './../../../environments/environment';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";

const Firebase = [
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule
]


@NgModule({
  declarations: [],
  imports: [ AngularFireModule.initializeApp(environment.firebase), Firebase],
  exports: [ AngularFireModule, Firebase]
})
export class FirebaseModule { }
