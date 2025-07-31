import { createAction, props } from '@ngrx/store';
import { IBlockModel } from '../models/block.models';

export const setBlockchainState = createAction(
    '[Blockchain] Set Blockchain State',
    props<{ chain: IBlockModel[]; height: number }>()
);
