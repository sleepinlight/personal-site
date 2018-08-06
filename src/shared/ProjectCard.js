import React, {Component} from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class ProjectCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.ProjectTitle}</CardTitle>
                        <CardSubtitle>{this.props.ProjectSubtitle}</CardSubtitle>
                        <CardText>{this.props.ProjectText}</CardText>
                        <Button>Learn More</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}