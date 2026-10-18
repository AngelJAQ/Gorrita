import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './screens/home-screen/home-screen';
import { AboutScreen } from './screens/about-screen/about-screen';
import { ModeloScreen } from './screens/modelo-screen/modelo-screen';
import { ParcelaScreen } from './screens/parcela-screen/parcela-screen';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeScreen, pathMatch: 'full'},
    {path: 'about', component: AboutScreen, pathMatch: 'full'},
    {path: 'modelo', component: ModeloScreen, pathMatch: 'full'},
    {path: 'parcela', component: ParcelaScreen, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }