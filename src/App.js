import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a className="nav-link" href="/">
                  Andy's Page
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1 className="announcement-title">Ayo this is Andy</h1>
            <p>
              <Button
                className="btn-mint"
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                Smash That Contact
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
