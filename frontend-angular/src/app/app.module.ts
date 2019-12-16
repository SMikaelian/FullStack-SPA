import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes} from '@angular/router'
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {ApiService} from './api.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component'
import{ HomeComponent} from './home.component'
import{ NavComponent} from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent} from './quizzes.component'
import {RegisterComponent} from './register.component'
import {LoginComponent} from './login.component'
import {AuthService} from './auth.service'
import {AuthInterceptor} from './auth.interceptor'
import { PlayComponent} from './play.component'
import{ PlayQuizComponent} from './playQuiz.component'
import {FinishedComponent} from './finished.component'
import {OktaAuthModule, OktaCallbackComponent, OktaAuthGuard} from '@okta/okta-angular';
import { ProfileComponent } from './profile.component';


//, canActivate:[OktaAuthGuard] 
//Creating routes in angular - URL routes
const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent},
  { path: 'playQuiz/:quizId', component: PlayQuizComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent},
  { path: 'myProfile', component: ProfileComponent}
]

const config = {
  issuer: 'https://dev-504074.okta.com/oauth2/default',
  redirectUri: 'https://myguessing-game.netlify.com/implicit/callback',
  clientId: '0oa287p32jLLOd1ri357',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
}

@NgModule({
  declarations: [
        AppComponent,
        QuestionComponent,
        QuestionsComponent, 
        HomeComponent, 
        NavComponent, 
        QuizComponent, 
        QuizzesComponent, 
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        PlayComponent,
        PlayQuizComponent,
        FinishedComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes),
      AppRoutingModule,
      BrowserAnimationsModule, 
      MatButtonModule, 
      MatInputModule, 
      MatCardModule, 
      FormsModule, 
      MatListModule,
      MatToolbarModule, 
      ReactiveFormsModule,
      MatExpansionModule,
      MatRadioModule,
      MatDialogModule,
      OktaAuthModule.initAuth(config)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  //for dialogs we need to register them differently.
  entryComponents: [FinishedComponent]
})
export class AppModule { }
