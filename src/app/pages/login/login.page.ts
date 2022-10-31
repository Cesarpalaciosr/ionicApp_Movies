import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { MovieService } from '../../services/getapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string
  password: string

  constructor(private http: HttpClient,private router: Router,public alertController: AlertController) {
   }

     async sendlog(){
     let credentials = {
      username: this.username,
      password:this.password
     }

     if (credentials == null) {
        const alert = await this.alertController.create({
          message: 'Datos invalidos vuelve a ingresarlos',
          buttons: ['OK']
        })

        await alert.present();
        return;
     }
     console.log(credentials);
     console.log(credentials.username);
     
    //  token = this.req_token();
    //  this.http.post(`${environment.baseUrl}/authentication/${token}}/validate_with_login`,credentials).subscribe(res =>{
        // console.log(res);
        
    //  },error=>{
        // console.log(error);
        
    //  } )
    // localStorage.setItem('user',JSON.stringify(user))
    
  }
    async req_token(){
      var token =  this.http.get(`${environment.baseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
      console.log(token); 
      
    }
  ngOnInit() {
  }

}
