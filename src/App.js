import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Routing from './Routing';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Background from './components/Background';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div className = "parent"><div className = "block"><CircularProgress disableShrink /></div></div>

  if(!isAuthenticated){
    return <>
    <div className="bcg">
    <AppNavbar></AppNavbar>
    </div>
    </>
  }

  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default App;