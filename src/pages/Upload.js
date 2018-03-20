import React, { Component } from 'react';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    HelpBlock
} from 'react-bootstrap';

import MemeCreator from '../components/MemeCreator';

export default class Upload extends Component {

    render() {
        return <Row>
            <Col md={ 12 }>
                <h1>Upload a Photo</h1>
            </Col>
            <Col md={ 12 }>
                <FormGroup>
                    <FormControl
                        type="file"
                        name="image"
                        onChange={() => false}
                    />
                    <HelpBlock>Click to upload a new image</HelpBlock>
                </FormGroup>
            </Col>
        </Row>;
    }

}