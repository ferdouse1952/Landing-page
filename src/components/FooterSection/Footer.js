import React from 'react';
import './Footer.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <Container>
                <Row className='text-white'>
                    <Col lg={2}>
                        <h5>Solutions</h5>
                        <p>Marketing</p>
                        <p>Analysics</p>
                        <p>Commerce</p>
                        <p>Insights</p>
                    </Col>
                    <Col lg={2}>
                        <h5>Support</h5>
                        <p>Pricing</p>
                        <p>Documentation</p>
                        <p>Codes</p>
                        <p>Data Status</p>
                    </Col>
                    <Col lg={2}>
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Jobs</p>
                        <p>Place</p>
                    </Col>
                    <Col lg={2}>
                        <h5>Legal</h5>
                        <p>Claim</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                        <p>Terms</p>
                    </Col>
                    <Col lg={4} sm={7}>
                        <h5>Subscribe our newsletter</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div>
                            <Form className="d-flex">
                                <Form.Control
                                    type="Subscribe"
                                    placeholder="Subscribe"
                                    className="subcribe-form"
                                    aria-label="Subscribe"
                                />
                                <Button variant="outline-success" className="w-50 subscribe-btn ">Subscribe</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;