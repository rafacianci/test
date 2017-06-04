import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../actions';
import { Input } from '../../components';

const styles = {
  container: {
    paddingBottom: 25,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'column',
    margin: 25,
    marginBottom: 0,
  },
  input: {
    backgroundColor: '#FFF',
  },
  pickerContainer: {
    margin: 25,
    flexDirection: 'column',
    marginBottom: 0,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#4A5667',
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const EmployeeForm = props => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Text>Nome</Text>
      <Input
        placeholder='Jane'
        value={props.name}
        style={styles.input}
        onChangeText={value => props.employeeUpdate({ prop: 'name', value })}
      />
    </View>

    <View style={styles.inputContainer}>
      <Text>Telefone</Text>
      <Input
        placeholder='99 9999-9999'
        value={props.phone}
        style={styles.input}
        onChangeText={value => props.employeeUpdate({ prop: 'phone', value })}
      />
    </View>

    <View style={styles.pickerContainer}>
      <Text>Turno</Text>
      <Picker
        style={[styles.input, styles.picker]}
        selectedValue={props.shift}
        onValueChange={value => props.employeeUpdate({ prop: 'shift', value })}
      >
        <Picker.Item label='Segunda' value='Segunda' />
        <Picker.Item label='Terça' value='Terça' />
        <Picker.Item label='Quarta' value='Quarta' />
        <Picker.Item label='Quinta' value='Quinta' />
        <Picker.Item label='Sexta' value='Sexta' />
        <Picker.Item label='Sábado' value='Sábado' />
        <Picker.Item label='Domingo' value='Domingo' />
      </Picker>
    </View>
  </View>
);

const mapStateToProps = ({ employeeForm }) => ({
  name: employeeForm.name,
  phone: employeeForm.phone,
  shift: employeeForm.shift,
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
