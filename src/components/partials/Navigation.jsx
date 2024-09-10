import React, { useRef } from "react";
import { Link } from "react-router-dom";

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

  const [activeSection, setActiveSection] = React.useState("#header");

  console.log(activeSection);
  // const sections = useRef([]);

  React.useEffect(() => {
    // Define the section IDs to track
    const sectionIds = [
      "header",
      "services",
      "about",
      "contact-banner",
      "testimonials",
      "footer",
    ];

    // Create an IntersectionObserver to track the active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed (50% of the section is in view)
    );

    // Observe each section on the page
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
      <div className="navigation md:flex md:flex-col md:justify-between hidden">
        <div className="navigation-wrapper">
          <div className="navigation-content">
            <div className="mb-[133px]">
              <h3 className="font-[inter24-bold] text-[16px]">
                Pedal's Website
              </h3>
            </div>
            <nav className="navigation-list ">
              <ul>
                <li
                  className={activeSection === "header" ? "active" : ""}
                  onClick={() => scrollToSection("header")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      Header
                    </span>
                  </div>
                </li>
                <li
                  className={activeSection === "services" ? "active" : ""}
                  onClick={() => scrollToSection("services")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      Services
                    </span>
                  </div>
                </li>
                <li
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => scrollToSection("about")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      About
                    </span>
                  </div>
                </li>
                <li
                  className={activeSection === "contact-banner" ? "active" : ""}
                  onClick={() => scrollToSection("contact-banner")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      Contact Banner
                    </span>
                  </div>
                </li>
                <li
                  className={activeSection === "testimonials" ? "active" : ""}
                  onClick={() => scrollToSection("testimonials")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      Testimonials
                    </span>
                  </div>
                </li>
                <li
                  className={activeSection === "footer" ? "active" : ""}
                  onClick={() => scrollToSection("footer")}
                >
                  <div className="navDashboard">
                    <span className="text-[inter24-semiBold] text-dashAccent">
                      Footer
                    </span>
                  </div>
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
                    <button className=" text-white">Users</button>
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
