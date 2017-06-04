import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoginForm from './containers/LoginForm';
import Main from './containers/Main';
import EmployeeCreate from './containers/Employee/Create';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginForm },
  Main: { screen: Main },
  EmployeeCreate: { screen: EmployeeCreate },
});

const RouterComponent = ({ dispatch, navigation }) => (
  <View style={{ flex: 1 }}>
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
  </View>
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(RouterComponent);
