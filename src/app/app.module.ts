import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appRoutes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { languageReducer } from './store/reducers/language.reducer';
import { appReducer } from './store/reducers/app.reducer';
import { environment } from 'src/environment/environment';

// Factory function to create the translation loader
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, 'assets/i18n/', '.json');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        NavBarComponent,
        FooterBarComponent,
        PageContainerComponent,
        ToastNotificationComponent,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot({
            app: appReducer,
            language: languageReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // How many state changes to keep in history
            logOnly: environment.production // Restrict extension to log-only mode in prod
        })
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    bootstrap: [AppComponent]
})
export class AppModule {}
