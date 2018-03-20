import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Images extends Component {

    render() {
        return <Row>
            <Col md={ 9 }>
                <h3>Recently Uploaded</h3>
            </Col>
            <Col md={ 3 }>
                <h3>Create Meme</h3>
            </Col>
        </Row>;
    }

}