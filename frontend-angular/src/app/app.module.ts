import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router'
import {MatListModule} from '@angular/material/list';
import {ApiService} from './api.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import{ HomeComponent} from './home.component'
import{ NavComponent} from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent} from './quizzes.component'


//Creating routes in angular - URL routes
const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent }
  
]

@NgModule({
  declarations: [
        AppComponent,
        QuestionComponent,
        QuestionsComponent, HomeComponent, NavComponent, QuizComponent, QuizzesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes),
      AppRoutingModule,
      BrowserAnimationsModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule, MatListModule, MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
