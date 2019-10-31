import { createActionCreator } from 'redux/modules/helpers';
import { MAKE_LOGIN, MAKE_LOGOUT } from "./constants";

/**
 * Action Creators
 *
 * */
export const makeLogin = createActionCreator<FormData>(MAKE_LOGIN);
export const makeLogout = createActionCreator(MAKE_LOGOUT);
