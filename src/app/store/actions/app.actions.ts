import { createAction, props } from '@ngrx/store';

export const setIsLoading = createAction('[App] Set Loading State', props<{ isLoading: boolean }>());
