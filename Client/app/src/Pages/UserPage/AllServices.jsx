import React from 'react'
import './AllServices.css'
import { GoArrowRight } from "react-icons/go";


const services = [
  {
    id: 'travelpackage',
    title: 'Travel Packages',
    img: '/images/travelpackage.jpg',
    btnText: 'Book Now',
  },
  {
    id: 'flightticket',
    title: 'Flight Tickets',
    img: '/images/ticketservices.jpg',
    btnText: 'Book Now',
  },
  {
    id: 'visaservice',
    title: 'Visa Services',
    img: '/images/visaservices.jpg',
    btnText: 'Book Now',
  },
  {
    id:'hajandumra',
    title:'Hajj and Umra',
    img:'/images/hajjandumra.jpg',
    btnText:'Book Now'
  },
  {
    id:'insurance',
    title:'Travel Insurance',
    img:'/images/insurance.jpg',
    btnText:'Book Now'
  },
  {
    id:'hotelbooking',
    title:'Hotel Booking',
    img:'/images/hotelbooking.jpg',
    btnText:'Book Now'
  },
  {
    id:'currencyex',
    title:'Currency Exchange',
    img:'/images/currenctex.jpg',
    btnText:'Book Now'
  },
  {
    id:'ticketbooking',
    title:'Ticket Booking',
    img:'/images/ticticket.webp',
    btnText:'Book Now'
  },{
    id:'logistic',
    title:'Logistic & Cargo Services',
    img:'/images/logistics.webp',
    btnText:'Book Now'
  }
]

const AllServices = () => {
  return (
    <section className='allservices-section bg-black mt-5'>
        <div className="image-container">
            <img className="trackimage img-fluid w-100" src="/images/trackingimg.webp" alt="" />
            <p className="image-text">Our Services</p>
        </div>


      <div className='allservices-container container py-5'>
        <div className='row g-4'>
          {services.map((service) => (
            <div key={service.id} id={service.id} className='col-12 col-md-6 col-lg-4'>
              <div className='allservices-card card h-100 text-center'>
                <img src={service.img} alt={service.title} className='allservices-img card-img-top' />
                <div className='card-body d-flex flex-column'>
                  <h5 className='allservices-title card-title'>{service.title}</h5>
                  <a
                    href={`https://wa.me/917902606303?text=Hi! I'm interested in your ${encodeURIComponent(service.title)} service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className='btn allservices-btn mt-auto'>{service.btnText} <GoArrowRight /></button>
                </a>                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllServices