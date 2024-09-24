import Loader from "@/components/partials/loader/Loader";
import React from "react";

const ContactBannerLoader = () => {
  return (
    <>
      <section className="py-2.5" id="contact-banner">
        <div className="contactBannerLoader">
            <div className="relative ">
              <Loader customCss="lg:w-full h-[400px] mb-4" />
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactBannerLoader;
