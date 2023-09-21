"use client"
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from 'next/link'
import React from 'react'
import { BiLogoSnapchat } from "react-icons/bi"
import { Col, Container, Row } from 'react-bootstrap'
import { BsTwitter, BsFacebook } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
const Footer = () => {
    return (
        <footer className='pt-24  '>
            <Container >
                <Row className='pb-16    '>

                    <Col  >
                        <div className='logo-container'>
                            <Image
                                src='/logo.png'
                                alt="altc logo"
                                width={154}
                                height={154}
                            />
                        </div>
                    </Col>

                    <Col  >
                        <div className='  justify-center item flex flex-col'>

                            <h2 className=" text-white text-base mb-4 font-normal leading-7">Information</h2>
                            <Link href='/information-ai' className="  mb-4 opacity-75 text-white text-base font-normal  ">AI</Link>
                            <Link href='/information-ai' className="     mb-4 opacity-75 text-white text-base font-normal">Software Services</Link>
                            <Link href='/information-ai' className="     mb-4 opacity-75 text-white text-base font-normal">CRM Systems</Link>
                            <Link href='/information-ai' className="     mb-4 opacity-75 text-white text-base font-normal">E-Commerce</Link>
                            <Link href='/information-ai' className="     mb-4 opacity-75 text-white text-base font-normal">E-Learning</Link>
                            <Link href='/information-ai' className="     mb-4 opacity-75 text-white text-base font-normal">UXUI Design</Link>


                        </div>
                    </Col>

                    <Col  >
                        <div className='item'>
                            <div className='flex  flex-col'>
                                <h2 className=" mb-4 text-white text-base font-normal leading-7">Company</h2>
                                <Link href='/home' className=" mb-4 opacity-75 text-white text-base font-normal">Home</Link>
                                <Link href='/home' className=" mb-4 opacity-75 text-white text-base font-normal">Services</Link>
                                <Link href='/home' className=" mb-4 opacity-75 text-white text-base font-normal">Projects</Link>
                                <Link href='/home' className=" mb-4 opacity-75 text-white text-base font-normal">Aboutus</Link>
                                <Link href='/home' className=" mb-4 opacity-75 text-white text-base font-normal">Contactus</Link>

                            </div>
                        </div>
                    </Col>
                    <Col  >
                        <div className='item flex flex-col'>
                            <h2 className="w-[107.25px]  h-[33px] text-white text-xl font-medium leading-7 mb-4  ">Subscribe</h2>
                            <div className='flex '>
                                <input placeholder='Email address' className="w-[293.50px] form-control h-[59.90px] bg-white rounded-md border border-slate-200" />
                                <button style={{ backgroundColor: "#0C1933", color: "white" }} className='btn  '><AiOutlineArrowRight /> </button>
                            </div>
                        </div>

                    </Col>
                </Row>

                <div className=" w-full h-px mb-12    opacity-20 bg-white border " >




                </div>
                <div className=" flex mb-4  mx-6  justify-end     text-white">
                    <div className='text-white  opacity-75  border-raduios-50  '><Link href="/"> <BiLogoSnapchat /> </Link></div>
                    <div className='text-white  \opacity-75  border-raduios-50  '><Link href="/"> <AiFillLinkedin className='mx-2' /> </Link></div>
                    < div className='text-white  opacity-75  border-raduios-50  '> <Link href="/"><BsFacebook className='mx-2' /> </Link></div>
                    <div className='text-white  opacity-75  border-raduios-50  '><Link href="/">  <BsTwitter className='mx-2' /> </Link> </div>
                </div>
                <p className="opacity-75 text-white text-2xl mb-16          text-center font-normal">© 2023  All rights reserved.</p>

            </Container>
        </footer >
    )
}

export default Footer
