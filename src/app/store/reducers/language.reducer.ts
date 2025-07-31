import { createReducer, on } from '@ngrx/store';
import { setLanguage } from '../actions/language.actions';
import { ILanguageState } from '../models/language.models';
import { APP_CODE_LANGUAGES } from '../../enums/emuns';

export const initialLanguageState: ILanguageState = {
    currentLanguage: APP_CODE_LANGUAGES.ENGLISH // Default language
};

export const languageReducer = createReducer(
    initialLanguageState,
    on(setLanguage, (state, { lang }) => ({
        ...state,
        currentLanguage: lang
    }))
);
