import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomePageComponent },
    { path: '**', redirectTo: '/home' } // Redirect to home for any unknown routes
];
