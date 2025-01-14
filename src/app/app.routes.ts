import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'register',
        loadComponent:()=>import('./core/auth/components/register/register.component').then(c=>c.RegisterComponent)
    }
];
