import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, TouchableOpacity } from 'react-native';
import { employeesFetch, navigateToCreate } from '../../actions';
import { NAVIGATE_EMPLOYEE_CREATE } from '../../actions/types';
import styles from './styles';

class Main extends Component {

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees = [] }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <Text style={styles.employee}>
        { employee.name }
      </Text>
    );
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Text style={styles.loading}>
          Carregando...
        </Text>
      );
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

Main.navigationOptions = ({ navigation }) => ({
  title: 'Candidatos',
  headerRight: (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.dispatch({ type: NAVIGATE_EMPLOYEE_CREATE })}
    >
      <Text style={styles.addTextButton}>
        Novo
      </Text>
    </TouchableOpacity>
  ),
});

const mapStateToProps = ({ employees }) => ({
  employees: employees.data,
  isLoading: employees.isLoading,
});

export default connect(mapStateToProps, { employeesFetch, navigateToCreate })(Main);
