import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'question', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './question.component.html'
    
})

export class QuestionComponent {

    question={}
    quizId
    arrayQ=[]

    constructor(private api: ApiService, private route: ActivatedRoute){ //Inject route with constructor

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.quizId= this.route.snapshot.paramMap.get('quizId')

        this.api.questionSelected.subscribe(question => this.question = question)
    }

    post(question) {
        question.quizId= this.quizId
        this.api.postQuestion(question)
        window.location.reload(true);
        //this.arrayQ.push(question);
    }

}
