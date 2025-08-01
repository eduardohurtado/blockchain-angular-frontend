import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as BlockchainActions from '../actions/blockchain.actions';
import * as AppActions from '../actions/app.actions';
import { IBlockchainState } from '../models/blockchain.models';

@Injectable()
export class BlockchainEffects {
    actions$ = inject(Actions);
    http = inject(HttpClient);

    loadBlockchain$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BlockchainActions.loadBlockchain),
            mergeMap(() =>
                this.http.get<IBlockchainState>('http://localhost:8080/api/blockchain/init').pipe(
                    map((data) => BlockchainActions.loadBlockchainSuccess({ data })),
                    catchError((error) => of(BlockchainActions.loadBlockchainFailure({ error })))
                )
            )
        )
    );

    mineNewBlock$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BlockchainActions.mineNewBlock),
            mergeMap((action) =>
                this.http
                    .post<IBlockchainState>('http://localhost:8080/api/blockchain/mine', {
                        blockchain: action.blockchain,
                        body: action.body
                    })
                    .pipe(
                        map((data) => BlockchainActions.mineNewBlockSuccess({ data })),
                        catchError((error) => of(BlockchainActions.mineNewBlockFailure({ error })))
                    )
            )
        )
    );

    // Dispatch isLoading: true when request starts
    setLoadingOnLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BlockchainActions.loadBlockchain, BlockchainActions.mineNewBlock),
            map(() => AppActions.setIsLoading({ isLoading: true }))
        )
    );

    // Dispatch isLoading: false when request ends (success or failure)
    unsetLoadingOnResponse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                BlockchainActions.loadBlockchainSuccess,
                BlockchainActions.loadBlockchainFailure,
                BlockchainActions.mineNewBlockSuccess,
                BlockchainActions.mineNewBlockFailure
            ),
            map(() => AppActions.setIsLoading({ isLoading: false }))
        )
    );
}
