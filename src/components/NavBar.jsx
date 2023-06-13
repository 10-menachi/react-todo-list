import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link className="link" to="/add-todo">Add Todo</Link>
    <Link className="link" to="/list-todo">List Todo</Link>
  </nav>
);

export default NavBar;
