import React, { Component } from 'react';
import ReactRouter, { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col, Navbar, Jumbotron, Button } from 'reactstrap';
import { Header, Footer, CTAButton, InformationalModal } from './shared/index';
import HomeView from './HomeView';
import AboutView from './AboutView';
import ContactView from './ContactView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Andy"};
  }
  render() {
    return (
      <div className="body">
        
        <Router>
        
          <div>
          <Header/>               
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Route path="/contact" component={ContactView} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
  parentLogger = () => {
    console.log("I live in App.js");
  }
}

export default App;
