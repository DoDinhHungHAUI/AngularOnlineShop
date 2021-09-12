import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder , Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../user/user.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private accountService : AccountService , private router : Router , private fb : FormBuilder , private toastr : ToastrService) {

   }

  ngOnInit(): void {
  }

  profileUser = this.fb.group({
    userName : ['' , Validators.required],
    passWord : ['' , Validators.required],
  });

  onClickLogin(UserName : any , passWord : any)
  {
    this.accountService.userAuthentication(UserName,passWord).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
      this.showLoginSuccess();
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      this.showLoginError();
    });
  }

  showLoginSuccess() {
    this.toastr.success('Đăng nhập thành công', 'Thông báo', {
      timeOut: 2000,
    });
  }
  showLoginError() {
    this.toastr.error('Có lỗi trong quá trình xử lý', 'Thông báo', {
      timeOut: 2000,
    });
  }

}
