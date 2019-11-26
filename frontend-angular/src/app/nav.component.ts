import { Component } from '@angular/core';
import {AuthService} from './auth.service'


@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">My Order</button>
    <button mat-button routerLink="/play">Play</button>
    <span style="flex: 1 1 auto;"></span>
    <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
    <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
    <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()")>Logout</button>
  </mat-toolbar>
  `
})

export class NavComponent {
  //Inject with a constructor
  constructor(private auth: AuthService){

  }
}


//Router-outlet let's angular know where to render the view you are trying to route to