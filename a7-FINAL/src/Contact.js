import React from 'react';
import './css/Contact.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import linkedin from './img/linkedin.png';
import email from './img/email.png';

var Contact = React.createClass({
    render() {
		return (
			<div className="container">
                <h2>Contact Me</h2>
                <p>We can get in touch with me via the following network:</p> 
                <div className="row links">
                    <a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn logo" /></a>
                    <p> Let's Connect on Linkdln :<a href ="https://www.linkedin.com/in/setota-solomon-044211113?trk=hp-identity-photo"> Check my Linkedln </a> </p>
                    <a href="setots@uw.edu"><img src={email} alt="email logo" height="100"/></a>
                </div>
			</div>
		);
	}
});

export default Contact;
 