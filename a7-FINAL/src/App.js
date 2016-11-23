import React, { Component } from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="header"></div>
            <div className="navbar">
                <Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link> 
                <Link className="link" activeClassName='active' to="/projects">Projects</Link> 
                <Link className="link" activeClassName='active' to="/about">About</Link>
                <Link className="link" activeClassName='active' to="/contact">Contact</Link>
            </div>
            <div className="children">
                {this.props.children}
            </div>
            <div className="footer">
                <p>&copy; Setota Solomon, Autumn 2016</p>
            </div>
        </div>
    );
  }
}

export default App;
