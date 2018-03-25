import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import RecentImages from '../components/RecentImages';
import MemeCreator from '../components/MemeCreator';

const IMAGES_API = 'https://kpm2qrhrf8.execute-api.us-east-1.amazonaws.com/dev/images';
const MEMES_API = 'https://kpm2qrhrf8.execute-api.us-east-1.amazonaws.com/dev/memes';

export default class Images extends Component {

    state = {
        images: [],
        selected_image: null
    }

    selectImage (image) {
        this.setState({ selected_image: image });
    }

    createMeme (textFields) {
        axios.post(MEMES_API, textFields, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
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
        return <Row>
            <Col md={ 9 }>
                <h3>Recently Uploaded</h3>
                <RecentImages
                    images={ images }
                    onSelect={ this.selectImage.bind(this) }
                />
            </Col>
            <Col md={ 3 }>
                <h3>Create Meme</h3>
                <MemeCreator
                    selected_image={ this.state.selected_image }
                    onCreateMeme={ this.createMeme }
                />
            </Col>
        </Row>;
    }

}