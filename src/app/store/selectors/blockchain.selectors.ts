import { createFeature } from '@ngrx/store';
import { blockchainReducer } from '../reducers/blockchain.reducer';

const blockchainFeature = createFeature({
    name: 'blockchain',
    reducer: blockchainReducer
});

export const { name, reducer, selectBlockchainState, selectChain, selectHeight } = blockchainFeature;
