import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from 'react-bootstrap';

// Our Components
import Home from './pages/Home';

// Styles
import './App.css';

class App extends Component {

    render() {
        return <Router>
            <Grid fluid>
                <Route exact path="/" component={Home} />
            </Grid>
        </Router>
    }

}

export default App;