import React from 'react'
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  return (
    <section id='home' className='hero bg-black'>
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="herofull row align-items-center">
        <div className="heroleft col-lg-6 text-md-center text-sm-center">
          <h1 className='caption_head text-center' data-aos = "fade-down" data-aos-duration = "3000">
            Turning <span className='caption'>Travel</span> <br /> Into <span className='caption'>Tales</span></h1>
          <a href={`tel:${917902606303}`} data-aos = "fade-down" data-aos-duration = "2500"><button className="cont_btn">Book Now</button></a>
        </div>
        <div className="col-lg-6 text-md-center text-sm-center" data-aos = "fade-down" data-aos-duration = "3000">
          <img
            className="center_img mw-100"
            src="/images/aero.png"
            alt="heroimg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero