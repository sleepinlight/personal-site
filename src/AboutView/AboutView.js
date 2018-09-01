import React, {Component} from 'react';
import { Container, Row, Col, Navbar, Jumbotron, Button } from 'reactstrap';
import {ProjectCard} from '../shared/index';

export default class AboutView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: ["Super Mae", "What a cute project", "She is the most adorable baby ever"],
            second: ["Web stuff", "standard design project", "what a bore"]
        };
    }
    render() {
        return (
            <div>
               <Container>
                   <Row>
                      
                        {this.state.first.map(function(item, i) {
                            return <Col xs="12" md="4"><ProjectCard key={i} ProjectTitle={item} /></Col>;
                        })}
                       
                   </Row>
               </Container>
            </div>
        );
    }
}