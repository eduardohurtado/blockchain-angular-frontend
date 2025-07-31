import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CODE_LANGUAGES, LOCAL_STORAGE_KEYS } from './enums/emuns';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        const storedLang = localStorage.getItem('lang') || APP_CODE_LANGUAGES.ENGLISH;
        this.translate.setDefaultLang(APP_CODE_LANGUAGES.ENGLISH);
        this.translate.use(storedLang);
        window.localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, storedLang);
    }
}
