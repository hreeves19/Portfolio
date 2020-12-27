import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Signup new service
   *
   * @param {*} user
   * @returns {Observable<any>}
   * @memberof AuthenticateService
   */
  signup(user: any): Observable<any> {
    return this.http.post(`${environment.server}/api/auth/signup`, user);
  }
}
