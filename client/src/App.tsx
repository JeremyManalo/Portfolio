import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './componants';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
