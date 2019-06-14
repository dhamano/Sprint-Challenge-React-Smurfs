import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Smurf List</Link>
      <Link to="/smurf-form">Add Smurf</Link>
    </nav>
  )
}

export default Navigation;