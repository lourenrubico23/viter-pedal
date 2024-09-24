import { HiPencil } from "react-icons/hi2";
import ContactBannerLoader from "./ContactBannerLoader";
import { devBaseImgUrl } from "@/components/helpers/functions-general";

const DashboardContactBanner = ({
  setItemEdit,
  setIsAdd,
  isFetching,
  contactBannerData,
}) => {
  const handleAddContactBanner = () => {
    setIsAdd(true);
    setItemEdit("contactBannerUpdate");
  };

  const contactBannerImg = `${devBaseImgUrl}/${contactBannerData?.data[0].contact_banner_img}`;

  return (
    <>
      {/* unleash */}
      <section id="contact-banner">
        {isFetching ? (
          <ContactBannerLoader />
        ) : (
          <div
            className="bg-secondary py-[100px]"
            style={{ backgroundImage: `url(${contactBannerImg})` }}
          >
            <div className="container_dashboard">
              <a
                className="relative z-30 cursor-pointer tooltip-header"
                data-tooltip="Edit Content"
                onClick={handleAddContactBanner}
              >
                <HiPencil className=" bg-accent rounded-full w-[25px] h-[25px] p-[5px] border-[1px] " />
              </a>
              <div className="flex items-center gap-[5rem]">
                <h2 className=" text-[clamp(1.2rem,4vw,33px)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[70rem] font-[montserrat-medium] pb-6 text-gray-800 md:leading-[50px]">
                  {contactBannerData?.data[0].contact_banner_title
                    ? contactBannerData?.data[0].contact_banner_title
                    : "Lorem ipsum dolor sit amet consectetur"}
                </h2>
                <button className="btn-primary">
                  {contactBannerData?.data[0].contact_banner_button_text
                    ? contactBannerData?.data[0].contact_banner_button_text
                    : "Lorem ipsum "}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DashboardContactBanner;
