import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {

    render() {
        return <Row>
            <Col md={ 12 }>
                <h1>Time to Add Components!</h1>
            </Col>
        </Row>
    }

}