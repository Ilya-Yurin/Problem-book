import { MAKE_LOGIN, CHECK_SESSION, MAKE_LOGOUT } from "./constants";
import { createActionCreator } from 'redux/modules/helpers';

/**
 * Action Creators
 *
 * */
export const makeLogin = createActionCreator<FormData>(MAKE_LOGIN);
export const makeLogout = createActionCreator(MAKE_LOGOUT);
