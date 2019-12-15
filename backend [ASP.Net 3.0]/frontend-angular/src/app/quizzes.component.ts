import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'quizzes', //This is for <quizzes></quizzes> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './quizzes.component.html'
    
})

export class QuizzesComponent {

    quiz = {}
    quizzes

    constructor(private api: ApiService){}
    
    ngOnInit(){
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }

}
