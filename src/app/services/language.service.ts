import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CODE_LANGUAGES, APP_LANGUAGES, LOCAL_STORAGE_KEYS } from '../enums/emuns';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    constructor(private translate: TranslateService) {}

    setDefaultLanguage() {
        const storedLangCodeOrDefault = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || APP_CODE_LANGUAGES.ENGLISH;
        this.translate.setDefaultLang(storedLangCodeOrDefault);
        this.translate.use(storedLangCodeOrDefault);
    }

    setLanguageByCode(languageCode: APP_CODE_LANGUAGES) {
        this.translate.use(languageCode);
        localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, languageCode);
    }

    getStoredLanguageCodeAndName(): { languageCode: APP_CODE_LANGUAGES; languageName: APP_LANGUAGES } {
        const storedLangCodeOrDefault =
            (localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) as APP_CODE_LANGUAGES) || APP_CODE_LANGUAGES.ENGLISH;
        const languageKey =
            Object.keys(APP_CODE_LANGUAGES).find(
                (key) => APP_CODE_LANGUAGES[key as keyof typeof APP_CODE_LANGUAGES] === storedLangCodeOrDefault
            ) || 'ENGLISH';
        const languageName = APP_LANGUAGES[languageKey as keyof typeof APP_LANGUAGES] || APP_LANGUAGES.ENGLISH;
        return { languageCode: storedLangCodeOrDefault, languageName };
    }
}
