import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";

const MobileViewContactBanner = () => {
  const {
    isFetching,
    error,
    data: contactBannerData,
  } = useQueryData(
    "/v1/contactBanner", // endpoint
    "get", // method
    "contactBanner" // key
  );

  const contactBannerImg = `${devBaseImgUrl}/${contactBannerData?.data[0].contact_banner_img}`;

  return (
    <>
      <div
        className="bg-secondary py-16"
        id="contact-banner"
        style={{ backgroundImage: `url(${contactBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", }}
      >
        <div className="container">
          <div className="">
            <h2 className="text-[1.2rem] leading-7 text-center justify-center mx-auto w-[15rem] font-[montserrat-medium] pb-6 text-gray-800">
              {contactBannerData?.data[0].contact_banner_title
                ? contactBannerData?.data[0].contact_banner_title
                : "Lorem ipsum dolor sit amet consectetur"}
            </h2>
            <button className="bg-accent rounded-md text-white px-5 py-2 font-bold font-[montserrat-light] text-[.8rem] hover:bg-buttonHover transition-all flex items-center gap-2 mx-auto">
              {contactBannerData?.data[0].contact_banner_button_text
                ? contactBannerData?.data[0].contact_banner_button_text
                : "Lorem ipsum "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileViewContactBanner;
