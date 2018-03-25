import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import RecentImages from '../components/RecentImages';
import ImageOptions from '../components/ImageOptions';

const MEMES_API = 'https://kpm2qrhrf8.execute-api.us-east-1.amazonaws.com/dev/memes';

export default class Home extends Component {

    state = {
        images: [],
        selected_image: null
    }

    selectImage (image) {
        this.setState({ selected_image: image });
    }

    componentDidMount () {
        axios.get(MEMES_API)
            .then((result) =>
                this.setState({
                    images: result.data.images
                })
            );
    }

    render () {
        let images = this.state.images;
        return <Row>
            <Col md={ 9 }>
                <h3>Recently Created</h3>
                <RecentImages
                    images={ images }
                    onSelect={ this.selectImage.bind(this) }
                />
            </Col>
            <Col md={ 3 }>
                <h3>What would you like to do?</h3>
                <ImageOptions selected_image={ this.state.selected_image } />
            </Col>
        </Row>;
    }

}