import React from 'react';
import { Button, Col, Container, Row, Image, Card } from 'react-bootstrap';
import ScrollText from 'react-scroll-text'; 
import './News.css';
import NewsImage from '../assets/news-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
function News() {
    const newsContent =[
        {id:1, text:'have bid on GL Men Watch |'},
        {id:2, text:'did not bid on GL Men Watch |'},
        {id:3, text:'have tried to eat banana |'},
        {id:4, text:'not eaten any banana | '},
        {id:5, text:'ate alot of banana'}
    ]

    const newsAnnouncement=[
        {id:1, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
        {id:2, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
        {id:3, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
        {id:4, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
        {id:5, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
        {id:6, text:'2020-11-06[新闻]【星秀】《有点绝活》才艺招募令'},
    ]

    return (
        <section id="news">
            <Container fluid className="paddingX">
                <Row className="news-container">
                    <Col xl={1} md={2} xs={4} className="p-0 d-flex justify-content-center">
                        <Button variant="news">News Feed</Button>
                    </Col>
                    <Col xl={11} md={10} xs={8} className="my-auto pl-0">
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
                <Row className="news-feed">
                    <Col xl={8} lg={12} xs={12} className="align-self-center">
                        <Image src={NewsImage} fluid/>
                    </Col>
                    <Col xl={4} lg={12} xs={12} className="d-flex align-items-stretch">
                        <Card className="news-card">
                            <Card.Body>
                                <Row>
                                    <Col lg={8} xs={8}>
                                        <Card.Title>Announcement</Card.Title>
                                    </Col>
                                    <Col lg={4} xs={4} className="d-flex justify-content-end">
                                        <FontAwesomeIcon icon={faVolumeUp}/>
                                    </Col>
                                </Row>
                                <div className="normalView">
                                    {newsAnnouncement.map(newsText=>{
                                        return(
                                            <Card.Text>{newsText.text}</Card.Text>
                                        )
                                    })}
                                </div>

                                <div className="laptopView">
                                    {newsAnnouncement.slice(0,3).map(newsText=>{
                                        return(
                                            <Card.Text>{newsText.text}</Card.Text>
                                        )
                                    })}
                                </div>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">
                                <Button variant="link">View More</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default News
