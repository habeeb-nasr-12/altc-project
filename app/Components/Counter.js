"use client"
import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap';

const Counter = () => {
    return (
        <section className='py-10 counter '>
            <Container  >
                <Row >
                    <Col sm={12} md={6} lg={3}>
                        <div className="text-center">
                            <h2 className='counter-number '>20</h2>
                            <h4 className=' counter-title '>clients</h4>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="text-center">
                            <h2 className='counter-number'>50</h2>
                            <h4 className=' counter-title '> completed projects </h4>

                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="text-center">
                            <h2 className='counter-number '>5</h2>
                            <h4 className=' counter-title '>IT products</h4>


                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="text-center">
                            <h2 className='counter-number'>1000 </h2>

                            <h4 className=' counter-title '>Project spending</h4>


                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Counter
