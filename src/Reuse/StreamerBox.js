import React from 'react';
import { Button, Image } from 'react-bootstrap';
import LiveButton from './LiveButton';
import './StreamerBox.css';

function StreamerBox(props) {
    return (
        <div className="streamerBox">
            <div className="top-box">
                <LiveButton
                    liveUserNum={props.liveCount}
                />
                <Image src={props.src} fluid/>
            </div>
            <div className="body-box pt-3">
                <span>{props.date}</span>
                <p>{props.title}</p>
                <small>by {props.name}</small>
            </div> 
            <div className="button-box my-2">
                <Button variant="streamer-atn high">Atn High</Button>
                <Button variant="streamer-atn low"> Atn Low</Button>
            </div>
        </div>
    )
}

export default StreamerBox
