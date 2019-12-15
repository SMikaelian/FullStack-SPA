import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent {

    quizzes

    constructor(private api: ApiService) {}

    ngOnInit() { //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.api.getAllQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
}