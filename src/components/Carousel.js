import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component.scss';
import Fade from 'react-reveal/Fade';




class Carousel extends React.Component {
    state = ({
        slides : [
           {
               _id: 1, 
               title: 'First item', 
               description: 'Lorem ipsum',
               image: "/assets/slider6.jpg",
            }, 
            {
               _id: 2, 
               title: 'Second item', 
               description: 'Lorem ipsum',
               image: "/assets/slider1.jpg",
            },
            {
                _id: 3, 
                title: 'First item', 
                description: 'Lorem ipsum',
                image: "/assets/slider5.jpg",
            },
            {
                _id: 4, 
                title: 'First item', 
                description: 'Lorem ipsum',
                image: "/assets/slider4.jpg",
            }, 
            {
                _id: 5, 
                title: 'First item', 
                description: 'Lorem ipsum',
                image: "/assets/slider3.jpg",
            }, 
            {
                _id: 6, 
                title: 'First item', 
                description: 'Lorem ipsum',
                image: "/assets/slider2.jpg",
            },  
        ] 
    })
      
    render () {
        return (
                <div className="slider">
                    <Slider 
                        className="slider-wrapper" 
                    >
                        {
                        this.state.slides.map ( slide => {
                            return (
                                <div key={slide._id} 
                                style={{ background: `url('${slide.image}') no-repeat center center` }}>
                                    
                                    <div className="inner">
                                        <Fade top>
                                            <h2>{slide.title}</h2>
                                        </Fade>
                                        
                                        <p>{slide.description}</p>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                        </Slider>
                        </div>
                   
             
        )
    }
}

export default Carousel;
