import { Component, Inject, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  loading: boolean = false;
  constructor(
    private router: Router,
    private oAuthService: OAuthService,
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.oAuthService.loadDiscoveryDocumentAndLogin().then(() => {
    if (this.oAuthService.hasValidAccessToken()) {
      this.router.navigate(['/']);
      this.loading = false;
    }
    });
  }


  login() {
    
  }
}
