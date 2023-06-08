import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  loginForm: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.loginForm.value;
    this.userService.login(data).subscribe((user) => {
      console.log(user);        
        localStorage.setItem('accessToken', JSON.stringify(user))
        alert("Đăng nhập thành công")
        setTimeout(()=>{
          this.router.navigateByUrl('/')
        }, 1000)    
    })
  }
}
