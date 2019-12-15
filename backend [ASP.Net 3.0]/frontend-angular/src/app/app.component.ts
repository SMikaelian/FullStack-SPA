import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>'
  //<button *ngIf="!isAuthenticated" (click)="login()"> Login </button>
  //<button *ngIf="isAuthenticated" (click)="logout()"> Logout </button>
  //<router-outlet></router-outlet>
})
export class AppComponent {
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