import { createReducer, on } from '@ngrx/store';
import { IBlockchainState } from '../models/blockchain.models';
import * as BlockchainActions from '../actions/blockchain.actions';

export const initialBlockchainState: IBlockchainState = {
    chain: [],
    height: -1 // Initial height set to -1 to indicate no blocks
};

export const blockchainReducer = createReducer(
    initialBlockchainState,
    on(BlockchainActions.setBlockchainState, (state, { chain, height }) => ({
        ...state,
        chain,
        height
    })),
    on(BlockchainActions.loadBlockchainSuccess, (state, { data }) => {
        const { chain, height } = data;
        return {
            ...state,
            chain,
            height
        };
    }),
    on(BlockchainActions.loadBlockchainFailure, (state, { error }) => {
        console.error('Error on loadBlockchainFailure API call:', error);
        return state;
    }),
    on(BlockchainActions.mineNewBlockSuccess, (state, { data }) => {
        const { chain, height } = data;
        return {
            ...state,
            chain,
            height
        };
    }),
    on(BlockchainActions.mineNewBlockFailure, (state, { error }) => {
        console.error('Error on mineNewBlockFailure API call:', error);
        return state;
    })
);
