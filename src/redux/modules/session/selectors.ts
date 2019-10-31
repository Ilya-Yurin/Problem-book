import { RootStore } from 'redux/types/store';

export const tokenSelector = (state: RootStore): string | null => state.session.token;
export const loginErrorSelector = (state: RootStore): string => state.session.err;
export const sessionLoadingSelector = (state: RootStore): boolean => state.session.loading;
