import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';
// import { UserProfileService } from '../core/services/user-profile.service';

@Injectable({
  providedIn: 'root'
})
// export class CanActivateGuard implements CanActivate {
//   constructor(private userProfileService: UserProfileService, private router: Router) {}

//   getCurrentPath(state: RouterStateSnapshot) {
//     let path = state.url;
//     // If path contains querystring remove them from the login redirect path
//     // Because we do not know the state of the application after login
//     if (state.url.indexOf('?') !== -1) {
//       path = state.url.substring(0, state.url.indexOf('?'));
//     }
//     return path;
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     if (this.userProfileService.getIsAuthenticated()) {
//       return of(true);
//     }
//     const redirectPath = this.getCurrentPath(state);
//     this.userProfileService.setRedirectRouteAfterLogin(redirectPath);
//     this.router.navigate(['/']);
//     return of(false);
//   }
// }

export class CanActivateGuard  implements CanActivate{
  
  constructor(
    public router: Router,
    private oAuthService: OAuthService,
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.oAuthService.hasValidAccessToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
