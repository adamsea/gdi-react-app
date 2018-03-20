import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {

    render() {
        return <Row>
            <Col md={ 9 }>
                <h3>Recently Created</h3>
            </Col>
            <Col md={ 3 }>
                <h3>What would you like to do?</h3>
            </Col>
        </Row>;
    }

}