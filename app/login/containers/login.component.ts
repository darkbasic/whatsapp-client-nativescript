import { LoginService } from '../services/login.service';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm: FormGroup;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
    console.log('login component');

    this.signInForm = this.fb.group({
      username: [null, [
        Validators.required,
      ]],
      password: [null, [
        Validators.required,
      ]],
    });
  }

  signIn() {
    const {username, password} = this.signInForm.value;
    this.loginService.signIn(username, password);

  }
}

