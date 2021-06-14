import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Home } from './components';

import './App.css';

function App() {
  return (
  	<Router>
    	<div>

        	<Navbar />
        	<br/>
        	<Route path="/" exact component={Home} />
      	</div>

    </Router>
    
  );
}

export default App;
