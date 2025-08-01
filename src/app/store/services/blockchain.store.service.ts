import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectChain, selectHeight } from '../selectors/blockchain.selectors';
import { IBlockModel } from '../models/block.models';
import { setBlockchainState } from '../actions/blockchain.actions';

@Injectable({ providedIn: 'root' })
export class BlockchainStoreService {
    store = inject(Store);

    getChain(): Signal<IBlockModel[]> {
        return this.store.selectSignal(selectChain);
    }

    getHeight(): Signal<number> {
        return this.store.selectSignal(selectHeight);
    }

    getChainAndHeight(): Signal<{ chain: IBlockModel[]; height: number }> {
        return this.store.selectSignal((state) => ({
            chain: state.blockchain.chain,
            height: state.blockchain.height
        }));
    }

    setBlockchainState(chain: IBlockModel[], height: number) {
        this.store.dispatch(setBlockchainState({ chain, height }));
    }
}
