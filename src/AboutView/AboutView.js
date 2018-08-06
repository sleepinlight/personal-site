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
                       <Col xs="12">
                        {this.state.first.map(function(item, i) {
                            return <ProjectCard key={i} ProjectTitle={item[0]} />
                        })}
                       </Col>
                   </Row>
               </Container>
            </div>
        );
    }
}