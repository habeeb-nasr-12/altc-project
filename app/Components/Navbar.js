'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { FaEarthAmericas } from "react-icons/fa6"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    

    return (
        // <nav className=" border-gray-200 dark:bg-gray-900">
        //     <div className=" mx-10 flex flex-wrap items-center justify-between p-4">
        //         <Link href='/' className="flex items-center">
        //             <img src="logo.png" className=" w-3/4 mr-3" />

        //         </Link>


        //         <div className=" mx-10 flex flex-wrap items-center justify-between  p-4  md:order-2">
        //             <div className='text-white flex justify-between gap-10  '>
        //                 <BsSearch />
        //                 <div className=' flex  navbar-links text-white '>
        //                     <FaEarthAmericas className='text-white' />
        //                     <p className='text-white ml-2 text-sm   '>AR</p>
        //                 </div>

        //             </div>


        //         </div>
        //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        //             <div className="relative mt-3 md:hidden">
        //                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                 </div>
        //                 <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        //             </div>
        //             <ul className="    flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:flex-row md:space-x-8  ">
        //                 <li>
        //                     <Link href="./" className="block py-2 pl-3 pr-4 navbar-links md:p-0   hover:text-white  rounded  " aria-current="page">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/Services" className="block py-2 pl-3 pr-4 navbar-links rounded   hover:text-white md:p-0  dark:text-white  dark:hover:text-white  ">Services</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/solutions" className="block py-2 pl-3 pr-4 navbar-links rounded  hover:text-white md:p-0 dark:text-white   dark:hover:text-white  ">Solutions</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/projects" className="block py-2 pl-3 pr-4 navbar-links rounded  hover:text-white md:p-0 dark:text-white   dark:hover:text-white  ">projects</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/About" className="block py-2 pl-3 pr-4 navbar-links rounded  hover:text-white md:p-0 dark:text-white   dark:hover:text-white  ">About us</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/Contact" className="block py-2 pl-3 pr-4 navbar-links rounded  hover:text-white md:p-0 dark:text-white   dark:hover:text-white  ">Conntact us</Link>
        //                 </li>
        //             </ul>
        //         </div>

        //     </div>
        //     </nav> 
        <Navbar  >
            <Container >
                <Navbar.Brand href='/' className="flex items-center">

                    <img src="logo.png" className=" w-3/4    mr-3" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',marginRight:"200px" }}
                        navbarScroll
                    >
                        <Nav.Link className="navbar-links" href="/">Home</Nav.Link>
                        <Nav.Link className="navbar-links" href="/services">Services</Nav.Link>
                        {/* <Nav.Link className="navbar-links" href="/solutions">Solutions</Nav.Link> */}
                        <Nav.Link className="navbar-links" href="/Projects">Projects</Nav.Link>
                        <Nav.Link className="navbar-links" href="/Contactus">Contact us</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <div className=" mx-10 flex flex-wrap items-center justify-between  p-4  md:order-2" />
                        <div className='text-white flex justify-between gap-10  '>
                        <Form className="d-flex">
                        <BsSearch className='mx-4    mt-2  cursor-pointer ' onClick={handlesearch}  />        
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className={`me-2 ${isOpen? "d-block":"d-none"}`}
                                    aria-label="Search"
                                />
                                
                            </Form>
                  
                            <div className=' flex  navbar-links text-white '>
                                <FaEarthAmericas className='text-white mt-2' />
                                <p className='text-white  text-sm   ms-2'>AR</p>
                            </div>

                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}       

export default NavBar



