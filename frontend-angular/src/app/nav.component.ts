import { Component } from '@angular/core';


@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">Quiz</button>
    <button mat-button routerLink="/question">Question</button>
    <button mat-button routerLink="/questions">Question List</button>
  </mat-toolbar>
  `
})
export class NavComponent {
  title = 'my frontend';
}


//Router-outlet let's angular know where to render the view you are trying to route to