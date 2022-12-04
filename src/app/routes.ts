import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ConnectViewComponent } from './views/connect-view/connect-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'connect',
        component: ConnectViewComponent
    },

    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeViewComponent
    },
];