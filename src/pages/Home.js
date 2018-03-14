import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import RecentImages from '../components/RecentImages';
import ImageOptions from '../components/ImageOptions';

export default class Home extends Component {

    state = { selected_image: null }

    selectImage (image) {
        this.setState({ selected_image: image });
    }

    render () {
        let images = [
            { title: 'Image 1', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 2', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 3', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 4', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 5', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 6', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 7', src: 'http://via.placeholder.com/300x200' },
            { title: 'Image 8', src: 'http://via.placeholder.com/300x200' },
        ];
        return <Row>
            <Col md={ 9 }>
                <h3>Recently Created</h3>
                <RecentImages images={ images } onSelect={ this.selectImage.bind(this) } />
            </Col>
            <Col md={ 3 }>
                <h3>What would you like to do?</h3>
                <ImageOptions selected_image={ this.state.selected_image } />
            </Col>
        </Row>;
    }

}