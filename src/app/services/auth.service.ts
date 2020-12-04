import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';

import { switchMap, take, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router
  ) {
    //this.user$ = this.afAuth.authState.pipe(
    //  switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
    //);
   }
}
