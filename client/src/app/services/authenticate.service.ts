import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Signup new service.
   *
   * @param {*} user
   * @returns {Observable<any>}
   * @memberof AuthenticateService
   */
  signup(user: any): Observable<any> {
    return this.http.post(`${environment.server}/api/auth/signup`, user).pipe(
      shareReplay()
    );
  }

  /**
   * Logs a user in.
   *
   * @param {*} user
   * @returns {Observable<any>}
   * @memberof AuthenticateService
   */
  login(user: any): Observable<any> {
    return this.http.post(`${environment.server}/api/auth/login`, user).pipe(
      tap(response => {
        console.log(response);
        this.setSession(response);
      }),
      shareReplay()
    );
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'seconds');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}
}
