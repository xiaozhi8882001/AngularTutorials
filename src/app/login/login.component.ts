import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
      <fieldset ngModelGroup="login">
         <input required type="text" 
         name="username"
          [(ngModel)]="username"
          #usernameRef='ngModel'
          minlength="3">      
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should b at least 3 charactors</div>
          <input required type="password" 
          name="password"
          [(ngModel)]='password'
          #passwordRef='ngModel'>
          
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          <button type="submit">Login</button>
        </fieldset>
    </form>
     
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border:3px solid red;
    }
    input.ng-valid{
      border:3px solid green;
    }
  `],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor( @Inject('auth') private service) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log('auth result is:'
      + this.service.loginWithCredentials(this.username, this.password));
  }

}
