import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === EMAIL_CHANGED) {
    return {
      ...state,
      email: action.payload,
    };
  }

  if (action.type === PASSWORD_CHANGED) {
    return {
      ...state,
      password: action.payload,
    };
  }

  if (action.type === LOGIN_USER) {
    return {
      ...state,
      loading: true,
      error: '',
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      ...INITIAL_STATE,
      user: action.payload,
    };
  }

  if (action.type === LOGIN_USER_FAIL) {
    return {
      ...state,
      error: 'Authentication Failed.',
      password: '',
      loading: false,
    };
  }

  return state;
};
