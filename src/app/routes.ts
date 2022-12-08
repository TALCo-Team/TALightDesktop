import { Routes } from 'node_modules/@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
];