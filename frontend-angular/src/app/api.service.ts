import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class ApiService
{
    private selectedQuestion = new Subject<any>(); //selectedQ. property will hold reference to the question we clicked on and select it.
    questionSelected= this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>(); //selectedQ. property will hold reference to the question we clicked on and select it.
    quizSelected= this.selectedQuiz.asObservable();
    
    constructor(private http: HttpClient) {}
    
    getQuestions(quizId) {
        return this.http.get(`https://guessinggame20191216110748.azurewebsites.net/api/questions/${quizId}`);
        }
        //https://localhost:44351
    getQuizzes() {
        return this.http.get('https://guessinggame20191216110748.azurewebsites.net/api/quizzes');
        }

    getAllQuizzes() {
        return this.http.get('https://guessinggame20191216110748.azurewebsites.net/api/quizzes/all');
        }
    
    postQuestion(question) {
        this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/questions', question).subscribe(res => {
            console.log(res)
            //window.location.reload(true);
        })
        
    }
    putQuestion(question)
    {
        this.http.put(`https://guessinggame20191216110748.azurewebsites.net/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }
    postQuiz(quiz) {
        this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }
    putQuiz(quiz)
    {
        this.http.put(`https://guessinggame20191216110748.azurewebsites.net/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }
    
    deleteQuiz(quiz)
    {
        this.http.delete('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){ //actual function to execute it
        this.selectedQuestion.next(question)
    }
    selectQuiz(quiz){
        this.selectedQuiz.next(quiz)
    }
}
