import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">QR-Generator</Navbar.Brand>
                        <Nav className="me-auto">
                       
                            <Nav.Link href="#"><Link to="/ocrtoqr" style={{ textDecoration: 'none' }}>OCR to QR</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/rawtoqr" style={{ textDecoration: 'none' }}>RAW text QR</Link></Nav.Link>
                            <Nav.Link href="#k"><Link to="/createform" style={{ textDecoration: 'none' }}>Create Form</Link></Nav.Link>


                        </Nav>
                    </Container>
                </Navbar>



            </div>
        );
    }
}

export default Navigation;