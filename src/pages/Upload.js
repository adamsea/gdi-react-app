import React, { Component } from 'react';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    HelpBlock,
    Image
} from 'react-bootstrap';
import axios from 'axios';

import MemeCreator from '../components/MemeCreator';

import './Upload.css';

const IMAGES_API = 'https://kpm2qrhrf8.execute-api.us-east-1.amazonaws.com/dev/images';
const MEMES_API = 'https://kpm2qrhrf8.execute-api.us-east-1.amazonaws.com/dev/memes';

export default class Upload extends Component {

    render() {
        return <Row>
            <Col md={ 12 }>
                <h1>Upload a Photo</h1>
            </Col>
        </Row>
    }

}