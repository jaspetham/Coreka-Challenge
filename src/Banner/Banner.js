import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';
import BannerImage from '../assets/banner.png';
import CaroImage from '../assets/caro-img.png';
import CaroBanner from '../assets/caro-banner.png';
import CaroElement from '../Reuse/CaroElement';
function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id="banner" className="paddingY">
            <Container fluid className="paddingX">
                <Row>
                    <Col md={9} xs={12}>
                        <Image fluid src={BannerImage} className="banner-img"/>
                    </Col>
                    <Col md={3} xs={12} className="my-auto">
                        <Slider {...settings}>
                            <CaroElement
                                bigImgSrc={CaroBanner}
                                smallImgSrc={CaroImage}
                                author="Ana Chiew"
                                atnLevel="High"
                                title="Virtual Shopping! From beauty cream to oils and skin care. Bid now!"
                                liveUserNum={321}
                                liveDuration="5:02:09"
                            />
                            <CaroElement
                                bigImgSrc={CaroBanner}
                                smallImgSrc={CaroImage}
                                author="Ana Chiew"
                                atnLevel="High"
                                title="Virtual Shopping! From beauty cream to oils and skin care. Bid now!"
                                liveUserNum={3111}
                                liveDuration="5:02:09"
                            />
                            <CaroElement
                                bigImgSrc={CaroBanner}
                                smallImgSrc={CaroImage}
                                author="Ana Chiew"
                                atnLevel="High"
                                title="Virtual Shopping! From beauty cream to oils and skin care. Bid now!"
                                liveUserNum={301}
                                liveDuration="5:02:09"
                            />
                        </Slider>
                      

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
