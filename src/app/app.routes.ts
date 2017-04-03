import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core/core";
import { TodoComponent } from "app/todo/todo.component";
export const routes: Routes = [
    {
        path: '',
        component: TodoComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);