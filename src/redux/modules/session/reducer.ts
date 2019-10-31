import { SessionStore } from "./types";
import { START, SUCCESS, ERROR } from 'redux/modules/constants';
import { MAKE_LOGIN, MAKE_LOGOUT, CHECK_SESSION } from 'redux/modules/session/constants';
import persistor from 'redux/modules/session/persistor';

const initialState: SessionStore = {
  token: null,
  loading: false,
  err: '',
};

const reducer = (state: SessionStore = initialState, action: any): SessionStore => {
  const { type } = action;

  switch (type) {
    case `${MAKE_LOGIN}${START}`:
    case `${CHECK_SESSION}${START}`:
    case `${MAKE_LOGOUT}${START}`:
      return { ...state, loading: true, err: '' };

    case `${MAKE_LOGIN}${SUCCESS}`:
      return {
        ...state,
        loading: false,
        token: action.payload
      };

    case `${MAKE_LOGOUT}${SUCCESS}`:
      return {
        ...state,
        loading: false,
        token: null
      };

    case `${MAKE_LOGIN}${ERROR}`:
    case `${CHECK_SESSION}${ERROR}`:
    case `${MAKE_LOGOUT}${ERROR}`:
      return { ...state, loading: false, err: action.payload, token: null };

    default:
      return state;
  }
};

export default persistor(reducer);
