import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import BackgroundImage from '../assets/test.png';
import Curved from '../assets/path.png';
import  BannerImg from '../assets/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

export default class Banner extends Component {
    render() {
        return (
            <section id="banner">
                <div className="banner-wrap">
                    
                    <Image className="curved" src={Curved} />
                    <Image className="backgroundImage" src={BackgroundImage} fluid/>
                    <Container fluid className="px-side banner-content">
                        <Row>
                            <Col md={5} className="my-auto">
                                <Container>
                                    <div className="left-banner">
                                        <h1>we create applications with excellent technology</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perspiciatis. Unde soluta, eveniet, sunt explicabo consequuntur autem placeat amet quaerat voluptatem in sequi fugit ipsum doloribus ipsa pariatur assumenda consectetur.</p>
                                        <a href="#" className="btn btn-banner">
                                            Explore More 
                                            <span className="pl-3"><FontAwesomeIcon icon={faArrowRight}/></span>
                                        </a>
                                    </div>
                                </Container>
                            </Col>

                            <Col md={7}>
                                <Container>
                                    <Image fluid src={BannerImg}></Image>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}
