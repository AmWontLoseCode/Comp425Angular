import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {SearchComponent} from './search/search.component';
  
=======
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { NserverErrorComponent } from './error/nserver-error/nserver-error.component';

>>>>>>> Stashed changes

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
<<<<<<< Updated upstream
  {path: 'search', component: SearchComponent}
=======
  {path: 'search', component: SearchComponent},
  {path: '', component: HomeComponent},
  {path: 'NotFound', component: NotFoundComponent},
  {path: 'ServerError', component: NserverErrorComponent},
  {path: '**', redirectTo: '/ServerError', pathMatch: 'full'},
  {path: '**', redirectTo: '/NotFound', pathMatch: 'full'}

>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< Updated upstream
// Amadou Tall-->
//best practice export array and import it in app -component-->
export const routingComponents = [AddComponent, HomeComponent, SearchComponent]
=======
export const routingComponents = [AddComponent, HomeComponent, SearchComponent, AppComponent, NotFoundComponent];
>>>>>>> Stashed changes
