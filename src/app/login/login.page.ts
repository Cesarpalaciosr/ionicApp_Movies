import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formLogin = this.fb.group({
      'name': new FormControl("", Validators.required),
      'passw': new FormControl("", Validators.required)
    })
   }

   async sendlog(){
     console.log("sendlog");
     var f = this.formLogin.value;

     if (this.formLogin.invalid) {
        const alert = await this.alertController.create({
          message: 'Datos invalidos vuelve a ingresarlos',
          buttons: ['OK']
        })

        await alert.present();
        return;
     }

     var user = {
      name: f.name,
      passw: f.passw
    }

    localStorage.setItem('user',JSON.stringify(user))
   }
  ngOnInit() {
  }

}
