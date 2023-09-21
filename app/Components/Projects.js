"use client"
import Image from 'next/image'
import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'


const Projects = () => {
    return (
        <section className='p-5 projects'>
            <Container>
                <Row >
                    <Col md={6} sm={12}>
                        <div className='item'>
                            <div className='text-center-sm'>          <h2 className="text-pink-600 mb-6 text-2xl font-semibold capitalize">Projects</h2>
                                <h3 className=" mb-4 text-white text-5xl Small-text-smScreens font-medium capitalize leading-[64px]">Our completed wonderful projects</h3>
                            </div>
                            <p className=" mb-14 text-slate-400 text-opacity-80 text-xl font-normal leading-loose">There is no limit to creativity. With a strong presence in the Kingdom of Saudi Arabia, we are proud to expand our reach with a new branch in Egypt. Our expertise lies in driving improvement and innovation through the latest technology trends.</p>
                            <div style={{ width: "100%", height: 75, paddingLeft: 80, paddingRight: 80, paddingTop: 24, paddingBottom: 24, borderRadius: 8, border: '0.50px #E7267A solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <button style={{ textAlign: 'center', color: '#E7267A', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Latest Projects</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} >
                        <div className='item'>
                            <div className='w-full project-image-container flex mb-6 gap-7'>
                                <Image src="/projects (1).png" width={272} height={272} alt="project image" className='project_Image' fluid />
                                <Image src="/projects (2).png" width={272} height={272} alt="project image" className='project_Image' fluid />
                            </div>
                            <div className='w-full project-image-container flex gap-7'>
                                <Image src="/projects (3).png" width={272} height={272} alt="project image" className='project_Image' fluid />
                                <Image src="/projects (4).png" width={272} height={272} alt="project image" className='project_Image' fluid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Projects
