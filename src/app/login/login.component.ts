import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string ='';
  password:string = '';
  onLogin(){
    if(this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
    }else{
      alert('Login failed! Please check your username and password.');
    }
  }
}
