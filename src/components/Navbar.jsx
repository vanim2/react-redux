import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Redux Tool Kit
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav text-white ">
              <li className="nav-item">
                <Link to="/employees" className="nav-link">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  UsersList
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
