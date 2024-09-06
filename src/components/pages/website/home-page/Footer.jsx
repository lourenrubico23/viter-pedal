import React from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    {/* footer */}
    <div className="footer_wrapper bg-secondary py-12 md:py-16">
        <div className="container">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="footer-nav text-center">
              <ul className="text-[clamp(.6rem,4vw,15px)] font-[montserrat-extrabold] flex flex-col gap-2 lg:flex lg:flex-row lg:gap-24">
                <li className="hover:text-accent transition-all cursor-pointer">
                  Home
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Products
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Community
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div className="logo flex items-center gap-2 justify-center py-10 lg:order-first">
              <FaAngleDoubleUp className="text-accent size-6" />
              <h1 className="text-[clamp(1.5rem,4vw,29px)] font-[comfortaa-semiBold]">
                Pedal
              </h1>
            </div>
            <h3 className="text-center text-[clamp(.5rem,4vw,15px)] text-gray-700">
              &copy; Pedal 2024. We love our Community!
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
