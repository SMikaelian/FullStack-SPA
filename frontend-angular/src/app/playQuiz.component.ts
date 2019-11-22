import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: './playQuiz.component.html'
    
})

export class PlayQuizComponent {
    
    quizId
    questions //object for the quizzes list

    constructor(private api: ApiService, private route: ActivatedRoute){

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.quizId= this.route.snapshot.paramMap.get('quizId')

        
        this.api.getQuestions(this.quizId).subscribe(res => {
            this.questions = res
        })

    }
    

}
