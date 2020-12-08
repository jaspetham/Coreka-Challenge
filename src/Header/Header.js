import React, { Component } from 'react';
import { Nav, Navbar, Image, Container, Button } from 'react-bootstrap';
import "./Header.css";
import Logo from '../assets/logo.png';

export default class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" id="navbar" fixed="top">
                <Container fluid className="px-side">
                    <Navbar.Brand href="#">
                        <Image className="img-fluid" src={Logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle>
                        <span className="icon-bar top-bar"> </span>
                        <span className="icon-bar middle-bar"> </span>
                        <span className="icon-bar bottom-bar"> </span>
                    </Navbar.Toggle>

                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Why Us</Nav.Link>
                            <Nav.Link href="#">Our Portfolio</Nav.Link>
                            <Nav.Link href="#">Our Clients</Nav.Link>
                            <Nav.Link href="#">
                                <Button variant="header">Contact Us</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
