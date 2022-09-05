import React from 'react';
import './Contact.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const Contact = () => {
    return (
        <div>
            <Container className='mb-5 pb-5 pt-5'>
                <Row>
                    <Col lg={7}>
                        <h3 className='fw-bolder'>Get in touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis suscipit sint totam repudiandae earum perspiciatis?</p>
                        <i><FaPhone/> +880 012345678</i> <br/>
                        <i><HiMail/> SomeOne@gmail.com</i>
                    </Col>
                    <Col lg={5} className="shadow p-4 mt-5 mt-lg-0">
                    <Form className="">
                        <Form.Group className="mb-3 form-section" controlId="formBasicEmail">
                            
                        <Form.Control type="name" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-section" controlId="formBasicPassword">
                            
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-section" controlId="formBasicPassword">
                            
                        <Form.Control type="phone" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-section" controlId="formBasicPassword">
                           
                        <Form.Control  as="textarea" rows={3} placeholder="Message" />
                        </Form.Group>
                        {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3 d-flex justify-content-center">
                            <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="By checking this box, you agree with our terms and policy"/>
                            
                        </div>
                        ))}
                        <Button className='w-100 submit-button border-0'>Submit</Button>
                    </Form>
                    </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Contact;