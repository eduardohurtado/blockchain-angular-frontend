import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CODE_LANGUAGES } from './enums/emuns';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(APP_CODE_LANGUAGES.ENGLISH); // Set default language
    }
}
