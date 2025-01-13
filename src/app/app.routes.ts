import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
    }
];
