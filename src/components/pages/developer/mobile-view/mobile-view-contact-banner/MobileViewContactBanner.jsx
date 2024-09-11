import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

const MobileViewContactBanner = () => {
  return (
    <>
    <div className="bg-secondary py-16" id='contact-banner'>
        <div className="container">
          <div className="">
            <h2 className="text-[1.2rem] leading-7 text-center justify-center mx-auto w-[15rem] font-[montserrat-medium] pb-6 text-gray-800">
              Unleash Your Adventurous Spirit: Ride a Bike and Explore the World
            </h2>
            <button className="bg-accent rounded-md text-white px-5 py-2 font-bold font-[montserrat-light] text-[.8rem] hover:bg-buttonHover transition-all flex items-center gap-2 mx-auto">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileViewContactBanner
