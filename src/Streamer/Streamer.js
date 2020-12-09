import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Streamer.css';
import Streamer1 from '../assets/streamer1.png';
import Streamer2 from '../assets/streamer2.png';
import Streamer3 from '../assets/streamer3.png';
import Streamer4 from '../assets/streamer4.png';
import Streamer5 from '../assets/streamer5.png';
import Streamer6 from '../assets/streamer6.png';
import Streamer7 from '../assets/streamer7.png';
import Streamer8 from '../assets/streamer8.png';
import Streamer9 from '../assets/streamer9.png';
import Streamer10 from '../assets/streamer10.png';
import Streamer11 from '../assets/streamer11.png';
import StreamerBox from '../Reuse/StreamerBox';

function Streamer() {
    const streamers=[
        {
            id:1,
            name: 'Aishwarya Iverys',
            title:'Inside Brightland Founder Aisawanyaaaaa',
            liveUserNum:322,
            src:Streamer1
        },
        {
            id:2,
            name: 'Menscape',
            title:'DISH BLOCK 21.5 oz HUGE',
            liveUserNum:302,
            src:Streamer2
        },
        {
            id:3,
            name:'Apple Tech Co Store',
            title:'Essential work place Gadget and Accegvrefgewfwfewfew',
            liveUserNum:102,
            src:Streamer3
        }
    ]

    const streamers2=[
        {
            id:4,
            name:'Ryza Kitchen',
            title:'Business Casual For Men | 50% bid baddddddd',
            liveUserNum:201,
            src:Streamer4
        },
        {
            id:5,
            name:'Aishwarya Iverys',
            title:'Inside Brightland Founder Aisawanyaaaaa',
            liveUserNum:1020,
            src:Streamer5
        },
        {
            id:6,
            name:'Apple Tech Co Store',
            title:'Japanese Kitchen Knives..',
            liveUserNum:2002,
            src:Streamer6
        },
        {
            id:7,
            name:'Apple Tech Co Store',
            title:'Japanese Kitchen Knives..',
            liveUserNum:2002,
            src:Streamer7
        },
        {
            id:8,
            name:'Apple Tech Co Store',
            title:'Japanese Kitchen Knives..',
            liveUserNum:2002,
            src:Streamer8
        },
    ]

    const streamers3=[
        {
            id:9,
            date:'Fri, Nov 13, 2020 11:00 AM +08',
            name:'Design Junkie Tees',
            title:'Virtual Shopping  Cooperative (Online shopping of the year)',
            liveUserNum:2002,
            src:Streamer9
        },
        {
            id:10,
            date:'Tue, Oct 27, 2020 8:00 PM +08',
            name:'East Hampton Merchandise',
            title:'Japanese Kitchen Knives..',
            liveUserNum:2002,
            src:Streamer10
        },
        {
            id:11,
            date:'Tue, Oct 27, 2020 8:00 PM +08',
            name:'Apple Tech Co Store',
            title:'We belong somewhere abcdefdffffffff',
            liveUserNum:202,
            src:Streamer11
        },
    ]

    const streamerList= streamers.map(streamer=>{
        return(
            <Col key={streamer.id} id={streamer.id}>
                <StreamerBox
                    name={streamer.name}
                    title={streamer.title}
                    liveCount={streamer.liveUserNum}
                    src={streamer.src}
                />
            </Col>
        )
    })

    const streamerList2 = streamers2.map(streamer =>{
        return(
            <div className="col-md-5ths" key={streamer.id} id={streamer.id}>
                <StreamerBox
                    name={streamer.name}
                    title={streamer.title}
                    liveCount={streamer.liveUserNum}
                    src={streamer.src}
                />
            </div>
        )
    })

    const streamerLaptop = streamers2.map(streamer =>{
        return(
            <Col key={streamer.id} id={streamer.id}>
                <StreamerBox
                    name={streamer.name}
                    title={streamer.title}
                    liveCount={streamer.liveUserNum}
                    src={streamer.src}
                />
            </Col>
        )
    })

    const streamerList3= streamers3.map(streamer=>{
        return(
            <Col key={streamer.id} id={streamer.id}>
                <StreamerBox
                    name={streamer.name}
                    title={streamer.title}
                    date={streamer.date}
                    liveCount={streamer.liveUserNum}
                    src={streamer.src}
                />
            </Col>
        )
    })
    return (
        <section id="streamer" className="paddingY">
            <Container fluid className="paddingX large-screen">
                {/* first row of streamer 3 item + 1 big text div  */}
                <Row>
                    <Col lg={4} className="my-auto">
                        <div className="section-title text-white">
                            <p>Popular live events</p>
                            <h1>Catch your favourite streams and personas</h1>
                            <Button variant="link">Start watching now</Button>
                        </div>
                    </Col>
                    {streamerList}
                </Row>
                {/* second row of streamer for 5 item in a row */}
                <Row>
                    {streamerList2}
                </Row>
                {/* final row of streamer 3 item + 1 big text div */}
                <Row>
                    {streamerList3}
                    <Col lg={4} className="my-auto">
                        <div className="section-title text-white">
                            <p>Upcoming live events</p>
                            <h1>Browse through some of the upcoming live events hand picked by people.</h1>
                            <Button variant="link">See more upcoming auctions</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="paddingX laptop-screen">
                <Row>
                    <Col className="my-auto">
                        <div className="section-title text-white">
                            <p>Popular live events</p>
                            <h1>Catch your favourite streams and personas</h1>
                            <Button variant="link">Start watching now</Button>
                        </div>
                    </Col>
                    {streamerList}
                    {streamerLaptop}
                    {streamerList3}
                    <Col className="my-auto">
                        <div className="section-title text-white">
                            <p>Upcoming live events</p>
                            <h1>Browse through some of the upcoming live events hand picked by people.</h1>
                            <Button variant="link">See more upcoming auctions</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Streamer
