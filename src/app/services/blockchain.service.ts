import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBlockchain, mineNewBlock } from '../store/actions/blockchain.actions';
import { IBlockchainState } from '../store/models/blockchain.models';

@Injectable({ providedIn: 'root' })
export class BlockchainService {
    store = inject(Store);

    loadBlockchain() {
        this.store.dispatch(loadBlockchain());
    }

    mineNewBlock(blockchain: IBlockchainState, body: string) {
        this.store.dispatch(mineNewBlock({ blockchain, body }));
    }
}
