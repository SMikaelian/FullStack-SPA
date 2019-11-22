import { Component } from '@angular/core'
import { ApiService } from './api.service'


@Component({
    selector: 'play', //This is for <question></question> in html making it an element. Must import in app.component and register in ng module.
    templateUrl: './play.component.html'
    
})

export class PlayComponent {

    quizzes //object for the quizzes list

    constructor(private api: ApiService){

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.api.getAllQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
    step = 0;

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }

}
