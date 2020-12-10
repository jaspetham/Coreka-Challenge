import React from 'react';
import { Button, Col, Container, Row, Tab, Tabs} from 'react-bootstrap';
import Product from '../Reuse/Product';
import './PopularProduct.css';
import ProductImage from '../assets/product.png';
import ProductImage2 from '../assets/product2.png';
import ProductImage3 from '../assets/product3.png';
import ProductImage4 from '../assets/product4.png';
import ProductImage5 from '../assets/product5.png';
import ProductImage6 from '../assets/product6.png';
import ProductImage7 from '../assets/product7.png';
import ProductImage8 from '../assets/product8.png';
import ProductImage9 from '../assets/product9.png';
import ProductImage10 from '../assets/product10.png';
import Slider from 'react-slick';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Advertisment from '../Reuse/Advertisment';

const products = [
    {
        id:1,
        src:ProductImage,
        title:'Virtual shopping is the best',
        price: 250,
        bidBy: 'Edwan Hussein'
    },

    {
        id:2,
        src:ProductImage2,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    },

    {
        id:3,
        src:ProductImage3,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    },

    {
        id:4,
        src:ProductImage4,
        title:'Virtual shopping is the best',
        price: 254,
        bidBy: 'Edwan Hussein'
    },

    {
        id:5,
        src:ProductImage5,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    },

    {
        id:6,
        src:ProductImage6,
        title:'Virtual shopping is the best',
        price: 256,
        bidBy: 'Edwan Hussein'
    },

    {
        id:7,
        src:ProductImage7,
        title:'Virtual shopping is the best',
        price: 257,
        bidBy: 'Edwan Hussein'
    },

    {
        id:8,
        src:ProductImage8,
        title:'Virtual shopping is the best',
        price: 258,
        bidBy: 'Edwan Hussein'
    },

    {
        id:9,
        src:ProductImage9,
        title:'Virtual shopping is the best',
        price: 259,
        bidBy: 'Edwan Hussein'
    },

    {
        id:10,
        src:ProductImage10,
        title:'Virtual shopping is the best',
        price: 260,
        bidBy: 'Edwan Hussein'
    },
]

const productsCloth =[
    {
        id:1,
        src:ProductImage,
        title:'Virtual shopping is the best',
        price: 250,
        bidBy: 'Edwan Hussein'
    },

    {
        id:2,
        src:ProductImage2,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    },

    {
        id:3,
        src:ProductImage3,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    },

    {
        id:4,
        src:ProductImage4,
        title:'Virtual shopping is the best',
        price: 254,
        bidBy: 'Edwan Hussein'
    },

    {
        id:5,
        src:ProductImage5,
        title:'Virtual shopping is the best',
        price: 255,
        bidBy: 'Edwan Hussein'
    }
]

const productList = products.map(product=>{
    return(
        <div className="col-md-5ths" key={product.id} id={product.id}>
            <Product
                src={product.src}
                title={product.title}
                price={product.price}
                bidBy={product.bidBy}
            />
        </div>
    )
})

const productListCloth = productsCloth .map(product=>{
    return(
        <div className="col-md-5ths" key={product.id} id={product.id}>
            <Product
                src={product.src}
                title={product.title}
                price={product.price}
                bidBy={product.bidBy}
            />
        </div>
    )
})

const mobileSettings ={
    arrows:false,
    dots:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
}



function PopularProduct() {
    return (
        <section id="popular" className="paddingY">
            <Container fluid className="paddingX">
                <Row>
                    <Col>
                        <div className="popular-title">
                            <p>Popular Products</p>
                            <h1>Everything you need is just one click away</h1>
                            <Button variant="buy">Start buying now</Button>
                        </div>
                    </Col>
                </Row>
                
                <div className="desktop-view">
                    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="pt-5">
                        <Tab 
                            eventKey="all" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> All</span> 
                                </div> 
                        }>
                            <Row >
                                {productList}
                            </Row>
                        </Tab>
                        <Tab 
                            eventKey="cloth" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Women Clothing</span> 
                                </div>       
                        }>
                            <Row >
                                {productListCloth}
                            </Row>
                        </Tab>

                        <Tab 
                            eventKey="baby" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Babys Clothing</span> 
                                </div>       
                        }>
                            <Row >
                                {productListCloth}
                            </Row>
                        </Tab>

                        <Tab 
                            eventKey="beauty" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Beauty Products</span> 
                                </div>       
                        }>
                            <Row >
                                {productList}
                            </Row>
                        </Tab>

                        <Tab 
                            eventKey="men" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Men </span> 
                                </div>       
                        }>
                            <Row >
                                {productList}
                            </Row>
                        </Tab>
                        <Tab 
                            eventKey="old" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Old Clothing</span> 
                                </div>       
                        }>
                            <Row >
                                {productListCloth}
                            </Row>
                        </Tab>
                    </Tabs>
                </div>

                <div className="mobile-view">
                    <Tabs defaultActiveKey="all-mobile" id="uncontrolled-tab-example" className="pt-5">
                        <Tab 
                            eventKey="all-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> All </span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productList}
                            </Slider>
                        </Tab>

                        <Tab 
                            eventKey="cloth-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Women Clothing</span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productListCloth}
                            </Slider>
                        </Tab>

                        <Tab 
                            eventKey="baby-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Babys Clothing</span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productListCloth}
                            </Slider>
                        </Tab>

                        <Tab 
                            eventKey="beauty-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Beauty Products</span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productList}
                            </Slider>
                        </Tab>

                        <Tab 
                            eventKey="men-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Men </span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productList}
                            </Slider>
                        </Tab>
                        <Tab 
                            eventKey="old-mobile" 
                            title={
                                <div>
                                    <FontAwesomeIcon icon={faGem} className="tab-icons"/> 
                                    <span> Old Clothing</span> 
                                </div>       
                        }>
                            <Slider {...mobileSettings}>
                                {productListCloth}
                            </Slider>
                        </Tab>
                    </Tabs>
                </div>
                <Advertisment/>
            </Container>
        </section>
    )
}

export default PopularProduct
