import React, { Component } from 'react';
import ReactRouter, { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col, Navbar, Jumbotron, Button } from 'reactstrap';
import { Nav, Header, Footer, CTAButton, InformationalModal } from './shared/index';
import HomeView from './HomeView';
import AboutView from './AboutView';
import ContactView from './ContactView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Andy", theme: "light"};
  }
  render() {
    return (
      <div className="body light-theme">
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Route path="/contact" component={ContactView} />
          </div>
        </Router>
      {/* <Container>
        <Row>
          <Col xs="12">Hello!!! 
            <Router>
              <div>
              <Nav />
              <Route exact path="/" component={HomeView} />
              <Route path="/about" component={AboutView} />
              <Route path="/contact" component={ContactView} />
              </div>
            </Router>
          </Col>
        </Row>
      </Container> */}
      <Footer/>
      </div>
    );
  }
  parentLogger = () => {
    console.log("I live in App.js");
  }

  toggleTheme = () => {
    
  }
}

export default App;
