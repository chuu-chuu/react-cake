import React from 'react';
import Breadcrumb from './Breadcrumb';

import {Container, Col, Image, Row} from 'react-bootstrap';
class About extends React.Component {
    render() {
        return(
            <div className="about">
                <Breadcrumb link="About" />  
                <Container className="mt-5">
                    <Row className="">
                        <Col md={6} className="about__ceo mt-5">
                            
                            <h2 className="text-center">Ms Tiffany Luna</h2>
                            <div className="my-5">
                                " Soufflé danish gummi bears tart. Pie wafer icing. Gummies jelly beans powder. 
                                Chocolate bar pudding macaroon candy canes chocolate apple pie chocolate cake. 
                                Sweet caramels sesame snaps halvah bear claw wafer. 
                                Sweet roll soufflé muffin topping muffin brownie… "
                            </div>
                            <h5 className="text-center">CEO - <span>The Pinkish Bakery </span></h5>
                        </Col>

                        <Col md={6}>
                            <Image src="/assets/about-intro.png"></Image>
                        </Col>
                    </Row>
                </Container>  
                <div className="about__reward py-5">
                    <h3 className="text-center">OUR RECORD</h3>
                    <h2 className="text-center">WINNER AWARDS</h2>
                    <Container className="my-5">
                        <Row>
                            
                            <Col md={4} className="text-center">
                                <Image src="/assets/about-prize.png" className="mx-auto"></Image>
                                <h5 className="py-3 mb-0">BAKERY OF THE YEAR</h5>
                                <span>2017 - 2018</span>
                                <div className="py-3">
                                    Tart bear claw cake tiramisu chocolate bar gummies 
                                    dragée lemon drops brownie. Jujubes chocolate cake sesame snaps
                                </div>
                            </Col>

                            <Col md={4} className="text-center">
                                <Image src="/assets/about-prize2.png"></Image>
                                <h5 className="py-3 mb-0">BAKERY OF THE MONTH</h5>
                                <span>2016 MAY - 2017 JUNE</span>
                                <div className="py-3">
                                    Tart bear claw cake tiramisu chocolate bar gummies 
                                    dragée lemon drops brownie. Jujubes chocolate cake sesame snaps
                                </div>
                            </Col>

                            <Col md={4} className="text-center">
                                <Image src="/assets/about-prize.png"></Image>
                                <h5 className="py-3 mb-0">BAKERY OF THE YEAR</h5>
                                <span>2019 - 2020</span>
                                <div className="py-3">
                                    Tart bear claw cake tiramisu chocolate bar gummies 
                                    dragée lemon drops brownie. Jujubes chocolate cake sesame snaps
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                
                </div>
                <div className="about__team about__reward py-5">
                    <h3 className="text-center">GOLDEN HANDS</h3>
                    <h2 className="text-center">OUR TEAMS</h2>
                    <Container className="my-5">
                        <Row>
                            
                            <Col md={4} className="text-center">
                                <Image src="/assets/baker1.jpg"></Image>
                                <div className="about__team--content py-5">
                                    <h5 className="">JUAN OLSON</h5>
                                    <span>Master Baker</span>
                                    <div className="py-3">
                                        Jelly topping halvah caramels sweet cake gummi bears toffee.
                                    </div>
                                </div>
                                
                            </Col>

                            <Col md={4} className="text-center">
                                <Image src="/assets/baker3.jpg"></Image>
                                <div className="about__team--content py-5">
                                    <h5 className="">AGNES BUCHANAN</h5>
                                    <span>Cake Designer</span>
                                    <div className="py-3">
                                        Jelly topping halvah caramels sweet cake gummi bears toffee.
                                    </div>
                                </div>
                                
                            </Col>

                            <Col md={4} className="text-center">
                                <Image src="/assets/baker2.jpg"></Image>
                                <div className="about__team--content py-5">
                                    <h5 className="">COREY BARNETT</h5>
                                    <span>Assistance Baker</span>
                                    <div className="py-3">
                                        Jelly topping halvah caramels sweet cake gummi bears toffee.
                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                    
                
                </div>
                
            </div>

        )
    }
      
    
}

export default About;
