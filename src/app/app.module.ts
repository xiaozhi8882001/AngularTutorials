import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "app/core/auth.service";
import { routing } from "app/app.routes";
import { TodoComponent } from './todo/todo.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryTodoDbService } from "app/todo/todo-data";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],
  providers: [
    { provide: 'auth', useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
