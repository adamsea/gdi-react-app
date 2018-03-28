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

import { IMAGES_API } from '../constants';
import API from '../actions/api';

export default class Upload extends Component {

    constructor (props) {
        super(props);
        this.state = {
            uploaded_image: null
        };
        this.uploadImage = this.uploadImage.bind(this);
        this.createMeme = this.createMeme.bind(this);
    }

    getBase64 (file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => cb(reader.result);
        reader.onerror = (err) => alert(`Error: ${ err.message }`);
    }

    uploadImage (evt) {
        let file = evt.target.files[0];
        return this.getBase64(file, (b64) => {
            axios.post(IMAGES_API, {
                    image: b64,
                    name: file.name,
                    type: file.type
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((result) => this.setState({
                    uploaded_image: result.data
                }))
                .catch((err) => alert(`Error: ${ err.message }`))
        });
    }

    createMeme (textFields) {
        API.createMeme(textFields)
            .then((result) => {
                let data = result.data;
                let title = data.title;
                let src = data.src;
                alert(`Success! You can view ${ title } at the following URL: ${ src }`);
            })
            .catch((err) => alert(`Error: ${ err.message }`));
    }

    render() {
        let uploaded = this.state.uploaded_image;

        return <Row>
            <Col md={ 12 }>
                <h1>Upload a Photo</h1>
            </Col>
            <Col md={ 3 }>
                <FormGroup>
                    <FormControl
                        type="file"
                        name="image"
                        onChange={ this.uploadImage }
                    />
                    <HelpBlock>Click to upload a new image</HelpBlock>
                </FormGroup>
            </Col>
            {
                uploaded ?
                    <Col md={ 9 }>
                        <Row>
                            <Col className="uploaded-image" md={ 7 }>
                                <Image src={ uploaded.src } responsive />
                            </Col>
                            <Col className="meme-creator" md={ 4 }>
                                <MemeCreator
                                    selected_image={ uploaded }
                                    onCreateMeme={ this.createMeme }
                                />
                            </Col>
                        </Row>
                    </Col> : null
            }
        </Row>;
    }

}