"use client"
import React from 'react'
import ContactForm from '../Components/ContactForm'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLocationDot } from 'react-icons/fa6'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoMdMailOpen } from "react-icons/io"

import GoogleMapReact from 'google-map-react';
import GoogleMap from '../Components/GoogleMap'

const Contactus = () => {
    const center = { lat: 21.3891, lng: 39.8579 }; // Replace with the coordinates of your desired location
    const zoom = 13;
    return (
        <Container className='py-5' >
            <ContactForm slugon="Get in touch with us" />
            <Row className='mt-32'>
                <Col md={6}>
                    <div className='item '>

                        <div className=" flex-col justify-start items-start    gap-14 flex">
                            <div className="justify-start items-center mt-4   gap-4 flex">
                                <FaLocationDot className='w-[34px]    text-pink-500 h-[46px]' />      <p className=" text-white text-4xl font-normal">Nile Street - Giza - Egypt</p>
                            </div>

                            <div className="justify-start items-center   gap-4 flex">
                                <BsTelephoneFill className='w-[34px]      text-pink-500 h-[46px]' />      <p className=" text-white text-4xl font-normal">+20 01155856594
                                </p>
                            </div>
                            <div className="justify-start items-center   gap-4 flex">
                                <IoMdMailOpen className='w-[34px]      text-pink-500 h-[46px]' />      <p className=" text-white text-4xl font-normal">altc@info.com</p>
                            </div>




                        </div>

                    </div>
                </Col>
                <Col md={6}>
                    <div className='item flex align-items-center rounded mt-10 '>
                        
                        <GoogleMap center={center} zoom={zoom} />

                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Contactus
