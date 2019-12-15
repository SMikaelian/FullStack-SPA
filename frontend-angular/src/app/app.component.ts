import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  template: `<nav></nav><router-outlet></router-outlet>`
})
export class AppComponent {
  
}


//Router-outlet let's angular know where to render the view you are trying to route to