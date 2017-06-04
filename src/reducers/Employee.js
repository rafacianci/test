import {
  EMPLOYEES_FETCH,
  EMPLOYEES_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === EMPLOYEES_FETCH_SUCCESS) {
    return {
      data: Object.keys(action.payload).map(uid => ({
        ...action.payload[uid],
        uid,
      })),
      isLoading: false,
    };
  }

  if (action.type === EMPLOYEES_FETCH) {
    return {
      isLoading: true,
    };
  }

  return state;
};
