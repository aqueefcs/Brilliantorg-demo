import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container,Button } from 'react-bootstrap';
import logo from '../../assets/logo.png';

import './styles.css';

export default class Navbar extends Component {
  render(){
    return(
        <nav className ="navbar navbar-light bg-white navbar-expand-lg fixed-top">
          <Container>
            <Link to="/" className="navbar-brand p-2"><img src={logo} alt="brilliant org" height="35" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto p-2">
                <li className="navbar-item">
                  <Link to="/today" className="nav-link">Today</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link active">Course</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/practice" className="nav-link">Practice</Link>
                </li>
              </ul>

            </div>
            <div className="ml-auto">
              <ul className="navbar-nav p-2">
                <li className="navbar-item">
                  <Link className="btn btn-md btn-outline-primary login-btn">Log In</Link>
                  <span><Link className="btn btn-md btn-primary">Sign Up</Link></span>
                </li>
              </ul>

            </div>

            </Container>

        </nav>

      )

  }
}
