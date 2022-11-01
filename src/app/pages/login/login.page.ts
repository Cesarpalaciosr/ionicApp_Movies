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
  token: string
  constructor(private http: HttpClient,private router: Router,public alertController: AlertController) {
   
  }

   async sendlog(){
   // this.token = await JSON.stringify(this.req_token)
     let credentials = {
      username: this.username,
      password: this.password,
      token: this.token
     }
    //  console.log(this.token);
     
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
     
   
     console.log("soy el token: "+ credentials.token);
     
      this.http.post(`${environment.baseUrl}/authentication/token/validate_with_login?api_key=${environment.apiKey}`,{
        "username":credentials.username,
        "password": credentials.password,
        "request_token": credentials.token
      }).subscribe(res =>{
        console.log(res);
        localStorage.setItem('request_token',JSON.stringify(res))
        this.router.navigateByUrl('', {replaceUrl:true});
     },error=>{
        console.log(error);
        
     } )
   }

  ngOnInit() {
    this.http.get<any>(`${environment.baseUrl}/authentication/token/new?api_key=${environment.apiKey}`).subscribe(
      data => {
            this.token = data.request_token
         return;
        },
        (err) => {
          console.log(err);
        }
        )        
    
  }

}
