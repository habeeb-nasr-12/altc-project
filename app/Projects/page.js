"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillHtml5 } from "react-icons/ai"
import { TbBrandKotlin } from "react-icons/tb"
import { DiJava } from "react-icons/di"
import { SiMysql } from "react-icons/si"
import { FaPython, FaReacteurope } from 'react-icons/fa6'
import { BiLogoFlutter } from 'react-icons/bi'
import ContactForm from '../Components/ContactForm'

const Projects = () => {
    return (
        <section>
            <Container>

                <Row className='mt-28  mb-24'>

                    <Col md={6}>
                        <div className='item'>
                            <img src='./Projects.png' alt='project image ' className='w-full' />
                        </div>


                    </Col>

                    <Col md={6}>

                        <div className='item'>

                            <div className="flex-col justify-start items-center gap-4 flex">
                                <h2 className=" text-center"><span className="text-white text-6xl font-bold capitalize leading-[90px]">Work across all </span><span className="text-pink-600 text-6xl font-bold capitalize leading-[90px]">major</span><span className="text-white text-6xl font-bold capitalize leading-[90px]"> industries</span></h2>
                                <p className=" text-center text-white text-2xl font-medium leading-[38.40px]">Glance over some of our successful project executions </p>
                            </div>
                        </div>



                    </Col>

                </Row>
                <div className='flex justify-center'>
                    <img src='./tech.png' alt='project image' className='w-2/1' />

                </div>
                <div className='projects-bg   p-5'>
                    <div className=' flex justify-center'>
                        <div className='flex  justify-center  w-3/4  gap-20'>
                            <img src='skills.png' className='w-full mt-11 mb-11' alt='skills icon ' />
                        </div>
                    </div>
                    <Row>
                        <Col sm={6} md={4}>
                            <div className='item'>
                                <img src='project1.png' className='w-full mt-11 mb-11' alt='project image' />
                                <div className="flex-col justify-start items-center gap-2 flex">
                                    <h2 className="text-center text-white text-xl font-semibold leading-snug">Technology Website</h2>
                                    <p className="text-center text-white text-opacity-80 text-base font-normal leading-7">Cloud, Mobile, Python</p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} md={4}>
                            <div className='item'>
                                <img src='project2.png' className='w-full mt-11 mb-11' alt='project image' />
                                <div className="flex-col justify-start items-center gap-2 flex">
                                    <h2 className="text-center text-white text-xl font-semibold leading-snug"> System Development</h2>
                                    <p className="text-center text-white text-opacity-80 text-base font-normal leading-7">Cloud, Mobile, Python</p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} md={4}>
                            <div className='item'>
                                <img src='project3.png' className='w-full mt-11 mb-11' alt='project image' />

                                <div className="flex-col justify-start items-center gap-2 flex">
                                    <h2 className="text-center text-white text-xl font-semibold leading-snug"> HealthAI360: Transforming Healthcare with AI</h2>
                                    <p className="text-center text-white text-opacity-80 text-base font-normal leading-7">Cloud, Mobile, Python</p>
                                </div>

                            </div>

                        </Col>
                    </Row>

                </div>
                <ContactForm slugon={"Order your project now !"} />
            </Container>


        </section>
    )
}

export default Projects
