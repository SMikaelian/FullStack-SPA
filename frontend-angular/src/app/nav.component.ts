import { Component } from '@angular/core';


@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">Quiz</button>
    <span style="flex: 1 1 auto;"></span>
    <button mat-button routerLink="/register">Register</button>
  </mat-toolbar>
  `
})
export class NavComponent {
  title = 'my frontend';
}


//Router-outlet let's angular know where to render the view you are trying to route to