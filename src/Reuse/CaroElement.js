import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import './CaroElement.css';
import LiveButton from './LiveButton';

function CaroElement(props) {
    return (
        <Card className="special-card">
            <Card.Img variant="top" src={props.bigImgSrc}/>
            <Card.Body>
                <Row>
                    <Col xl={5} md={6} className="p-0">
                        <Image src={props.smallImgSrc} fluid/>
                    </Col>
                    <Col xl={7} md={6} className="p-0">
                        <div className="caro-right">
                            <LiveButton
                                liveUserNum={props.liveUserNum}
                            />
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
