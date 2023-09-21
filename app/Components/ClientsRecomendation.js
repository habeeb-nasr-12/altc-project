"use client"
import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { FaQuoteRight } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
const ClientsRecomendation = () => {
    const clients = [1, 2, 3]
    return (
    <section className='clinets_rec my-5 py-5'>
            <Container >
            <div className="  w-100 h-100 flex-col justify-center items-center gap-6 flex">
                <h2 className="text-center text-pink-600 text-2xl font-semibold capitalize">Clients recommendations</h2>
                <p className=" Small-text-smScreens text-center text-white text-5xl font-medium capitalize leading-[64px]">Our clients success stories</p>
            </div>
            <Row className=' mt-12  '>
                {clients.map(() => {
                    return <Col  lg={4} md={6} sm={12}>
                        <div classsName="item mx-10">
                            <div className="  h-65 text-center  relative   p-3 bg-slate-900 rounded-2xl shadow" >
                                <div className='flex justify-center mt-12 mb-4'>   <FaQuoteRight className="quote-mark " /></div>
                                <p className='quote-pargraph'>  ALTC is a truly pioneering company in the field of technology, and we cooperated with them a year ago to do a CRM system for my company, and we have achieved great success, and the company has a very distinguished team in all fields.</p>
                                <div className='flex justify-center my-5'>
                                    <AiFillStar className='gold' />
                                    <AiFillStar className='gold' />
                                    <AiFillStar className='gold' />
                                    <AiFillStar className='gold' />
                                    <BsStarHalf className='gold' />
                                </div>

                                <img class="card-img-top img-circle rounded-circle" src="/Ellipse 74.png" alt="Card image cap" />

                            </div>
                            <div className='mt-4 p-5 flex text-center flex-col'>
                                <h2 className=" text-center text-white text-base font-bold">Marwan Ahmed</h2>

                                <p className="text-center text-white text-opacity-50 text-base font-normal">Entrepreneur</p>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
  


        </Container>
    </section>
    )
}

export default ClientsRecomendation
