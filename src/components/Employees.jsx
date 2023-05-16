import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checked } from '../redux/feature/employee.feature';
const Employees = () => {
  // const [employees, setemployees] = useState(() => {
  //   return EmployeeServices.getAllEmployeeList();
  // });
  // const checked = (id) => {
  //   const selectedEmployee = employees.map((employee) => {
  //     if (employee.id === id) {
  //       return {
  //         ...employee,
  //         isSelected: !employee.isSelected,
  //       };
  //     } else return employee;
  //   });
  //   setemployees(selectedEmployee);
  // };

  //fetch data from store
  const employees = useSelector((state) => {
    return state.employee.employees;
  });
  // console.log(employees);

  //get data from redux store
  const dispatch = useDispatch();
  const userChecked = (empId) => {
    dispatch(checked(empId));
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(employees)}</pre> */}
      <h1>Employees</h1>
      <p>
        kjfrgwkj wrjwlrlwrlkrw wfjlwlwrjw kfnsalkdflksjf kjflsjflskdfjlksdj
        sjflskjflksdflasdkf skdfjlskjflksfjl sdkflskdfjlsdkflskdflksdfjl sldkf
        sldkflsdkjflsdf sdlfjlsjfldfjl lsfjlsdfjlskfjl{' '}
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {employees.length > 0 &&
                employees.map((employee, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <input
                        checked={employee.isSelected}
                        onChange={() => {
                          userChecked(employee.id);
                        }}
                        type="checkbox"
                        className="form-check-input me-3"
                      />
                      {employee.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-md-4">
            {employees.length > 0 &&
              employees.map((employee) => {
                return (
                  <div key={employee.id}>
                    {employee.isSelected && (
                      <div className="card my-3">
                        <div className="card-body">
                          <ul className="list-group-item">
                            <li className="list-group-item">{employee.name}</li>
                            <li className="list-group-item">
                              {employee.username}
                            </li>
                            <li className="list-group-item">
                              {employee.email}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employees;
