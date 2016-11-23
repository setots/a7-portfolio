import React from 'react';
import './css/About.css';

var AboutPage = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="image col s3"></div>
                    <div className="about col s8">
                        <h2>About Me</h2>
                        <p>My name is Setota Solomon and I am a junior at the University of Washington. I am Dedicated to defining and executing intuitive user interface that exceed user needs and address business goals. I am a creative tech-savy designer with hands-on work experience in User Interface Design for rich web and mobile application. </p>
                    </div>
                </div>
            </div>
        )
    }
});

export default AboutPage;