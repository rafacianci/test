import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Router';
import {
  LOGIN_USER_SUCCESS,
  NAVIGATE_EMPLOYEE_CREATE,
  NAVIGATE_EMPLOYEE_LIST,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types';

const firstAction = AppNavigator.router.getActionForPathAndParams('EmployeeCreate');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
  if (
    action.type === LOGIN_USER_SUCCESS ||
    action.type === NAVIGATE_EMPLOYEE_LIST ||
    action.type === EMPLOYEE_SAVE_SUCCESS
  ) {
    return AppNavigator.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' }),
        ],
      }),
      state,
    );
  }

  if (action.type === NAVIGATE_EMPLOYEE_CREATE) {
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'EmployeeCreate' }),
      state,
    );
  }

  return state;
};
