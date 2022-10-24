import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup
  constructor(public fb: FormBuilder) {
    this.formRegister = this.fb.group({
      'name': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
      'email':new FormControl("", Validators.required),
      'passw': new FormControl("", Validators.required),
      'confirmPassw': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

}
