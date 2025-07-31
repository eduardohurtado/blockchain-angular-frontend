import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    constructor(private languageService: LanguageService) {
        this.languageService.setDefaultLanguage();
    }
}
