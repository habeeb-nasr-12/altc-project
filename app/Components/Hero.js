"use client"
import Image from 'next/image'
import { Container } from 'react-bootstrap';
import React from 'react'
import { useForm } from "react-hook-form"
import Carousel from 'react-bootstrap/Carousel';
const Hero = () => {

    const onSubmit = (data) => { console.log(data) }
    const { register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    return (
        <Container className='Hero my-8'>
            <div className='row gap-22 p-0 m-0    mx-auto'>
                <div className=' col-md-6 '>
                    <div className='item '>
                        <h1 className='slugon'>Turn your thoughts to reality </h1>
                        <div className='m-start  w-full  flex justify-start'>

                            <img src='./curved-line.png' alt=' curved line ' />
                        </div>
                        <p className="mt-4 text-xl ">We are driven by the relentless pursuit of technological  excellence. Our mission is to empower companies with a  deep understanding of the latest technologies.
                        </p>
                        <div className='mt-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className='phone-sm-screen' >
                                <input className='phone-input rounded  sm-submit-btn   ' name="phoneNumber"
                                    {...register('phoneNumber', {
                                        pattern: {
                                            value: /^(\+\d{1,3})?\d{1,14}$/,
                                            message: 'Invalid phone number format (XXX) XXX-XXXX',
                                        }
                                    })}
                                />
                                <button type='submit' className='  rounded     Request-call '>Request call </button>


                            </form>
                            {errors.phoneNumber && <p className='red block mt-4 '>{errors.phoneNumber.message}</p>}
                            {/* <div className='text-center' >      </div> */}
                        </div>
                    </div>

                </div>
                <div className='col-md-6 '>
                    <div className='item d-flex justify-items-end   earth-bg   mx-auto w-full h-full     '>
                        <img
                            className='w-full  h-full'
                            src="/earth.svg"
                            alt="earth digram"
                        />

                    </div>

                </div>

            </div>
            <Carousel className='my-5 py-5' data-bs-theme="white">
                <Carousel.Item>
                    <img
                        className=" mx-auto "
                        width={400}
                        height={400}
                        src="client2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" mx-auto "
                        width={400}
                        height={400}
                        src="client3.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" mx-auto "
                        width={400}
                        height={400}
                        src="client4.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>




        </Container>
    )
}

export default Hero
