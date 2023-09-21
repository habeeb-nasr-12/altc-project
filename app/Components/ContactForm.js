"use client"
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
const ContactForm = ({slugon}) => {
    return (
        <div className='contact-form mt-40' >
            <h2 className="text-pink-600 text-[40px] font-semibold capitalize my-16 ">{slugon}</h2>
            <Form>
                <Row className='flex  justify-between'>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3 me-10" >
                            <Form.Label className='text-white'>Name</Form.Label>
                            <Form.Control type="text" placeholder="Habeeb" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>

                        <Form.Group className="mb-3 text-white" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="habeeb@example.com" />
                        </Form.Group>


                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Group className="mb-3 me-10">
                            <Form.Label className='text-white'>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="+01043849320" />
                        </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>

                        <Form.Group className="mb-3 text-white" >
                            <Form.Label>Company Name </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>


                    </Col>
                    <Col sm={12} md={6}>

                        <Form.Group className="mb-3 text-white" >
                            <Form.Label>Company Field </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>


                    </Col>
                    <Col sm={12} md={6}>

                        <Form.Group className="mb-3 text-white" >
                            <Form.Label>Company Size </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>


                    </Col>
                    <Col >

                        <Form.Group className="mb-3" >
                            <Form.Label className='text-white'>Message...</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>


                    </Col>
                </Row>

                <button className=" mt-12  w-20 m-auto  flex justify-center  h-[75px] px-20 py-6 rounded-lg border border-pink-600  items-center ">
                    <span className="  text-center cursor-pointer text-pink-600 text-lg font-medium">send</span >
                </button>
            </Form>

        </div>
    )
}

export default ContactForm
