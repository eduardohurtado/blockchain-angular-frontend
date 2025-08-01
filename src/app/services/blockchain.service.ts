import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBlockchain } from '../store/actions/blockchain.actions';

@Injectable({ providedIn: 'root' })
export class BlockchainService {
    store = inject(Store);

    loadBlockchain() {
        this.store.dispatch(loadBlockchain());
    }
}
