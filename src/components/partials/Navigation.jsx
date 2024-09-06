import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation flex flex-col justify-between">
        <div className="navigation-wrapper">
          <div className="navigation-content">
            <div className="mb-[133px]">
              <h3 className="font-[inter24-bold] text-[16px]">
                Pedal's Website
              </h3>
            </div>
            <nav className="navigation-list ">
              <ul>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] underline underline-offset-4">Header</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">Services</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">About</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">
                        Contact Banner
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">
                        Testimonials
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">Footer</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div className="py-[51px]">
            <span className="w-[40px] h-[40px]">
              <img src="/img/user.webp" alt="" />
            </span>
          </div>
          <div className="border-t-[2px] border-dashAccent flex flex-col gap-2">
            <h5 className="mt-[23px]">Powered by:</h5>
            <div className="w-[180px] h-[44px]">
              <img src="/img/logo-fbs.png" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
