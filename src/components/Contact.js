import React from 'react';
import Breadcrumb from './Breadcrumb';
import {Container, Col, Button, Row, Form, Image} from 'react-bootstrap';
import '../component.scss';

function Contact() {
    return(
        <div className="contact">
            <Breadcrumb link="Contact" />
            <Container className="my-5">
                <Row className="">
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

                    <Col md={6} className="contact__info pl-5">
                        <div className="contact__info--content d-flex">
                            <div className="mr-3">
                            <Image src="/assets/home.png"></Image>
                            </div>
                            
                            <div>
                                <h5>Kamayut, Yangon.</h5>
                                <p>No(126), Baho Road</p>
                            </div>
                        </div>

                        <div className="contact__info--content d-flex">
                            <div className="mr-3">
                                <Image src="/assets/phone.png"></Image>
                            </div>
                            
                            <div>
                                <h5>00 (440) 9865 562</h5>
                                <p>Sun to Sat 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="contact__info--content d-flex ">
                            <div className="mr-3">
                                <Image src="/assets/mail.png"></Image>
                            </div>
                            
                            <div>
                                <h5>support@pinkish.com</h5>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
                
            </Container>
        </div>
    )  
    
}

export default Contact;
