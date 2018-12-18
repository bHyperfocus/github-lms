import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication';

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/modules">Home</Link>
      {
        isAuthenticated() &&
          <Link to="/logout">Logout</Link>
      }
    </nav>
  );
};

export default withRouter(Navbar);