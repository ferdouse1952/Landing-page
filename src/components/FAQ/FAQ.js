import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
    return (
        <Container className='mt-5 mb-5 pt-5 pb-5'>
            <Row>
                <Col lg={4}>
                    <h4>Frequently asked questions</h4>
                    <p>Can't find the answer you're looking for?</p>
                    <p>Reach out to our <span>customer support</span>team.</p>
                </Col>
                <Col lg={8}>
                    <Accordion className='mt-4 mt-lg-0'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='ac-header'>
                                <h6 className='fw-bolder'>How do you make holy water?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='ac-header'>
                                <h6 className='fw-bolder'>How do you make holy water?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className='ac-header'>
                                <h6 className='fw-bolder'>How do you make holy water?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className='ac-header'>
                                <h6 className='fw-bolder'>How do you make holy water?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className='ac-header'>
                                <h6 className='fw-bolder'>How do you make holy water?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;