import React from 'react';
import ReactDOM from 'react-dom/client';

import EmployeProfile from './Employe';

import LoginProvider from './../context/LoginProvider';
import '@smastrom/react-rating/style.css'
const dashBoard = () => {
    
    
    return (
        <React.StrictMode>
        <LoginProvider>
          <EmployeProfile />
        </LoginProvider>
      </React.StrictMode>
    );
  };

  export default dashBoard;