import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const appRoutes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomePageComponent },
    { path: 'services', pathMatch: 'full', component: ServicesPageComponent },
    { path: 'about', pathMatch: 'full', component: AboutPageComponent },
    { path: 'contact', pathMatch: 'full', component: ContactPageComponent },
    { path: '**', redirectTo: '/home' } // Redirect to home for any unknown routes
];
