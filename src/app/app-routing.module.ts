import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoOneComponent } from './who-one/who-one.component';
import { WhoTwoComponent } from './who-two/who-two.component';

const routes: Routes = [
  { path : 'home' , component: HomeComponent},
  { path : 'whoOne' , component: WhoOneComponent},
  { path : 'whoTwo' , component: WhoTwoComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
