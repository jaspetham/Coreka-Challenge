import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import './CaroElement.css';

function CaroElement(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.bigImgSrc} fluid />
            <Card.Body className="special-card">
                <Row>
                    <Col xl={5} className="p-0">
                        <Image src={props.smallImgSrc} fluid/>
                    </Col>
                    <Col xl={7} className="p-0">
                        <div className="caro-right">
                            <Button variant="live" className="my-2">
                                Live <FontAwesomeIcon className="mx-1"icon={faUserCircle}/> {props.liveUserNum}
                            </Button>
                            <span className="pl-4 text-white">{props.liveDuration}</span>
                            <p>{props.title}</p>
                            <small>by {props.author}</small>
                            <Button variant="atn" className="my-2">Atn {props.atnLevel}</Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CaroElement
