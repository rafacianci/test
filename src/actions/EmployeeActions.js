import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH,
  EMPLOYEES_FETCH_SUCCESS,
  NAVIGATE_EMPLOYEE_CREATE,
} from './types';

export const navigateToCreate = () => ({
  type: NAVIGATE_EMPLOYEE_CREATE,
});

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift }) => dispatch => (
  firebase.database().ref('/employees')
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
    })
);

export const employeesFetch = () => (dispatch) => {
  dispatch({ type: EMPLOYEES_FETCH });

  firebase.database().ref('/employees')
    .on('value', (snapshot) => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
};

export const employeeDelete = ({ uid }) => () => (
  firebase.database().ref(`/employees/${uid}`)
    .remove()
    .then(() => null)
);
