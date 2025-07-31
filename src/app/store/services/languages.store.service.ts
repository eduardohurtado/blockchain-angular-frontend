import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentLanguage } from '../selectors/language.selectors';
import { APP_CODE_LANGUAGES } from 'src/app/enums/emuns';
import { setLanguage } from '../actions/language.actions';

@Injectable({ providedIn: 'root' })
export class LanguageStoreService {
    store = inject(Store);

    getCurrentLanguage() {
        return this.store.selectSignal(selectCurrentLanguage)();
    }

    setCurrentLanguage(lang: APP_CODE_LANGUAGES) {
        this.store.dispatch(setLanguage({ lang }));
    }
}
