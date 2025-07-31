import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { setIsLoading } from '../actions/app.actions';
import { selectIsLoading } from '../selectors/app.selectors';

@Injectable({ providedIn: 'root' })
export class AppStoreService {
    store = inject(Store);

    getIsLoading(): boolean {
        return this.store.selectSignal(selectIsLoading)();
    }

    setIsLoading(isLoading: boolean) {
        this.store.dispatch(setIsLoading({ isLoading }));
    }
}
