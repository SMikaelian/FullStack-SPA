import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'quiz', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './quiz.component.html'
    
})

export class QuizComponent {

    quiz = {}


    constructor(private api: ApiService){

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
    }
    

}