"use client"
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'

const AiSection = () => {
    return (
        <section className='py-5 AI-services'>
            <Container>


                <Row  >
                    <Col md={6} sm={12}>

                        <div className='item'>
                            <div className="   flex-col justify-start items-start gap-4 inline-flex">
                                <h1 className=' Small-text-smScreens '><span className="text-white    text-6xl   Sm:text-xl        font-bold capitalize leading-[90px]">Artificial </span><span className="text-pink-600  Small-text-smScreens text-6xl font-bold capitalize Small-text-smScreens leading-[90px]">Intelligence</span><span className="text-white  Sm:text-xl  text-6xl font-bold capitalize leading-[90px] Small-text-smScreens"> (AI)</span></h1>
                                <p className="    text-white text-xl font-normal leading-loose">Artificial intelligence (AI) is a field of computer science that deals with the creation of intelligent ents, which are systems that can reason, learn, and act autonomously. AI includes a wide range of techniques, including machine learning, deep learning, natural language processing, and computer vision</p>
                            </div>

                            <div className='flex  justify-start '>
                                <div className="   mt-10  px-20 py-6 bg-pink-600 rounded-lg border  border-pink-600 justify-center items-center gap-2.5 inline-flex">
                                    <button className="text-center text-white text-lg  font-semibold">Contact Us</button>
                                </div>
                            </div>

                        </div >
                    </Col>
                    <Col md={6} sm={12}>

                        <div className='item    flex justify-end justify-center-sm'>
                            <img src='/VR.png' alt='VR image' className='w-full h-full' />

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <div className='item'>
                            <h2 className="text-pink-600 mt-44  text-[40px] font-semibold capitalize">How can we assist?</h2>
                            <div className="   flex flex-col justify-center align-center align-items-center ">
                                <p className="    my-5  text-white text-2xl font-normal capitalize leading-10">we can help customers provide an artificial intelligence (AI) service by offering a range of expertise and services tailored to their specific needs. Here's a roadmap for how a software company can assist customers in offering AI services:</p>
                                <div className="   flex flex-col align-items-start       ">

                                    <div className="  justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white'>○</span>     <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">AI Strategy and Consulting..</p>
                                    </div>
                                    <div className="   justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white'>○</span>     <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">AI Model Development.</p>
                                    </div>
                                    <div className="   justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>        <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">Training and Testing.</p>
                                    </div>
                                    <div className="   justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>      <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">Integration and Deployment.</p>
                                    </div>
                                    <div className="   justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>     <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">Monitoring and Maintenance.</p>
                                    </div>
                                    <div className="   justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>    <p className="text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">Security and Compliance.</p>
                                    </div>
                                    <div className="  justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>   <p className="w-[285px] text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">AI Ecosystem Integration.</p>
                                    </div>
                                    <div className="  justify-start mt-2 items-center gap-2.5 flex">
                                        <span className='text-white opacity-75'>○</span>  <p className="w-[285px] text-white text-opacity-70 text-xl font-medium capitalize leading-[33.60px]">Performance Analytics.</p>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src="/AI-image.png" alt='ai image' className='w-full h-full' />
                    </Col>

                </Row>
                <Row className='mt-12'>
                    <Col>
                        <img src="/Our Approach section.png" alt='ai image' className='w-full h-full' />

                    </Col>
                </Row>
                <Row className='mt-52'>
                    <Col>

                        <div className='item'>
                            <div className=" flex-col justify-start items-center gap-6 inline-flex">
                                <div className="text-center text-pink-600 text-2xl font-semibold capitalize">Our case studies</div>
                                <div className="text-center text-white text-5xl font-medium capitalize leading-[64px]">Some of the exceptional ideas we made our clients bring to life</div>
                            </div>

                            <img src="/AI Case studies.png" alt='ai image' className=' my-4 w-full h-full' />
                            <div className='flex justify-center'>
                                <div className="w-25 flex  px-20 py-6 rounded-lg border border-pink-600 justify-center items-center gap-2.5 ">
                                    <button className="text-center text-pink-600 text-lg font-medium">See More</button>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <ContactForm slugon="Order your project now !" />

            </Container>
        </section >

    )
}

export default AiSection
