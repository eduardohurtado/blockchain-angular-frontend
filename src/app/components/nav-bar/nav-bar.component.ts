import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsaSvgFlagComponent } from '../languages-svg-flags/usa-svg-flag/usa-svg-flag.component';
import { DeutschSvgFlagComponent } from '../languages-svg-flags/deutsch-svg-flag/deutsch-svg-flag.component';
import { ItalianoSvgFlagComponent } from '../languages-svg-flags/italiano-svg-flag/italiano-svg-flag.component';
import { ChineseSvgFlagComponent } from '../languages-svg-flags/chinese-svg-flag/chinese-svg-flag.component';
import { EspanolSvgFlagComponent } from '../languages-svg-flags/espanol-svg-flag/espanol-svg-flag.component';
import { APP_CODE_LANGUAGES, APP_LANGUAGES, LOCAL_STORAGE_KEYS } from 'src/app/enums/emuns';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastNotificationSignalService } from 'src/app/services/toast-notification.signal.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [
        CommonModule,
        TranslateModule,
        UsaSvgFlagComponent,
        DeutschSvgFlagComponent,
        ItalianoSvgFlagComponent,
        ChineseSvgFlagComponent,
        EspanolSvgFlagComponent
    ]
})
export class NavBarComponent implements OnInit {
    @ViewChild('language-dropdown-menu') dropdownRef!: ElementRef;

    appLanguages = APP_LANGUAGES;
    isLanguageDropdownOpen = false;
    selectedLanguage = APP_LANGUAGES.ENGLISH;
    selectedLanguageCode = APP_CODE_LANGUAGES.ENGLISH;

    constructor(
        private translate: TranslateService,
        private router: Router,
        private toastNotificationSignalService: ToastNotificationSignalService
    ) {}

    ngOnInit(): void {
        const storedLang = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || APP_CODE_LANGUAGES.ENGLISH;
        const key = Object.entries(APP_CODE_LANGUAGES).find(([_, v]) => v === storedLang)?.[0];
        this.selectedLanguage = APP_LANGUAGES[key as keyof typeof APP_LANGUAGES] || APP_LANGUAGES.ENGLISH;
    }

    toggleLanguageDropdown() {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    }

    selectLanguage(language: APP_LANGUAGES) {
        this.selectedLanguage = language;
        const languageKey: string =
            Object.keys(APP_LANGUAGES).find((key) => APP_LANGUAGES[key as keyof typeof APP_LANGUAGES] === language) ||
            'en';
        const languageCode = APP_CODE_LANGUAGES[languageKey as keyof typeof APP_CODE_LANGUAGES] || 'en';
        this.translate.use(languageCode);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, languageCode);
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
