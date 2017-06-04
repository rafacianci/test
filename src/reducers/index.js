import { combineReducers } from 'redux';
import Auth from './Auth';
import EmployeeForm from './EmployeeForm';
import Employee from './Employee';
import Navigation from './Navigation';

export default combineReducers({
  auth: Auth,
  employeeForm: EmployeeForm,
  employees: Employee,
  navigation: Navigation,
});
