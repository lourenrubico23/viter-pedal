import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general";
import { GrSettingsOption } from "react-icons/gr";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const header = document.querySelector(".navigation-list ul li.header");
  // // header.add("active");

  // window.onscroll = () => {
  //   var current = "";

  //   const sections = document.querySelectorAll("section");
  //   const navLi = document.querySelectorAll(".navigation-list ul li");
  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     if (pageYOffset >= sectionTop) {
  //       current = section.getAttribute("id");
  //       console.log(current);
  //     }
  //   });

  //   navLi.forEach((li) => {
  //     li.remove("active");
  //   });
  // };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // to close the modal when clicking outside
  const ref = React.useRef();

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

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
                <li className="header">
                  <Link to={`${devNavUrl}/header`} id="#header">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] underline underline-offset-4">
                        Header
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">
                        Services
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="navDashboard">
                      <span className="text-[inter24-semiBold] text-dashAccent">
                        About
                      </span>
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
                      <span className="text-[inter24-semiBold] text-dashAccent">
                        Footer
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div
            className={`py-[51px] relative ${isOpen && "border-dark"}`}
            onClick={handleOpen}
            ref={ref}
          >
            <span className="w-[40px] h-[40px]">
              <img src="/img/user.webp" alt="" />
            </span>
            {isOpen && (
              <div className="absolute top-16 ml-[45px] bg-[#1E1E1E] shadow-md flex flex-col gap-2 p-3 min-w-[180px]">
                
                <h6 className="text-white font-[montserrat-medium] text-[15px]">
                  Louren Rubico
                </h6>
                <a href="">
                  <span className="text-accent">louren@gmail.com</span>
                </a>
                <Link to="/changePass">
                  <span className="text-white">Change Password</span>
                </Link>
                <div className="flex flex-row gap-4 items-center">
                  <Link>
                    <button className=" text-white">
                      Users
                    </button>
                  </Link>
                  
                </div>
              </div>
            )}
          </div>
          <div className="border-t-[2px] border-dashAccent flex flex-col gap-2">
            <h5 className="mt-[10px]">Powered by:</h5>
            <div className="w-[120px] h-[44px]">
              <img src="/img/logo-fbs.png" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
