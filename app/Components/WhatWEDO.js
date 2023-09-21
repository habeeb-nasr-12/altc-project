"use client"

"use client"
import React from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'

const WhatWEDO = () => {
  return (
    <secsion className="my-5 py-5 ">
      <Container >
        <Row>

          <Col md={6} sm={12}>
            <div className="WhatWeDoSection">
              <div className="Group51    flex flex-col   justify-center-sm">
                <h2 className="WhatWeDo mt-6 text-pink-600 text-2xl font-semibold capitalize">What We Do</h2>
                <div className="WhatWeDoSectionText     d-flex flex-column justify-content-start align-items-start gap-4">
                  <div style={{lineHeight:"64px"}} className="flex gap-2  mt-6 mb-4 text-white text-5xl font-medium capitalize  leading-[64px]"><h2>We create experience <br></br> that put people in<br />Primarily</h2></div>
                  <p className=" text-white text-opacity-80 text-xl font-normal leading-loose">Experiences are only as good as their weakest points. It's about more than just creating shiny things. It is all about the quality of your brand</p>
                 
                </div>
              </div>
            </div>
          </Col>


          <Col md={6} sm={12} >
            <div className=' item flex  justify-center-sm     justify-content-end align-items-end'>
            <img src="/whatWEDo.png" alt='programmers photos'className='w-3/4'/>
             </div>

          </Col>
        </Row>
      </Container>
    </secsion>
  )
}

export default WhatWEDO
