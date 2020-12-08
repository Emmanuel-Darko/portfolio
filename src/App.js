import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Pdf from './components/Pdf';

function App() {
  return (
    <>
      <CssBaseline />
      
      <Navbar />
      <Route exact path="/" component={ Home } />
      <Route path="/resume" component={ Resume } />
      <Route path="/portfolio" component={ Portfolio }  />
      <Route path="/contact" component={ Contact } />
      <Route path="/pdf/:id" component={Pdf} />

    </>
  );
}

export default App;
