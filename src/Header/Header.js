import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, Row, Image, InputGroup } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Header.css';
import { faBell, faGift, faSearch, faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <Navbar expand="xl">
            <Container fluid className="position-relative">
                <Row className="w-100">
                    <Col className="col-10 col-xl-3 col-md-11 d-flex justify-content-lg-center">
                        <Navbar.Brand href="#home">
                            <Image src={Logo}/>
                        </Navbar.Brand>
                    </Col>
                    
                    <Navbar.Toggle>
                        <span className="icon-bar top-bar"> </span>
                        <span className="icon-bar middle-bar"> </span>
                        <span className="icon-bar bottom-bar"> </span>
                    </Navbar.Toggle>

                    <Col className="col col-xl-9 col-md-12  p-0 pt-3">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Row className="w-100">
                                <Col lg={5} md={12} className="col-12 search-bar">
                                    <Form inline>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl type="text" placeholder="Find a product or streamer" className="mr-sm-2" />
                                        </InputGroup>
                                    </Form>
                                </Col>

                                <Col lg={7} md={12} className="col-12">
                                    <Nav className="nav-menu d-flex flex-row">
                                        <Nav.Link href="#">
                                            <span>
                                                <FontAwesomeIcon icon={faGift} className="fa-2x"/>
                                            </span>
                                        </Nav.Link>
                                        <Nav.Link href="#">
                                            <span>
                                                <FontAwesomeIcon icon={faBell} className="fa-2x"/>
                                            </span>
                                        </Nav.Link>

                                        <Nav.Link href="#">
                                            <div className="wallet">
                                                <span>
                                                    <FontAwesomeIcon icon={faWallet} className="fa-lg"/>
                                                </span>
                                                <span className="wallet-text pl-md-3">
                                                    1928 Coins
                                                </span>
                                            </div>
                                        </Nav.Link>

                                        <Nav.Link href="#" className="login-area">
                                            <div className="login">
                                                <span>
                                                    <FontAwesomeIcon icon={faUserCircle}/>
                                                </span>
                                                <span className="login-text pl-md-2 pl-1">
                                                    Login
                                                </span>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header
