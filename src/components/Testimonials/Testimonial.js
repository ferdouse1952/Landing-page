import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaDatabase } from 'react-icons/fa';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="testimonial m-4">
            <Container  className="photo d-flex align-items-center ps-4 rounded">
                <Row>
                    <Col lg={5}>
                    <div className="details text-white ">
                    <div className="content-body">
                    <i><FaDatabase/> Staxx</i>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sapiente consequuntur molestias, impedit accusamus hic rem quod? Iste, perferendis magni.</p>
                    </div>
                    <div>
                        <p className='m-0'>Marry Chivers</p>
                        <p>CEO, Staxx</p>
                    </div>
                    </div>
                    </Col>
                    <Col lg={7}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;