import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {ActivatedRoute} from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FinishedComponent} from './finished.component'

@Component({
    templateUrl: './playQuiz.component.html'
    
})

export class PlayQuizComponent {
    
    quizId
    questions //object for the quizzes list

    //Inject the MatDialog in the constructor
    constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog){

    }
    ngOnInit(){ //when a question is clicked it will be notified here in subscribe and we will take that value and set it to our components property
        this.quizId= this.route.snapshot.paramMap.get('quizId')

        
        this.api.getQuestions(this.quizId).subscribe(res => {
            this.questions = res

            //Create an orders list.
            this.questions.array.forEach(q => {
                q.answers = [q.corretAnswer, q.answer1, q.answer2, q.answer3]
                shuffle(q.answers)
            });
        })
    }

    //Total of the order $
    finish(){
        var correct = 0;
        this.questions.forEach(q=> {
            if(q.correctAnswer == q.selectedAnswer)
                correct++
        });
        const dialogRef = this.dialog.open(FinishedComponent, {
            data: { correct, total: this.questions.length}
          });
        console.log(correct)
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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
