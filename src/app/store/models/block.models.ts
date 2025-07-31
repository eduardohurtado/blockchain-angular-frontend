import { BLOCK_TYPE } from 'src/app/enums/emuns';

export interface IBlockModel extends IBlockBuildModel {
    hash: string;
    height: number;
    time: string;
    nonce: number;
    prevBlockHash: string;
}

export interface IBlockBuildModel {
    type: BLOCK_TYPE.genesys | BLOCK_TYPE.regular;
    body: string;
}
