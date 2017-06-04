import firebase from 'firebase';
import { AlertIOS, Platform, ToastAndroid } from 'react-native';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });

  if (Platform.OS === 'android') {
    ToastAndroid.show('Login ou senha inválido', ToastAndroid.SHORT);
  }

  if (Platform.OS === 'ios') {
    AlertIOS.alert('Login ou senha inválida', 'Por favor confira suas credenciais');
  }
};

const loginUserSuccess = (dispatch, user) => dispatch({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
