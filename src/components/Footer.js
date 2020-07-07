import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Form, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook, faLinkedin} 
from '@fortawesome/free-brands-svg-icons';
import '../component.scss';
import {Link} from 'react-router-dom';
class Footer extends React.Component {
    state = ({
        footers : [
            {
                _id: 1,
                title: "Top Products",
                link_01:  "Birthday Cakes",
                link_02:  "Cup Cakes",
                link_03:  "Desserts",
                link_04:  "Slice Cakes",

            },
            {
                _id: 2,
                title: "Features",
                link_01:  "perspiciatis",
                link_02:  "voluptatem",
                link_03:  "doloremque",
                link_04:  "consequuntur",

            },
            {
                _id: 3,
                title: "Quick Links",
                link_01:  "Jobs",
                link_02:  "Brands",
                link_03:  "Investor Relations",
                link_04:  "Terms of Services",

            },
            {
                _id: 4,
                title: "Resources",
                link_01:  "Guides",
                link_02:  "Research",
                link_03:  "Experts",
                link_04:  "Agency",

            }

        ]
    })

    render() {
        return(
            <>
                <section className="footer space">
                    <div className="footer_top">
                        <Container>
                            <Row>
                            {
                                this.state.footers.map (footer => {
                                    return(
                                        <Col md={2} key={footer._id}>
                                            <div className="footer_widget" 
                                                 >
                                                <h4 className="footer_widget--title">
                                                    {footer.title}
                                                </h4>

                                                <ul>
                                                    <li>
                                                        <Link to="/#">
                                                            {footer.link_01}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/#">
                                                            {footer.link_02}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/#">
                                                            {footer.link_03}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/#">
                                                            {footer.link_04}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    )
                                })
                            }

                            <Col md={4}>
                                <div className="footer_widget">
                                    <h4 className="footer_widget--title">
                                        Subscribe
                                    </h4>
                                    <p>
                                        You can trust us. we only send promo offers
                                    </p>

                                    <Form inline>
                                        <FormControl type="text" placeholder="Enter Your Email" className=" mr-sm-2" />
                                        <Button type="submit" variant="outline-warning">Submit</Button>
                                    </Form>
                                </div>
                            </Col>
                            </Row>
                        </Container>
                    </div>
                        
                    <div className="copyright">
                        <Container>
                            <Row>
                                <Col md={8}>
                                    <p className="copyright_text">
                                        Copyright © 2020 All rights reserved | Developed By CMTO
                                    </p>
                                </Col>

                                <Col md={4} className="social_links">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <FontAwesomeIcon icon={ faFacebook }/>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#">
                                                <FontAwesomeIcon icon={ faLinkedin }/>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#">
                                                <FontAwesomeIcon icon={ faTwitter }/>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="#">
                                                <FontAwesomeIcon icon={ faInstagram }/>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
}

export default Footer;