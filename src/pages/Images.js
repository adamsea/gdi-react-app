import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import RecentImages from '../components/RecentImages';
import MemeCreator from '../components/MemeCreator';

import { IMAGES_API } from '../constants';
import API from '../actions/api';

export default class Images extends Component {

    constructor (props) {
        super(props);
        this.state = {
            images: [],
            selected_image: null
        };
        this.selectImage = this.selectImage.bind(this);
        this.createMeme = this.createMeme.bind(this);
    }

    selectImage (image) {
        this.setState({ selected_image: image });
    }

    createMeme (textFields) {
        API.createMeme(textFields)
            .then((result) => {
                let data = result.data;
                let title = data.title;
                let src = data.src;
                alert(`Success! You can view ${ title } at ${ src }`);
            })
            .catch((err) => alert(`Error: ${ err.message }`));
    }

    componentDidMount () {
        axios.get(IMAGES_API)
            .then((result) =>
                this.setState({
                    images: result.data.images
                })
            );
    }

    render() {
        let images = this.state.images;
        let selected = this.state.selected_image;

        return <Row>
            <Col md={ 9 }>
                <h3>Recently Uploaded</h3>
                <RecentImages
                    images={ images }
                    onSelect={ this.selectImage }
                />
            </Col>
            <Col md={ 3 }>
                <h3>Create Meme</h3>
                <MemeCreator
                    selected_image={ selected }
                    onCreateMeme={ this.createMeme }
                />
            </Col>
        </Row>;
    }

}