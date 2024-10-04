import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS  } from '@angular/material/dialog';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SkillComponent } from './skill/skill.component';
import { AdminComponent } from './admin/admin.component';
import { EditUserDialogComponent } from './user/edit-user-dialog/edit-user-dialog.component';
import { APP_ROUTES } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SkillComponent,
    AdminComponent,
    EditUserDialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({ animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0, 0, 0, 0.3)",
      backdropBorderRadius: "4px",
      primaryColour: "#c560e0",
      secondaryColour: "#c560e0",
      tertiaryColour: "#ffffff",}),
    RouterModule.forRoot(APP_ROUTES),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [`${environment.gatewayService}`],
        sendAccessToken: true,
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, 
      useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
