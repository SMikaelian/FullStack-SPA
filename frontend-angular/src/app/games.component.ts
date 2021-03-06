import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'games', //This is for <games></games> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './games.component.html'
    
})

export class GamesComponent {

    quiz = {}
    quizzes

    constructor(private api: ApiService){}
    
    ngOnInit(){
        this.api.getGames().subscribe(res => {
            this.quizzes = res
        })
    }

}
