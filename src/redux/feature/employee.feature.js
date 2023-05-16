import { createSlice } from '@reduxjs/toolkit';
import EmployeeServices from '../../services/EmployeeServices';
const initialState = {
  employees: EmployeeServices.getAllEmployeeList(),
};
const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    checked: function (state, action) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else return employee;
      });
    },
  },
});
export default employeeSlice.reducer;
export const { checked } = employeeSlice.actions;
