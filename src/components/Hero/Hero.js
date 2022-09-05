import React from 'react';
import { FaDatabase,FaAsterisk,FaAccusoft } from 'react-icons/fa';
import { BsFacebook,BsTwitter,BsGithub } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap/';
import {Form} from 'react-bootstrap/';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero pt-5'>
            <Container>
                <Row className='pt-5 align-items-center justify-content-center text-center text-lg-start'>
                    <Col lg="8" className=''>
                    <div>
                        <h1 className='text-white'>Data to enrich your</h1>
                        <h2 className='text-white-50'>online business</h2>
                        <p className='text-white-50 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus quasi,dolore alias odio laboriosam modi eum? Suscipit, facere cumque!</p>
                        <p className='text-white-50'>USED BY</p>
                        <div className="icons text-white-50 pb-4">
                            <i className='pe-2'><FaDatabase/> Staxx</i>
                            <i className='pe-2'><FaAsterisk/> Star AI</i>
                            <i className='pe-2'><FaAccusoft/> Accousoft</i>
                        </div>
                    </div>
                    </Col>
                    <Col lg="4" md="8" sm="8" className='  login-form pb-4'>
                    <div className='bg-light p-4 rounded-top'>
                    <p>Sign In With</p>
                    <div className="social-icon row mx-0">
                        <i className='border pb-1 col-4 text-center'><BsFacebook/></i>
                        <i className='border  pb-1 col-4 text-center'><BsTwitter/></i>
                        <i className='border  pb-1 col-4 text-center'><BsGithub/></i>
                    </div>
                    <div className='devider'>
                        <p><span>Or</span></p>
                    </div>
                    <div>
                        <Form className='w-100'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control type="name" placeholder="Enter name" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                               
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button type="submit" className='w-100 submit-button border-0'>Create Your Account</Button>
                           </Form>
                    </div>
                </div>
                <div className='form-footer w-100 rounded-bottom'>
                    <p className='text-color px-4 py-4 fw-semibold'>By signing up, you agree to our <span>Terms, Data, Policy</span> and <span>Cookies Policy</span></p>
                </div>
                    </Col>
        </Row>
        </Container>
            
        </div>
    );
};

export default Hero;