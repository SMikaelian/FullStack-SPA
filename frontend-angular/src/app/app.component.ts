import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'my frontend';
}


//Router-outlet let's angular know where to render the view you are trying to route to