import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable()
export class ApiService
{
    private selectedQuestion = new Subject<any>(); //selectedQ. property will hold reference to the question we clicked on and select it.
    questionSelected= this.selectedQuestion.asObservable();
    
    constructor(private http: HttpClient) {}
    getQuestions() {
        return this.http.get('https://localhost:44380/api/questions');
        }

    postQuestion(question) {
        this.http.post('https://localhost:44380/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }
    putQuestion(question)
    {
        this.http.put(`https://localhost:44380/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }
    selectQuestion(question){ //actual function to execute it
        this.selectedQuestion.next(question)
    }

}
