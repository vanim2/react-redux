import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/feature/userList.feature';

//get data from redux store
const UserList = () => {
  const userData = useSelector((store) => {
    return store.user;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // const [state, setstate] = useState({
  //   loading: false,
  //   users: [],
  //   errorMessage: '',
  // });

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setstate({ ...state, loading: true });
  //       const response = await axios.get(
  //         'https://jsonplaceholder.typicode.com/users'
  //       );
  //       setstate({
  //         ...state,
  //         loading: false,
  //         users: response.data,
  //       });
  //     } catch (error) {
  //       setstate({
  //         ...state,
  //         loading: false,
  //         errorMessage: error,
  //       });
  //     }
  //   }
  //   fetchData();
  // }, []);
  const { loading, users, errorMessage } = userData;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-primary">UserList</h2>
            <p>
              lfjlfgjsg fglskfgjlsfg dfjgldjgldfjgfd gfjldfgjldgjlf
              ggjoergjoegjodkfglf fjglfkgjergerofjok
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {loading && <h2 className="fw-bold">...Loading</h2>}
            {!loading && errorMessage > 0 && (
              <h2 className="text-danger">Error: {errorMessage}</h2>
            )}
            {!loading && users.length > 0 && (
              <table className="table table-hover table-striped">
                <thead className="bg-primary">
                  <tr>
                    <th scope="col">SNO</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">WEBSITE</th>
                    <th scope="col">COMPANY</th>
                    <th scope="col">LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, id) => (
                    <tr key={id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
