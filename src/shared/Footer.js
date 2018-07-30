import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            Contact Info
                        </Col>
                        <Col xs="12" md="6">Navigation Info</Col>
                    </Row>
                </Container>
                <SubFooter></SubFooter>
            </div>
            
        );
    }
}

const SubFooter = () => {
    return (
        <div className="subFooter">
            <Container>
                <Row>
                    <Col xs="12">
                    <h6>Copyright {(new Date().getFullYear())}</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
