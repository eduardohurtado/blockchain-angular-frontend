import { createReducer, on } from '@ngrx/store';
import { IAppState } from '../models/app.models';

export const initialAppState: IAppState = {};

export const appReducer = createReducer(initialAppState);
