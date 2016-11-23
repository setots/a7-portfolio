import React from 'react';
import './css/Projects.css';

var ProjectCard = React.createClass({
    render() {
		return (
			<div className="card large col s12 m6 l6">
                <div className="card-image">
                    <img src={this.props.data.image} alt="project"></img>
                </div>
                <div className="card-content">       
                    <p className="title">{this.props.data.title}</p>
                    <p>{this.props.data.description}</p>
                </div>
                <div className="card-action">
                    <a href={this.props.data.url}>VIEW PROJECT HERE</a>
                </div>
            </div>
		);
	}
});

var Projects = React.createClass({
    
    getInitialState:function() {
        return {
            projectArray: []
        }
    }, 

    componentDidMount() {
        var customData = require('../data/data.json');
        console.log(customData.assignments);
        this.setState({projectArray:customData.assignments});
        console.log(this.state.projectArray);
    },
 
    render:function() {
        return (
            <div className="container">
                <h2>Projects</h2>
                <p>Projects On Web Development(INFO 343).</p>
                <div className="row">
                    {this.state.projectArray.map(function(d, i) {
                        return <ProjectCard key={'project' + i} data={d} />
                    })}
                </div>
            </div>    
        )
    }
    
});

export default Projects;