import { Routes } from '@angular/router';
import { HomeScreen } from './screens/home-screen/home-screen';
import { AboutScreen } from './screens/about-screen/about-screen';
import { ModeloScreen } from './screens/modelo-screen/modelo-screen';
import { ParcelaScreen } from './screens/parcela-screen/parcela-screen';

export const routes: Routes = [
    { path: '', component: HomeScreen },
    { path: 'about', component: AboutScreen },
    { path: 'modelo', component: ModeloScreen },
    { path: 'parcela', component: ParcelaScreen },
];