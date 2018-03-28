import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import RecentImages from '../components/RecentImages';
import ImageOptions from '../components/ImageOptions';

import { MEMES_API } from '../constants';

export default class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            images: [],
            selected_image: null
        }
        this.selectImage = this.selectImage.bind(this);
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
        let selected = this.state.selected_image;

        return <Row>
            <Col md={ 9 }>
                <h3>Recently Created</h3>
                <RecentImages
                    images={ images }
                    onSelect={ this.selectImage }
                />
            </Col>
            <Col md={ 3 }>
                <h3>What would you like to do?</h3>
                <ImageOptions selected_image={ selected } />
            </Col>
        </Row>;
    }

}