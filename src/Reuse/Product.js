import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHammer } from '@fortawesome/free-solid-svg-icons';

function Product(props) {
    return (
        <Card className="product-card my-3">
            <div className="card-top">
                <Image src={props.src} fluid/>
                <div className="bid">
                    <div className="bid-left">
                        <FontAwesomeIcon icon={faClock}/>
                        <span>04h 35m 03s</span>
                    </div>
                    <div className="bid-right">
                        <FontAwesomeIcon icon={faHammer} flip="horizontal"/>
                    </div>
                </div>
            </div>
            
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <p className="price">Normal Price: RM {props.price}</p>
                <p className="bidBy">Latest bid by: {props.bidBy}</p>
            </Card.Body>
        </Card>
    )
}

export default Product
