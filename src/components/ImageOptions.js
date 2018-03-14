import React, { Component } from 'react';

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default class ImageOptions extends Component {

    render () {
        return <div>
            {
                this.props.selected_image ?
                    <ListGroup>
                        <ListGroupItem>Current Image: { this.props.selected_image.title }</ListGroupItem>
                        <ListGroupItem>Delete Image</ListGroupItem>
                        <ListGroupItem>Create Meme</ListGroupItem>
                    </ListGroup> :
                    null
            }
        </div>;
    }

}

ImageOptions.defaultProps = {
    selected_image: null
};