import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class CTAButton extends Component {

    render() {
        return (
            <Button onClick={this.props.consoleMe} className={this.props.className}>
                {this.props.buttontext}
                
            </Button>
        );
    }
    oldconsoleMe = () => {
        console.log("This function lives in CTAButton.js");
    }
}

