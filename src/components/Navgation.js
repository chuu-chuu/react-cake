import React, { Component } from 'react';
import {Container, Navbar, Nav, Image, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../component.scss';

export default class CustomNavbar extends Component {
    render() {
        return (
                <>
                <div className="topbar py-3">
                    <Container>
                        <Row>
                            <Col md={8}>
                                <div className="topbar__phone">Call Now : 09 1231334444</div>
                            </Col>

                            <Col md={4}>
                                <div className="topbar__link text-right">
                                    <Link to="/login">
                                        Login
                                    </Link>
                                    <span className="px-3">|</span>
                                    <Link to="/register">
                                        Register
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Navbar bg="" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className="logo">
                            {/* <Link to="/" className="logo"> */}
                                <Image src="/assets/logo.jpg" />
                            {/* </Link> */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav varient="pills" defaultActiveKey="/">
                            <Nav.Item>
                                <Nav.Link  href="/" className="mr-2" 
                                >
                                    Home
                                </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Link  href="/receipes" className="mr-2"
                                >
                                    Receipes
                                </Nav.Link>

                                <Nav.Link  href="/about" className="mr-2"
                                >
                                    About
                                </Nav.Link>

                                <Nav.Link  href="/contact" className="mr-2"
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </>
            
        )
    }
}
