import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup
  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formRegister = this.fb.group({
      'name': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
      'email':new FormControl("", Validators.required),
      'passw': new FormControl("", Validators.required),
      'confirmPassw': new FormControl("",Validators.required)
    })
   }

   async sendReg(){
    console.log("sendlog");
    var f = this.formRegister.value;

     if (this.formRegister.invalid) {
        const alert = await this.alertController.create({
          header: 'Datos invalida',
          message: 'ingrese de nuevo los datos',
          buttons: ['OK']
        })

        await alert.present();
        return;
     }

     /*Falta ageregar datos del registro*/
      var user = {
        name: f.name
      }
  }
  ngOnInit() {
  }

}
