import React from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component.scss';
import Breadcrumb from './Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faEye} from '@fortawesome/free-solid-svg-icons';
class Receipe extends React.Component {
    state = ({
        receipes : [
            
            {
                _id: 1, 
                img: "/assets/cake5.jpg",
                title: "Oreo Spider",
                price: "$20",
            },
            {
                _id: 2, 
                img: "/assets/cake6.jpg",
                title: "Sangria Choco Roll",
                price: "$30",
            },
            {
                _id: 3, 
                img: "/assets/cupcake2.jpg",
                title: "Boston Cream Pie",
                price: "$15",
            },
            {
                _id: 4, 
                img: "/assets/cake4.jpg",
                title: "Choco Glory",
                price: "$12",
            },
            {
                _id: 5, 
                img: "/assets/cake8.jpg",
                title: "Honeydrew Pancake",
                price: "$12",
            },
            {
                _id: 6, 
                img: "/assets/cake1.jpg",
                title: "Strawberry Queen",
                price: "$12",
            },
            {
                _id: 7, 
                img: "/assets/cake9.jpg",
                title: "Pumpkin Brownie",
                price: "$12",
            },
            {
                _id: 8, 
                img: "/assets/cake11.jpg",
                title: "Becky’s Snickerdoodle",
                price: "$12",
            },
            
        ]
    })
    
    render() {
        return(
            <div>
                <Breadcrumb link="Receipes" />
                <Container className="mt-5">
                    <Row>
                        {
                            this.state.receipes.map( receipe => {
                                return(
                                   
                                    <Col md={3} key={receipe._id} className="text-center mb-5">
                                        <div className="receipe-img">
                                            <Image src={receipe.img} />
                                            <div className="receipe-icon">
                                                <FontAwesomeIcon icon={faEye} />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="receipe-title">
                                                {receipe.title}
                                            </div>
                                            <div className="receipe-price">
                                                {receipe.price}
                                            </div>
                                        </div>
                                    </Col>
                                    
                                )
                            })
                        }
                        
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Receipe;
