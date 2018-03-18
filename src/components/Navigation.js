import React, { Component } from 'react';

import {
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap';

export default class Navigation extends Component {
    render () {
        return <Navbar collapseOnSelect fluid staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">React Memes</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/images">
                        My Images
                    </NavItem>
                    <NavItem eventKey={2} href="/upload">
                        Upload a New Image
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }
}