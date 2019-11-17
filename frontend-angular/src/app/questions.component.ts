import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'questions', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './questions.component.html'
    
})

export class QuestionsComponent {

    question={}
    questions

    constructor(private api: ApiService){}
    
    ngOnInit(){
        this.api.getQuestions().subscribe(res => {
            this.questions = res
        })
    }

    post(question) {
        this.api.postQuestion(question)
    }

}
