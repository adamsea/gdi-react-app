import React, { Component } from 'react';

import {
    Col,
    Row,
    Thumbnail
} from 'react-bootstrap';

import './RecentImages.css';

export default class RecentImages extends Component {

    render () {
        return <Row className="recent-images">
            {
                this.props.images.map((image, index) => {
                    return <Col key={ image.id } xs={ 6 } md={ 4 }>
                        <Thumbnail
                            href="#"
                            alt={ image.title }
                            src={ image.src }
                            onClick={ () => this.props.onSelect(image) }
                        />
                    </Col>;
                })
            }
        </Row>;
    }

}

RecentImages.defaultProps = {
    images: [],
    onSelect: () => false
};