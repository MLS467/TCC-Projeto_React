import React from 'react';
import NavBar from "./components/Nav/NavBar"
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './Context/Auth/AuthContext';

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

