import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { UsaSvgFlagComponent } from '../languages-svg-flags/usa-svg-flag/usa-svg-flag.component';
import { DeutschSvgFlagComponent } from '../languages-svg-flags/deutsch-svg-flag/deutsch-svg-flag.component';
import { ItalianoSvgFlagComponent } from '../languages-svg-flags/italiano-svg-flag/italiano-svg-flag.component';
import { ChineseSvgFlagComponent } from '../languages-svg-flags/chinese-svg-flag/chinese-svg-flag.component';
import { EspanolSvgFlagComponent } from '../languages-svg-flags/espanol-svg-flag/espanol-svg-flag.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [
        CommonModule,
        UsaSvgFlagComponent,
        DeutschSvgFlagComponent,
        ItalianoSvgFlagComponent,
        ChineseSvgFlagComponent,
        EspanolSvgFlagComponent
    ]
})
export class NavBarComponent {
    @ViewChild('language-dropdown-menu') dropdownRef!: ElementRef;

    appLanguages = {
        english: 'English (US)',
        spanish: 'Español',
        deutsch: 'Deutsch',
        italiano: 'Italiano',
        chinese: '中文 (繁體)'
    };
    isLanguageDropdownOpen = false;
    selectedLanguage = 'English (US)';

    constructor() {}

    toggleLanguageDropdown() {
        this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    }

    selectLanguage(language: string) {
        this.selectedLanguage = language;
    }

    closeLanguageDropdown() {
        this.isLanguageDropdownOpen = false;
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
