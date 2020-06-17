import React, { Component } from 'react';
import {Container, Navbar, Nav, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import './CustomNavbar.css';
export default class CustomNavbar extends Component {
    render() {
        return (
            
                <Navbar bg="" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="logo">
                                <Image src="/assets/logo.jpg" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link eventKey={1} href="/">
                                    Home
                                </Nav.Link>
                                
                                <Nav.Link eventKey={2} href="/about">
                                    Receipes
                                </Nav.Link>

                                <Nav.Link eventKey={3} href="/news">
                                    About
                                </Nav.Link>

                                <Nav.Link eventKey={3} href="/news">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        )
    }
}
