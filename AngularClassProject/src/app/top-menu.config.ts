import { Routes } from '@angular/router/src/config';import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
 '@angular/router';



export const routerConfig: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'add', component: AddComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];