import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formdata = { username: "", password: "" };
  submit = false;
  errorMessage = {username: "", password: ""};
  loginMessageError ="";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit() {
    if (!this.validateFields()) {
      return;
    }
    //call login service
    this.auth.login(this.formdata.username, this.formdata.password)
      .subscribe({
        next: data => {
          //store token
          this.auth.storeToken(data.token);
          this.auth.storeInfo(data.this)
          console.log('logged user token is ' + data.token);
          this.auth.canAuthenticate();
        },
        error: error => {
          console.log(error);
          this.loginMessageError = error
        }
      }).add(() => {
        console.log('login process completed!');
      })
  }
  validateFields(): boolean {
    if(!this.formdata.username || !this.formdata.password) {
      if (!this.formdata.username) {
        this.errorMessage.username = 'Vui lòng nhập tên người dùng.';
      }else {
        this.errorMessage.username = ''
      }
      if(!this.formdata.password) {
        this.errorMessage.password = 'Vui lòng nhập mật khẩu.';
      }else { 
        this.errorMessage.username = ''
      }
      return false;
    }
    return true;
  }
}