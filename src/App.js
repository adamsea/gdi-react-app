import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';

// Our Components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Images from './pages/Images';
import Upload from './pages/Upload';

// Styles
import './App.css';

class App extends Component {

    render() {
        return <Router>
            <Grid fluid>
                <Row>
                    <Navigation />
                </Row>

                <Route exact path="/" component={Home} />
                <Route path="/images" component={Images} />
                <Route path="/upload" component={Upload} />
            </Grid>
        </Router>
    }

}

export default App;