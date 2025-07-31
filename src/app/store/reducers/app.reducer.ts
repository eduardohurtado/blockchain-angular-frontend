import { createReducer, on } from '@ngrx/store';
import { IAppState } from '../models/app.models';
import { setIsLoading } from '../actions/app.actions';

export const initialAppState: IAppState = {
    isLoading: false
};

export const appReducer = createReducer(
    initialAppState,
    on(setIsLoading, (state, { isLoading }) => ({
        ...state,
        isLoading
    }))
);
