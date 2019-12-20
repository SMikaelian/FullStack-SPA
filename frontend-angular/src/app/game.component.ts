import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'game', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './game.component.html'
    
})

export class GameComponent {

    game = {}


    constructor(private api: ApiService){

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.api.gameSelected.subscribe(game => this.game = game)
    }
    

}
