import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsaSvgFlagComponent } from '../languages-svg-flags/usa-svg-flag/usa-svg-flag.component';
import { DeutschSvgFlagComponent } from '../languages-svg-flags/deutsch-svg-flag/deutsch-svg-flag.component';
import { ItalianoSvgFlagComponent } from '../languages-svg-flags/italiano-svg-flag/italiano-svg-flag.component';
import { ChineseSvgFlagComponent } from '../languages-svg-flags/chinese-svg-flag/chinese-svg-flag.component';
import { EspanolSvgFlagComponent } from '../languages-svg-flags/espanol-svg-flag/espanol-svg-flag.component';
import { APP_CODE_LANGUAGES, APP_LANGUAGES } from 'src/app/enums/emuns';
import { TranslateModule } from '@ngx-translate/core';
import { ToastNotificationSignalService } from 'src/app/services/toast-notification.signal.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [
        CommonModule,
        TranslateModule,
        UsaSvgFlagComponent,
        RouterModule,
        DeutschSvgFlagComponent,
        ItalianoSvgFlagComponent,
        ChineseSvgFlagComponent,
        EspanolSvgFlagComponent
    ]
})
export class NavBarComponent implements OnInit {
    router = inject(Router);
    toastNotificationSignalService = inject(ToastNotificationSignalService);
    languageService = inject(LanguageService);

    @ViewChild('language-dropdown-menu') dropdownRef!: ElementRef;

    appLanguages = APP_LANGUAGES;
    isLanguageDropdownOpen = false;
    selectedLanguage = APP_LANGUAGES.ENGLISH;

    ngOnInit(): void {
        this.selectedLanguage = this.languageService.getStoredLanguageCodeAndName().languageName;
    }

    toggleLanguageDropdown() {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    }

    selectLanguage(language: APP_LANGUAGES) {
        this.selectedLanguage = language;
        const languageKey: string =
            Object.keys(APP_LANGUAGES).find((key) => APP_LANGUAGES[key as keyof typeof APP_LANGUAGES] === language) ||
            APP_CODE_LANGUAGES.ENGLISH;
        const languageCode =
            APP_CODE_LANGUAGES[languageKey as keyof typeof APP_CODE_LANGUAGES] || APP_CODE_LANGUAGES.ENGLISH;
        this.languageService.setLanguageByCode(languageCode);
    }

    closeLanguageDropdown() {
        this.isLanguageDropdownOpen = false;
    }

    triggerToastNotificationSignalService() {
        this.toastNotificationSignalService.triggerToastNotification();
    }

    isActive(path: string): boolean {
        return this.router.url === path;
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
        const clickedInside = this.dropdownRef?.nativeElement.contains(event.target);
        const buttonClicked = (event.target as HTMLElement).closest('button');

        if (!clickedInside && !buttonClicked) {
            this.closeLanguageDropdown();
        }
    }
}
