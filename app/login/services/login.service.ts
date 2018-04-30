import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { getString, setString } from "application-settings";
import { User } from "~/types";
import * as  base64 from "base-64";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router,
              @Inject('signin') private api: string) { }

  storeAuthHeader(auth: string) {
    setString('Authorization', auth);
  }

  getAuthHeader(): string {
    return getString('Authorization');
  }

  storeUser(user: User) {
    setString('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(getString('user'));
  }

  signIn(username: string, password: string) {
    const auth = `Basic ${base64.encode(`${username}:${password}`)}`;
    this.http.post(this.api, null, {
      headers: {
        Authorization: auth,
      }
    }).subscribe((user: User) => {
      this.storeAuthHeader(auth);
      this.storeUser(user);
      this.router.navigate(['/chats']);
    }, err => console.error(err));
  }
}
