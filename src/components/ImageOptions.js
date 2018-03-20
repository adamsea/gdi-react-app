import React, { Component } from 'react';

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default class ImageOptions extends Component {

    share_urls = {
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=%url%&src=sdkpreparse',
        twitter: 'https://twitter.com/intent/tweet?url=%url%&text=%text%'
    }

    shareImage (service, ev) {
        let shareUrl = this.share_urls[service];
        let imageUrl = encodeURIComponent(this.props.selected_image.src);
        let imageTitle = encodeURIComponent(this.props.selected_image.title);
        window.open(shareUrl.replace('%url%', imageUrl).replace('%text%', imageTitle));
    }

    render () {
        return <div>
            {
                this.props.selected_image ?
                    <ListGroup>
                        <ListGroupItem>Current Image: { this.props.selected_image.title }</ListGroupItem>
                        <ListGroupItem onClick={ this.shareImage.bind(this, 'facebook') }>Share to Facebook</ListGroupItem>
                        <ListGroupItem onClick={ this.shareImage.bind(this, 'twitter') }>Share to Twitter</ListGroupItem>
                    </ListGroup> :
                    null
            }
        </div>;
    }

}

ImageOptions.defaultProps = {
    selected_image: null
};