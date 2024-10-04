import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCOUNTS_ENDPOINT, FUNC_API } from '../constant/Endpoint';
import { catchError, throwError } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private oAuthService: OAuthService,) { }

  getUserInfo() {
    return this.http.get(ACCOUNTS_ENDPOINT.MEMBER_ME);
  }

  //Avatar service
  uploadAvatar(imageData: any) {
    const formData = new FormData();
    formData.append('file', imageData);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.oAuthService.getIdToken()
      })
    };
    return this.http.post<any>(FUNC_API.AVATAR, formData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAvatar() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.oAuthService.getIdToken()
      })
    };
    return this.http.get(FUNC_API.AVATAR, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
