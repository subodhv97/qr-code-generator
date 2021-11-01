import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="footer-content">
                    <span ><a href="https://github.com/subodhv97"><FaGithub /></a></span>
                    <span><a href="https://www.linkedin.com/in/subodh-verma-02241916a/"><FaLinkedin /></a></span>
                    <span><a href="#"><FaInstagram /></a></span>
                    <span><a href="#"><FaFacebook /></a></span>
                    <span> <p id="foot-p">Made by Subodh</p></span>




                </div>


            </div>
        );
    }
}

export default Footer;