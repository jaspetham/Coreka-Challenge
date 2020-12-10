import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './AdvertismentSingle.css';

function AdvertismentSingle(props) {
    return (
        <div className="ads-space">
            <Row>
                <Col xs={12} className="d-flex justify-content-center">
                    <Image src={props.srcLeft} fluid/>
                </Col>
                <Col xs={12} className="my-auto">
                    <div className="ads-text-container text-center">
                        <h1>{props.text}</h1>
                        <h2>{props.smallText}</h2>
                        
                    </div>
                </Col>
                <div className="ads-logo">
                    <Image src={props.srcLogo} fluid/>
                </div>
                <div className="ads">
                    <span>Ads</span>
                </div>
            </Row>
        </div>
    )
}

export default AdvertismentSingle
