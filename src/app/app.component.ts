import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthCodeFlowConfig } from './auth/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'msa-ui';

  constructor(private router: Router, private oAuthService: OAuthService){}
  ngOnInit(): void {
    this.oAuthService.configure(AuthCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocument();
    this.oAuthService.setupAutomaticSilentRefresh();
  }

  goToUserPage(){
    this.router.navigate(['/'])
  }
  
  goToSkillPage(){
    this.router.navigate(['/skill'])
  }

  goToAdminPage(){
    this.router.navigate(['/admin'])
  }
}
