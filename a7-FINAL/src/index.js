import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import HomePage from './HomePage';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="projects" component={Projects}/>
                <Route path="about" component={About}/>
                <Route path="contact" component={Contact}/>
            </Route>
        </Router>,
  document.getElementById('root')
);