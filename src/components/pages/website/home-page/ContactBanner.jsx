import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

const ContactBanner = () => {
  return (
    <>
    {/* unleash */}
    <div className="bg-secondary py-16 md:py-[100px]" id='contact-banner'>
        <div className="container">
          <div className="md:flex md:items-center lg:gap-[30rem]">
            <h2 className="text-[clamp(1.2rem,4vw,33px)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[36rem] font-[montserrat-medium] pb-6 text-gray-800 md:leading-[50px]">
              Unleash Your Adventurous Spirit: Ride a Bike and Explore the World
            </h2>
            <button className="btn-primary flex items-center gap-2 mx-auto">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
      </>
  )
}

export default ContactBanner
