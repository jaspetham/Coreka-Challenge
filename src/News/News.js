import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ScrollText from 'react-scroll-text'; 
import './News.css';

function News() {
    const newsContent =[
        {id:1, text:'have bid on GL Men Watch |'},
        {id:2, text:'did not bid on GL Men Watch |'},
        {id:3, text:'have tried to eat banana |'},
        {id:4, text:'not eaten any banana | '},
        {id:5, text:'ate alot of banana'}
    ]

    return (
        <section id="news">
            <Container fluid className="paddingX">
                <Row className="news-container">
                    <Col lg={1} xs={4} className="p-0 d-flex justify-content-center">
                        <Button variant="news">News Feed</Button>
                    </Col>
                    <Col lg={11} xs={8} className="my-auto pl-0">
                        <ScrollText  className="text-white news-text">
                            {newsContent.map(content=>{
                                return(
                                    <span key= {content.id}>
                                        <span className="special-name"> Yasmin Lim </span> {content.text}
                                    </span>
                                )
                            })}
                        </ScrollText>    
                    </Col>
                </Row>

                <Row>
                    <Col lg={8}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default News
