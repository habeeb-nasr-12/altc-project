"use client"

import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUS = () => {
    return (
        <section className='about-us py-2 my-5'>

            <Container className='about-us-txt'>
                <Row >
                    <Col xs={12} md={8} className="p-0 ">
                        <div className="item w-full h-full p-5   about-text ">
                            <h2 className="text-4xl font-bold text-white">About Us</h2>
                            <p className="my-3 text-2xl">
                                We are a leading force in technology promotion. With our roots in Saudi Arabia and a new chapter revealing itself in Egypt, we bring a wealth of experience and knowledge to empower businesses and organizations. Our primary interest is in exploiting the potential of modern concepts such as big data analytics, artificial intelligence, computer vision, and Internet of Things solutions.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="p-0">
                        <div className="about-img   w-100 h-100  ">
                            <Image
                                src="/about-img.png"
                                className="w-100  h-100"
                                alt="Your Image"    
                                fluid
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

        


        </section >

    )
}

export default AboutUS
