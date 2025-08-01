import { createAction, props } from '@ngrx/store';
import { IBlockModel } from '../models/block.models';
import { IBlockchainState } from '../models/blockchain.models';

export const setBlockchainState = createAction(
    '[Blockchain] Set Blockchain State',
    props<{ chain: IBlockModel[]; height: number }>()
);

export const loadBlockchain = createAction('[Blockchain] Load');

export const loadBlockchainSuccess = createAction('[Blockchain] Load Success', props<{ data: IBlockchainState }>());

export const loadBlockchainFailure = createAction('[Blockchain] Load Failure', props<{ error: any }>());

export const mineNewBlock = createAction(
    '[Blockchain] Mine New Block',
    props<{ blockchain: IBlockchainState; body: string }>()
);

export const mineNewBlockSuccess = createAction(
    '[Blockchain] Mine New Block Success',
    props<{ data: IBlockchainState }>()
);

export const mineNewBlockFailure = createAction('[Blockchain] Mine New Block Failure', props<{ error: any }>());
