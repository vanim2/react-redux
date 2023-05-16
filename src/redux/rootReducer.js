import counterReducer from './feature/counter.feature';
import employeeReducer from './feature/employee.feature';
import userListReducer from './feature/userList.feature';
const rootReducer = {
  counter: counterReducer,
  employee: employeeReducer,
  user: userListReducer,
};
export default rootReducer;
