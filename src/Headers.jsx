import React from 'react';
import {Link} from 'react-router-dom'

import './Headers.css'
// import { useNavigate } from 'react-router-dom';

const headers = () => {
//   const navigate = useNavigate();
  return (
    <nav className='nav-bg-color'>
      <div className="nav-bar-large-container">
          <h1 className='heading4'>Modelyn Torff</h1>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default headers;
