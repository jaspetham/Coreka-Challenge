import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

function LiveButton(props) {
    return (
        <Button variant="live" className="my-2">
            Live <FontAwesomeIcon className="mx-1"icon={faUserCircle}/> {props.liveUserNum}
        </Button>
    )
}

export default LiveButton
