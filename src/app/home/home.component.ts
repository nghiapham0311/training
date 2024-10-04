import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../model/account.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentAccount: AccountModel = new AccountModel;
  currentUserName: string = 'User Name';
  selectedImage!: File;
  imageBase64!: string | ArrayBuffer | null;
  imageAvatar: string = '../assets/images/avatar.png';

  constructor(
    private oAuthService: OAuthService,
    private userService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.buildData();
    this.getAvatar();
  }

  buildData() {
    this.userService.getUserInfo().subscribe({
      next: (res: any) => {
        this.currentAccount = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCurrentUser() {
    const claims = this.oAuthService.getIdentityClaims();
    if (claims && claims['displayname'])
      this.currentUserName = claims['displayname'] as string;
  }

  getAvatar() {
    this.userService.getAvatar().subscribe({
      next: (res: any) => {
        console.log('Get Avatar response ', res);
        if (res.data && res.data.url) {
          this.imageAvatar = res.data.url
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  uploadAvatar(event: any){
    if (event.target.files && event.target.files.length) {
      this.selectedImage = event.target.files[0];
      console.log('this.selectedImage ', this.selectedImage);
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = () => {
        this.imageBase64 = reader.result;
      };
      this.userService.uploadAvatar(this.selectedImage).subscribe({
        next: (res: any) => {
          console.log('Upload Avatar response ', res);
          if(res && res.status === 200){
            this.getAvatar();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
