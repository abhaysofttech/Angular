import { AppUser } from './models/app-user';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  save(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
 
  }
//   get(uid: string): Observable<any> {
//     return this.db.object('/users/' + uid).valueChanges();
//  }

get(uid:string):AngularFireObject<AppUser>{
  return this.db.object('/users/'+uid);
  }
}