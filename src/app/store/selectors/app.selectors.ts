import { createFeature } from '@ngrx/store';
import { appReducer } from '../reducers/app.reducer';

const appFeature = createFeature({
    name: 'app',
    reducer: appReducer
});

export const { name, reducer, selectAppState, selectIsLoading } = appFeature;
