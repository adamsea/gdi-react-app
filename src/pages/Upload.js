import React, { Component } from 'react';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    HelpBlock
} from 'react-bootstrap';
import axios from 'axios';

import MemeCreator from '../components/MemeCreator';

const IMAGES_API = 'https://cmlucc2j0i.execute-api.us-east-1.amazonaws.com/dev/images';

export default class Upload extends Component {

    render() {
        return <Row>
            <Col md={ 12 }>
                <h1>Upload a Photo</h1>
            </Col>
        </Row>
    }

}