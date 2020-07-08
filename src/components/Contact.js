import React from 'react';
import Breadcrumb from './Breadcrumb';
import {Container, Col, Button, Row, Form} from 'react-bootstrap';

function Contact() {
    return(
        <div className="contact">
            <Breadcrumb link="Contact" />
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={6} className="contact__form py-5">
                        <h4 className="mb-3 text-center">GET IN TOUCH</h4>
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Control type="name" placeholder="Your Name"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Control type="phone" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control as="textarea" rows="5" placeholder="Text Your Message Here..."/>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="outline-danger" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                        
                    </Form>
                    </Col>

                    
                </Row>
            </Container>
        </div>
    )  
    
}

export default Contact;
