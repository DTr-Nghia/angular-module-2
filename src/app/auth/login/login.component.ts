import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formdata = { username: '', password: '' };
  submit = false;
  errorMessage = { username: '', password: '' };
  loginMessageError = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit() {
    if (!this.validateFields()) {
      return;
    }
    //call login service
    this.auth
      .login(this.formdata.username, this.formdata.password)
      .subscribe({
        next: (data) => {
          //store token
          this.auth.storeToken(data.token);
          console.log('logged user token is ' + data.token);
          this.auth.canAuthenticate();
        },
        error: (error) => {
          console.log(error);
          this.loginMessageError = error;
        },
      })
      .add(() => {
        console.log('login process completed!');
      });
  }
  validateFields(): boolean {
    if (!this.formdata.username || !this.formdata.password) {
      if (!this.formdata.username) {
        this.errorMessage.username = 'Vui lòng nhập tên người dùng.';
      } else {
        this.errorMessage.username = '';
      }
      if (!this.formdata.password) {
        this.errorMessage.password = 'Vui lòng nhập mật khẩu.';
      } else {
        this.errorMessage.username = '';
      }
      return false;
    }
    return true;
  }
}
