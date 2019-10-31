import { RootStore } from 'redux/types/store';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import not from 'ramda/es/not';

export const tokenSelector = (state: RootStore): string | null => state.session.token;
export const loginErrorSelector = (state: RootStore): string => state.session.err;
export const sessionLoadingSelector = (state: RootStore): boolean => state.session.loading;
export const isAuthSelector = (state: RootStore): boolean => (
  not(isEmpty(state.session.token) || isNil(state.session.token))
);

