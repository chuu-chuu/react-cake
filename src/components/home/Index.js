import React from 'react'
import {Container, Col, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../component.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faAndroid} from '@fortawesome/free-brands-svg-icons';
import '../../hover.css';
import Fade from 'react-reveal/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Carousel from '../../components/Carousel';








class Home extends React.Component {
    state = ({
        data : [
            {_id: 1, name: "Strawberry Serenity", price: "$ 23 Per One Piece", url: "/assets/cake1.jpg"},
            {_id: 2, name: "Violet Solac", price: "$ 20 Per One Piece", url: "/assets/cake2.jpg"},
            {_id: 3, name: "Pink Heaven", price: "$ 20 Per One Piece", url: "/assets/cake3.jpg"},
            {_id: 4, name: " Chocolate Cozy", price: "$ 25 Per One Piece", url: "/assets/cake4.jpg"},
        ],

        service : [
            {
                _id: 1, 
                title: "Cute Cakes",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/cake.png",
            },
            {
                _id: 2, 
                title: "Best Cakes",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/party.png",
            },
            {
                _id: 3, 
                title: "Wedding Cake",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/wedding.png"
            },
            
            {
                _id: 4, 
                title: "Desserts",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/lava-cake.png"
            },
            {
                _id: 5, 
                title: "Birthday Cake",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/birthday.png"
            },
            {
                _id: 6, 
                title: "Slice Cakes",
                content: 
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                icons: "/assets/cake-slice.png"
            },
        ],

        feedbacks : [
            { _id: 1,
                name: "John",
                text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.",
                img: "/assets/boy.jpg"
            },
            { _id: 2,
                name: "Dave",
                text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.",
                img: "/assets/boy.jpg"
            },
            { _id: 3,
                name: "Ryu",
                text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.",
                img: "/assets/boy.jpg"
            },
            { _id: 4,
                name: "Milen",
                text: "You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.",
                img: "/assets/boy.jpg"
            },
        ],
    })


    render() {
        

        return (
            
            <div className="">

                <Carousel />
                <Container className="bestseller space">
                    <h2>Sweet Cupcake</h2>
                    <h3>Today Specials</h3>
                    <Row>

                        {
                            this.state.data.map ( item => {
                                return(
                                    <Col md={3} className="bestseller-cakes" key={item._id}>
                                        <Fade right>
                                        <div className="bestseller-img">
                                            <Image src={item.url} />
                                        </div>
                                        <div className="bestseller-description">
                                            <h4>
                                                {item.name}
                                            </h4>
                                            <div className="hvr-wobble-horizontal hvr-radial-out btn">
                                                {item.price}
                                            </div>
                                        </div>
                                        </Fade>
                                        
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </Container>

                <section className="services">
                    <Container>
                        <h2>Our Best Services</h2>
                        <h3>Served By Heart</h3>
                        <Row>
                            {
                                this.state.service.map ( item => {
                                    return (
                                        <Col md={4} key={item._id} className="services-content">
                                            <Fade left>
                                                <div className="services-icon">
                                                    <Image src={item.icons} />
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>{item.content}</p>
                                            </Fade>

                                        </Col>
                                    )
                                })
                            }
                            
                            
                        </Row>
                    </Container>
                </section>

                <section className="feedback">
                    <Container>
                        <h2>Feedback From Customers</h2>
                        <h3>Thousands Of Cakes Are Waiting For You</h3>
                        
                        
                        <Fade right>
                            <Slider 
                                slidesToShow={2} slidesToScroll={1}   
                                autoplaySpeed={4000} arrows={true} gutter={10}
                                centerPadding={20} dots={true} autoplay={true}
                            >
                                {
                                    this.state.feedbacks.map (feedback => {
                                        return (
                                            <div key={feedback._id} className="feedback-slider">
                                                <Row>
                                                    <Col md={3}>
                                                        <div className="feedback-img">
                                                            <Image src={feedback.img} />
                                                        </div>
                                                    </Col>
                                                    <Col md={9}>
                                                        <div className="feedback-content">     
                                                            <h4>{feedback.name}</h4>
                                                            <p>{feedback.text}</p>
                                                        </div>
                                                    </Col>
                                                                                        
                                                </Row>
                                                
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </Fade>
                        
                    </Container>
                    
                </section>
                
                <section className="application">
                    <Fade left>

                        <Container>
                            <Row>
                                <Col md={7}>
                                    <div className="download_thumb">
                                        <div className="big_img">
                                            <Image src="/assets/app-cake1.jpg" />
                                        </div>

                                        <div className="small_01">
                                            <Image src="/assets/app-cake2.jpg" />
                                        </div>
                                        <div className="small_02">
                                            <Image src="/assets/app-cake3.jpg" />
                                        </div>
                                    </div>
                                </Col>

                                <Col md={5}>
                                    <div className="download_text">
                                        <h2 className="mb-1">Download app to
                                            get recipes from
                                            Everywhere
                                        </h2>

                                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                                            lorem ipsum lorem ipsum </p>

                                        <div className="download_btn">
                                            <Row>
                                                <Col md={6}>
                                                    <div className="download_btn--device">
                                                        <Link to="/#" className="download_link d-flex">
                                                                <div className="store_icon">
                                                                    <FontAwesomeIcon icon={faApple} />
                                                                </div>
                                                                
                                                                <div className="store">
                                                                    <h5>Available</h5>
                                                                    <p>On App Store</p>
                                                                </div>
                                                            
                                                        </Link>
                                                    </div>
                                                    
                                                </Col>

                                                <Col md={6}>
                                                    <div className="download_btn--device">
                                                        <Link to="/#" className="download_link d-flex">

                                                            <div className="store_icon">
                                                                <FontAwesomeIcon icon={faAndroid} />
                                                            </div>
                                                            
                                                            <div className="store">
                                                                <h5>Download</h5>
                                                                <p>On Play Store</p>
                                                            </div>

                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                    
                                        </div>
                                    </div>

                                    
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                        
                </section>

            </div>

        )
    }
}

export default Home;
