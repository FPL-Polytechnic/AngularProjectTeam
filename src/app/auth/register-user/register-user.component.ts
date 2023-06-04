import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  
  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPasswords })
  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router,) {

  }

  checkPasswords(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true }
  }

  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.authService.signup(this.formSignup.value).subscribe(data => {

        alert('Thêm danh mục thành công ✅');
        this.router.navigateByUrl('/login');
        
      })
    }
  }
}
