import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PROFILES_ENDPOINT, FUNC_API } from '../constant/Endpoint';
import { UserModel } from '../model/user.model';
import { catchError, throwError } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private oAuthService: OAuthService,) { }

  // Profile service
  getCurrentuserProfile() {
    return this.http.get(PROFILES_ENDPOINT.CURRENT_USER);
  }

  updateProfile(user: UserModel) {
    return this.http.put(`${PROFILES_ENDPOINT.PROFILES}${user.id}`, user);
  }

  //Avatar service
  uploadAvatar(imageData: any) {
    const formData = new FormData();
    formData.append('file', imageData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
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
