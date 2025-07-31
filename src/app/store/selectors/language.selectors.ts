import { createFeature } from '@ngrx/store';
import { languageReducer } from '../reducers/language.reducer';

const languageFeature = createFeature({
    name: 'language',
    reducer: languageReducer
});

export const { name, reducer, selectLanguageState, selectCurrentLanguage } = languageFeature;
