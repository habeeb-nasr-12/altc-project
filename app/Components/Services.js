"use client"
import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { BiSolidBot } from "react-icons/bi"
import Image from 'next/image'
const Services = () => {
    return (
        <section className='Services p-5'>
            <Container>
                <div className='w-100 flex text-center-sm   justify-center' style={{ width: 800, height: 116, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24 }}>
                    <h2 style={{ textAlign: 'center', color: '#E7267A', fontSize: 24, fontWeight: '600', textTransform: 'capitalize', }}>Our Services</h2>
                    <p className=' text-5xl sm:text-xl text-white ' style={{ textAlign: 'center', color: 'white', fontWeight: '500', textTransform: 'capitalize', lineHeight: "64px", }}>ALTC has experts in all disciplines</p>
                </div>
                <Row  >
                    <Col sm={12} md={4} >
                        <div className='item '>
                            <div className='services-contariner' style={{   width:"360px", height: "254px", background: '#0C1933', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)', borderRadius: 16 }} >
                                <div className='flex ms-6  mt-4 '>

                                    <Image
                                        src="/chat-bot.svg"
                                        width={64}
                                        height={64}
                                        className='mt-4 mb-3'
                                        alt="Your Image"
                                        fluid
                                    />
                                </div>
                                <h2 className=' ms-6 text-white  text-xl leading-9'>Ai</h2>
                                <p className='mb-5   ms-6 text-slate-400 text-sm'>Artificial Intelligence technology unlocks limitless possibilities. AI solutions offer intelligent data analysis, enhance customer communication, </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}     >
                        <div className='item'>
                            <div className='services-contariner' style={{   width:"360px", height: "254px", background: '#0C1933', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)', borderRadius: 16 }} >
                                <div className='flex ms-6  mt-4 w-full '>

                                    <Image
                                        src="/decentralize.png"
                                        height={64}
                                        className='mt-4 mb-3'
                                        width={64}
                                        alt="Your Image"
                                        fluid
                                    />
                                </div>
                                <h2 className=' ms-6 text-white  text-xl leading-9'>Software services</h2>
                                <p className='  mb-7 ms-6 text-slate-400 text-sm'>Websites and apps represent your online presence. Through attractive design and outstanding user experience, you can reach a wide audience and build a strong presence..</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}      >
                        <div className='item'>
                            <div className='services-contariner' style={{   width:"360px", height: "254px", background: '#0C1933', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.06)', borderRadius: 16 }} >
                                <div className='flex ms-6 w-full  mt-4 '>

                                    <Image
                                        src="/cube.png"
                                        width={64}
                                        height={64}
                                        className='mt-4 mb-3'

                                        alt="Your Image"
                                        fluid
                                    />
                                </div>
                                <h2 className=' ms-6 text-white  text-xl leading-9'>E-Commerce</h2>
                                <p className=' mb-7 ms-6 text-slate-400 text-sm'>E-commerce opens doors to expansion and online customer reach. Simply put, you can sell your products and services globally..</p>
                            </div>
                        </div>
                    </Col>
                </Row>



            </Container>

        </section >
    )
}

export default Services
