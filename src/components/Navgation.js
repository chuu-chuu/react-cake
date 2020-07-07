import React, { Component } from 'react';
import {Container, Navbar, Nav, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../component.scss';

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
                            <Nav activeKey="/">
                                <Nav.Link  eventKey={1} href="/" className="mr-2"
                                >
                                    Home
                                </Nav.Link>
                                
                                <Nav.Link  eventKey={2} href="/receipes" className="mr-2"
                                >
                                    Receipes
                                </Nav.Link>

                                <Nav.Link  eventKey={3} href="/about" className="mr-2"
                                >
                                    About
                                </Nav.Link>

                                <Nav.Link  eventKey={4} href="/contact" className="mr-2"
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        )
    }
}
