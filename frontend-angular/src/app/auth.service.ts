import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable()
export class AuthService
{

    constructor(private http: HttpClient, private router: Router) {}

    get isAuthenticated(){ //To display logout only to logged in people
        return !!localStorage.getItem('token') //will return true if it does exist since !!
    }
    
    register(credentials) {
        this.http.post<any>(`https://localhost:44330/api/Account/`, credentials).subscribe(res=> {
            this.authenticate(res)
        })
    }
    login(credentials) {
        this.http.post<any>(`https://localhost:44330/api/login/`, credentials).subscribe(res=> {
            this.authenticate(res)
        })
    }
    authenticate(res){
        localStorage.setItem('token', res)
        this.router.navigate(['/'])
    }

    logout()
    {
        localStorage.removeItem('token')
    }
}
