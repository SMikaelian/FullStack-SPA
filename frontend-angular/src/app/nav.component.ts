import { Component } from '@angular/core';
import {AuthService} from './auth.service'
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">My Games</button>
    <button mat-button routerLink="/play">Play</button>
    <span style="flex: 1 1 auto;"></span>
    <button mat-button *ngIf="!isAuthenticated" (click)="login()"> Login </button>
    <button mat-buttonn *ngIf="isAuthenticated" (click)="logout()"> Logout </button>
  </mat-toolbar>
  `
})

export class NavComponent {
  //Inject with a constructor
  title = 'my frontend';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect('/profile');
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}


//Router-outlet let's angular know where to render the view you are trying to route to

// <span style="flex: 1 1 auto;"></span>
// <button *ngIf="!isAuthenticated" (click)="login()"> Login </button>
// <button *ngIf="isAuthenticated" (click)="logout()"> Logout </button>
// <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
// <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
// <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>