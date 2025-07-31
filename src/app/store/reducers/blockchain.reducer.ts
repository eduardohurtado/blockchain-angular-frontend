import { createReducer, on } from '@ngrx/store';
import { IBlockchainState } from '../models/blockchain.models';
import { setBlockchainState } from '../actions/blockchain.actions';

export const initialBlockchainState: IBlockchainState = {
    chain: [],
    height: -1 // Initial height set to -1 to indicate no blocks
};

export const blockchainReducer = createReducer(
    initialBlockchainState,
    on(setBlockchainState, (state, { chain, height }) => ({
        ...state,
        chain,
        height
    }))
);
