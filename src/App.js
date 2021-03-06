import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCs6x0C5g7B9qvyuaPzo99KGhyYtHrErJI',
      authDomain: 'projeto-para-testes-b01e1.firebaseapp.com',
      databaseURL: 'https://projeto-para-testes-b01e1.firebaseio.com',
      projectId: 'projeto-para-testes-b01e1',
      storageBucket: 'projeto-para-testes-b01e1.appspot.com',
      messagingSenderId: '821026999552',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
