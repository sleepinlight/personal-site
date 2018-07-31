import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import Nav from './Nav';

export default class Header extends Component {
    render() {
        return (
            <div class="header">
                <Container>
                    <Row>
                        <Col xs="12">
                           <Nav/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}