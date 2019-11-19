import { Component } from '@angular/core'
import{ FormBuilder} from '@angular/forms'
import { ApiService } from './api.service'


@Component({
    templateUrl: './register.component.html'
    
})

export class RegisterComponent {

    form

    //Inject a form builder inside the constructor
    constructor(private api: ApiService, private fb: FormBuilder){
        this.form = fb.group({
            email: ['']
        })
    }
register(){
    console.log(this.form)
}

}
