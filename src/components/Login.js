import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../component.scss';
import Breadcrumb from './Breadcrumb';

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <Breadcrumb link="Login" />  
                <Container className="login">
                    <Row className="justify-content-center">
                        <Col md={6} className="my-5 p-5 login-form">
                            <Row className="justify-content-center">
                                <Col md={6} className="text-center mb-5">
                                    <h3 >Login</h3>
                                </Col>
                            </Row>
                            
                            <Form> 
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Enter Your Email address</Form.Label> <span>*</span>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Enter Your Password</Form.Label> <span>*</span>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember Me !" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6} className="text-right">
                                        Forget Password ?
                                    </Col>
                                </Row>
                                
                                
                                <Form.Group className="text-center">
                                    <Button variant="outline-danger" type="submit">
                                        Login
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

