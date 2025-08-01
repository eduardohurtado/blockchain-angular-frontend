import { BLOCK_TYPE } from 'src/app/enums/emuns';

export interface IBlockModel {
    hash: string;
    height: number;
    type: BLOCK_TYPE.genesys | BLOCK_TYPE.regular;
    time: string;
    nonce: number;
    body: string;
    prevBlockHash: string;
}
