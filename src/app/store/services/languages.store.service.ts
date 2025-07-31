import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentLanguage } from '../selectors/language.selectors';

@Injectable({ providedIn: 'root' })
export class LanguageStoreService {
    store = inject(Store);

    getCurrentLanguage() {
        return this.store.selectSignal(selectCurrentLanguage)();
    }
}
