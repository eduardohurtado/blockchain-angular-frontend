import { createAction, props } from '@ngrx/store';
import { APP_CODE_LANGUAGES } from '../../enums/emuns';

export const setLanguage = createAction('[Language] Set Language', props<{ lang: APP_CODE_LANGUAGES }>());
