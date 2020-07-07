import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component.scss';





class Carousel extends React.Component {
    state = ({
        slides : [
           {
               _id: 1, 
               title: 'When you look at a cupcake, you have got to smile', 
               image: "/assets/slider6.jpg",
            }, 
            {
               _id: 2, 
               title: 'A cupcake a day, keeps the tummy rumbles away', 
               image: "/assets/slider1.jpg",
            },
            {
                _id: 3, 
                title: 'Cupcakes are sweet, and even sweeter when shared.', 
                image: "/assets/slider5.jpg",
            },
            {
                _id: 4, 
                title: 'When you look at a cupcake, you have got to smile', 
                image: "/assets/slider4.jpg",
            }, 
            {
                _id: 5, 
                title: 'When you look at a cupcake, you have got to smile', 
                image: "/assets/slider3.jpg",
            }, 
            {
                _id: 6, 
                title: 'A cupcake a day, keeps the tummy rumbles away', 
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
                                        {slide.title}
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
