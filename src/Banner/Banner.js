import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';
import BannerImage from '../assets/banner.png';
import CaroImage from '../assets/caro-img.png';
import CaroBanner from '../assets/caro-banner.png';
import MobileBannerImage from '../assets/mobile-banner.png';
import CaroElement from '../Reuse/CaroElement';

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const mobileSettings ={
        arrows:false,
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section id="banner" className="paddingY">
            <Container fluid className="paddingX">
                <Row id="desktop-view">
                    <Col lg={9} md={8} xs={12} className="d-none d-xl-block">
                        <Image fluid src={BannerImage} className="banner-img"/>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="my-auto d-none d-xl-block">
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

                <Row id="mobile-view">
                    <Col className="d-xl-none p-0">
                        <Slider {...mobileSettings}>
                            <Image fluid src={MobileBannerImage}/>
                            <Image fluid src={MobileBannerImage}/>
                            <Image fluid src={MobileBannerImage}/>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
