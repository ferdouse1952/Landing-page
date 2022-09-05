import React from 'react';
import './Pricing.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div className="pricing pt-4">
            <Container className='b-4 pt-4'>
            <Row className='pt-4 pb-4'>
                <Col lg={8}>
                <h2 className='fw-bolder'>Everything you need for <span>$99 a month</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, odit.</p>
                </Col>
                <Col lg={4}>
                <Button type="submit" className='submit-button border-0 w-100'>Get Started Today</Button>
                </Col>
            </Row>
            <hr />
            <Row className='pt-5'>
                <Col lg={4}>
                <p>EVERYTHING YOU NEED</p>
                <h3 className='fw-bolder'>All-in-one-platform</h3>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam saepe quibusdam beatae? Enim consequatur eaque accusamus? Aspernatur, amet architecto!</small></p>
                </Col>
                <Col lg={4} sm={6}>
                   <div className='txt d-grid gap-3'>
                   <div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                   </div>

                </Col>
                <Col lg={4} sm={6} className='mb-4'>
                   <div className='txt d-grid gap-3'>
                   <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                   </div>

                </Col>
            </Row>

        </Container>
        </div>
    );
};

export default Pricing;