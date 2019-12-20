import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'questions', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './questions.component.html'
    
})

export class QuestionsComponent {

    question={}
    questions

    constructor(private api: ApiService, private route: ActivatedRoute){
        
    }
    
    ngOnInit(){
        var gameId= this.route.snapshot.paramMap.get('gameId')


        this.api.getQuestions(gameId).subscribe(res => {
            this.questions = res
        })
    }

    post(question) {
        this.api.postQuestion(question)
    }

}
