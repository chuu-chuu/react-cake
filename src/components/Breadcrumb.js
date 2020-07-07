import React from 'react';
import '../component.scss';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Breadcrumb extends React.Component {
    render() {
        return(
            <>
                <div className="pg-breadcrumb">
                    <Image src="/assets/breadcrumb.jpg" />
                    <div className="pg-breadcrumb__link">
                        <h4><Link to="/">Home</Link> / {this.props.link}</h4>
                    </div>
                    
                </div>
                
            </>
        )
    }
} 
export default Breadcrumb;