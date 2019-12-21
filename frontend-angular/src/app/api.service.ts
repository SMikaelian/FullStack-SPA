import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class ApiService
{
    private selectedQuestion = new Subject<any>(); //selectedG. property will hold reference to the question we clicked on and select it.
    questionSelected= this.selectedQuestion.asObservable();

    private selectedGame = new Subject<any>(); //selectedG. property will hold reference to the question we clicked on and select it.
    gameSelected= this.selectedGame.asObservable();
    
    constructor(private http: HttpClient) {}
    
    getQuestions(quizId) {
        return this.http.get(`https://guessinggame20191216110748.azurewebsites.net/api/questions/${quizId}`);
        }
        //https://localhost:44351
    getGames() {
        return this.http.get('https://guessinggame20191216110748.azurewebsites.net/api/quizzes');
        }

    getAllGames() {
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
    postGame(quiz) {
        this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }
        // async postGame(quiz) {
    //     const accessToken = await this.oktaAuth.getAccessToken();
    //     const headers = new HttpHeaders({
    //       Authorization: 'Bearer ' + accessToken
    //     });
    //     this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', quiz, {headers: new HttpHeaders headers({})
    // }).subscribe(res => {
    //         console.log(res)
    //     })
    // }
    putGame(quiz)
    {
        this.http.put(`https://guessinggame20191216110748.azurewebsites.net/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }
    
    deleteGame(quiz)
    {
        this.http.delete('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){ //actual function to execute it
        this.selectedQuestion.next(question)
    }
    selectGame(quiz){
        this.selectedGame.next(quiz)
    }
}
