import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";

const ContactBanner = () => {
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
      {/* unleash */}
      <div
        className="bg-secondary py-16 md:py-[100px]"
        id="contact-banner"
        style={{
          backgroundImage: `url(${contactBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="md:flex md:items-center lg:gap-[30rem]">
            <h2 className="text-[clamp(1.2rem,4vw,33px)] leading-7 text-center justify-center mx-auto lg:mx-0 lg:text-left w-[15rem] md:w-[36rem] font-[montserrat-medium] pb-6 text-dark md:leading-[50px]">
              {contactBannerData?.data[0].contact_banner_title
                ? contactBannerData?.data[0].contact_banner_title
                : "Lorem ipsum dolor sit amet consectetur"}
            </h2>
            <button className="btn-primary flex items-center gap-2 mx-auto">
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

export default ContactBanner;
