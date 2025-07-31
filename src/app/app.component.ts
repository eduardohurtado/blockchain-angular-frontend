import { Component, effect, OnDestroy } from '@angular/core';
import { LanguageService } from './services/language.service';
import { AppStoreService } from './store/services/app.store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnDestroy {
    isLoading = false;
    destroyEffects: (() => void)[] = [];

    constructor(private languageService: LanguageService, private appStoreService: AppStoreService) {
        this.languageService.setDefaultLanguage();
        this.setupEffects();
    }

    setupEffects() {
        const loadingEffect = effect(() => {
            this.isLoading = this.appStoreService.getIsLoading();
        });

        this.destroyEffects.push(() => loadingEffect.destroy());
    }

    ngOnDestroy(): void {
        this.destroyEffects.forEach((destroy) => destroy());
    }
}
