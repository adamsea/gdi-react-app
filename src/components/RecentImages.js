import React, { Component } from 'react';

import {
    Col,
    Row,
    Thumbnail
} from 'react-bootstrap';

export default class RecentImages extends Component {

    render () {
        return <Row>
            {
                this.props.images.map((image, index) => {
                    return <Col key={ index } xs={ 6 } md={ 3 }>
                        <Thumbnail href="#" alt={ image.title } src={ image.src } />
                    </Col>;
                })
            }
        </Row>;
    }

}

RecentImages.defaultProps = {
    images: []
};