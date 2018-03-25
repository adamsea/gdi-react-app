import React, { Component } from 'react';

import {
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

//
// React stateless functional component
//
function FieldGroup({ id, label, ...props }) {
    return <FormGroup controlId={id}>
        { label ? <ControlLabel>{label}</ControlLabel> : null }
        <FormControl {...props} />
    </FormGroup>;
}

export default class MemeCreator extends Component {

    state = {}

    createMeme (ev) {
        ev.preventDefault();
        let form = ev.target;
        return this.props.onCreateMeme({
            id: this.props.selected_image.id,
            src: this.props.selected_image.src,
            top_text: form.top_text.value.trim(),
            bottom_text: form.bottom_text.value.trim()
        });
    }

    render () {
        return <div>
            {
                this.props.selected_image ?
                    <Form onSubmit={ this.createMeme.bind(this) }>
                        <h4>Using Image: { this.props.selected_image.title }</h4>
                        <FieldGroup
                            type="text"
                            name="top_text"
                            placeholder="TOP TEXT"
                        />
                        <FieldGroup
                            type="text"
                            name="bottom_text"
                            placeholder="BOTTOM TEXT"
                        />
                        <Button type="submit" bsStyle="primary">Create</Button>
                    </Form> :
                    null
            }
        </div>;
    }

}

MemeCreator.defaultProps = {
    selected_image: null,
    onCreateMeme: () => false
};