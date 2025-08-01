import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { IBlockModel } from 'src/app/store/models/block.models';
import { BlockchainStoreService } from 'src/app/store/services/blockchain.store.service';

@Component({
    selector: 'app-services-page',
    imports: [TranslateModule, CommonModule, FormsModule],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.css'
})
export class ServicesPageComponent implements OnDestroy {
    blockchainService = inject(BlockchainService);
    blockchainStoreService = inject(BlockchainStoreService);

    isWorkingMode = false;
    destroyEffects: (() => void)[] = [];
    blockchainChain: IBlockModel[] = [];
    validatedBlockHashs: Set<string> = new Set();
    blockchainHeight: number = -1;
    inputValue: string = '';

    constructor() {
        this.setupEffects();
    }

    setupEffects() {
        const getChainAndHeightEffect = effect(() => {
            const response = this.blockchainStoreService.getChainAndHeight()();

            if (response.chain.length > 0) {
                this.blockchainChain = response.chain;
                this.blockchainHeight = response.height;
                this.isWorkingMode = true;
            } else {
                this.isWorkingMode = false;
            }
        });

        this.destroyEffects.push(() => getChainAndHeightEffect.destroy());
    }

    createBlockchain() {
        this.blockchainService.loadBlockchain();
    }

    mineNewBlock(form: NgForm) {
        if (form.invalid) {
            alert('You must enter a value to mine a new block');
            return;
        }

        const newBlockData: string = this.inputValue;

        this.blockchainService.mineNewBlock(
            { chain: this.blockchainChain, height: this.blockchainHeight },
            newBlockData
        );
    }

    checkIfBlockIsVerified(blockHash: string) {
        return this.validatedBlockHashs.has(blockHash);
    }

    validateBlock(block: IBlockModel) {
        console.log('Block to verify:', block);
    }

    ngOnDestroy(): void {
        this.destroyEffects.forEach((destroy) => destroy());
    }
}
