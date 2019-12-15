import { Component } from '@angular/core'
import{ FormBuilder, Validators} from '@angular/forms'
import { AuthService } from './auth.service'


@Component({
    templateUrl: './register.component.html'
    
})

export class RegisterComponent {

    form

    //Inject a form builder inside the constructor
    constructor(private auth: AuthService, private fb: FormBuilder){
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }



}
