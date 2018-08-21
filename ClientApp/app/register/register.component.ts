import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

    errorMessage: string = "";

    public userInfo = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
  constructor(private data: DataService, private router: Router) { }

    onRegister() {
        this.data.register(this.userInfo)
            .subscribe(success => {
               // handle the success : )
                // maybe a success component that offers to navigate to shop or to home page
                this.router.navigate(['register-success']);
                
            }, err => this.errorMessage = "Failed to login")
    }

  ngOnInit() {
  }

}
