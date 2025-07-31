import { IBlockModel } from './block.models';

export interface IBlockchainState {
    chain: IBlockModel[];
    height: number;
}
