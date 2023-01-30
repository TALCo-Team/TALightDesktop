import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ConnectViewComponent } from './views/connect-view/connect-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SelectProblemViewComponent } from './views/select-problem-view/select-problem-view.component';
import { DemoViewComponent } from './views/demo-view/demo-view';

export const routes: Routes = [
    /*
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeViewComponent
    },
    */

    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeViewComponent
    },

    /*
    {
        path: 'connect',
        component: ConnectViewComponent
    },

    {
        path: 'select-problem',
        component: SelectProblemViewComponent
    },
    */
    {
        path: 'demo',
        component: DemoViewComponent
    },
];