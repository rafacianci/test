import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === EMPLOYEE_UPDATE) {
    return {
      ...state,
      [action.payload.prop]: action.payload.value,
    };
  }

  if (action.type === EMPLOYEE_CREATE || action.type === EMPLOYEE_SAVE_SUCCESS) {
    return INITIAL_STATE;
  }

  return state;
};
