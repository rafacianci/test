import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../../actions';
import { NAVIGATE_EMPLOYEE_LIST } from '../../actions/types';
import { Button } from '../../components';
import Form from './Form';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Segunda' });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Form {...this.props} />
        <View style={{ flex: 0, height: 40, margin: 20, marginTop: 10 }}>
          <Button onPress={() => this.onButtonPress()} color='green'>
            Create
          </Button>
        </View>
      </View>
    );
  }
}

EmployeeCreate.navigationOptions = ({ navigation }) => ({
  title: 'Novo',
  headerLeft: (
    <TouchableOpacity
      onPress={() => navigation.dispatch({ type: NAVIGATE_EMPLOYEE_LIST })}
      style={{ padding: 15, marginRight: 20 }}
    >
      <Text style={{ color: '#2980b9', fontSize: 26 }}>
        { '<' }
      </Text>
    </TouchableOpacity>
  ),
});

const mapStateToProps = ({ employeeForm }) => ({
  name: employeeForm.name,
  phone: employeeForm.phone,
  shift: employeeForm.shift,
});

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
})(EmployeeCreate);
