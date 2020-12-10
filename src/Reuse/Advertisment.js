import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import './Advertisment.css';
import Ads from '../assets/ads.png';
import Digi from '../assets/digi.png';
import AdvertismentSingle from './AdvertismentSingle';

function Advertisment() {
    const settings ={
        arrows:false,
        dots:true,
        infinite: true,
        autoplay:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const adsArray = [
        {
            id:1,
            srcLeft:Ads,
            srcLogo:Digi,
            text:'Standing Together With You',
            smallText:'Keeping you connected to what matter most'
        },
        {
            id:2,
            srcLeft:Ads,
            srcLogo:Digi,
            text:'Standing Together With You',
            smallText:'Keeping you connected to what matter most'
        },
        {
            id:3,
            srcLeft:Ads,
            srcLogo:Digi,
            text:'Standing Together With You',
            smallText:'Keeping you connected to what matter most'
        },
    ]

    const adsList = adsArray.map(singleAd=>{
        return(
            <div key={singleAd.id}>
                <AdvertismentSingle
                    srcLeft={singleAd.srcLeft}
                    text={singleAd.text}
                    smallText={singleAd.smallText}
                    srcLogo={singleAd.srcLogo}
                />
            </div>
        )
    })
    return (
        <section id="ads" className="paddingY">
            <Container fluid>
                <Slider {...settings}>
                    {adsList}
                </Slider>
            </Container>

            
        </section>
        
    )
}

export default Advertisment
