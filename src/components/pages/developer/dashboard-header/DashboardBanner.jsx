import { FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";

const DashboardBanner = ({ setIsAdd, setItemEdit, setIsNav, setIsBanner }) => {
  const handleAddLogo = () => {
    setIsAdd(true);
    setItemEdit(null);
  };
  const handleAddNav = () => {
    setIsNav(true);
    setItemEdit(null);
  };
  const handleAddBanner = () => {
    setIsBanner(true);
    setItemEdit(null);
  };

  return (
    <>
      <section
        className=""
        id="header"
      >
        <div className="container_dashboard py-0 px-3 md:max-w-full md:max-h-full md:px-6 md:py-0 mx-auto relative bg-primary ">
          <div className="flex justify-between items-center  ">
            <div className="py-1 w-[115px] h-[37px] relative">
              <img src="/img/pedalLogo.png" alt="" className="object-cover" />
              <a
                className="absolute z-30 m-10 left-20 -top-9 cursor-pointer tooltip-header"
                data-tooltip="Upload Logo"
                onClick={handleAddLogo}
              >
                <FaRegImages className=" bg-accent rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
              </a>
            </div>

            <nav>
              <ul className="nav relative">
                <a
                  className="absolute z-30 m-10 right-[400px] -top-6 cursor-pointer tooltip-header-nav"
                  data-tooltip="Edit Text"
                  onClick={handleAddNav}
                >
                  <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px]" />
                </a>
                <li className="hover:text-accent cursor-pointer">Home</li>
                <li className="hover:text-accent cursor-pointer">Products</li>
                <li className="hover:text-accent cursor-pointer">Community</li>
                <li className="hover:text-accent cursor-pointer">Support</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="relative md:bg-[url('/img/Rectangle.webp')]">
          <div className=" container_dashboard flex h-full ">
            <div className="flex flex-col items-center md:items-start md:justify-center h-full md:gap-7 md:h-[815px] ">
              <h1 className="text-center md:text-left md:max-w-[calc(50% + 90px)] w-[50%] md:w-[50%] text-[clamp(1rem,5vw,3.5rem)] py-6 font-[montserrat-extralight]">
                The largest community of Bike enthusiasts
              </h1>
              <button className="btn-primary">Talk to Us</button>
            </div>
          </div>
          <a
            className="absolute z-30 m-10 left-[360px] top-56 cursor-pointer tooltip-header"
            data-tooltip="Edit Content"
            onClick={handleAddBanner}
          >
            <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px]" />
          </a>
          <div className="md:hidden relative ">
            <div className="bg-gradient-to-b from-white to-transparent absolute h-[2rem] w-full"></div>
            <img
              src="/img/Rectangle.webp"
              alt=""
              className="w-full object-cover h-[25rem] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardBanner;
