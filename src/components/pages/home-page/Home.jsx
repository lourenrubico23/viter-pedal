import React from "react";
import Header from "../../partials/Header";
import BannerSvg from "../../svg/BannerSvg";

const Home = () => {

  return (
    <>
      <Header />
      <div className="banner ">
        <div className="container flex h-full">
        <div className="banner_wrapper w-full flex flex-col items-center md:items-start md:justify-center h-full">
          <h1 className="text-center md:text-left w-[13rem] md:w-[23rem] text-lg md:text-[40px] md:leading-[50px] py-6 font-bold">
            The largest community of Bike enthusiasts
          </h1>
          <button className="btn-primary ">Talk to Us</button>
        </div>
        </div>
        <img src="public/img/Rectangle.png" alt="" className="mt-2 md:mt-0 md:absolute relative left-0 top-0 w-full z-[-1] object-cover md:object-fill md:h-full h-[25rem]" />
      </div>
      {/* <div className="wrapper py-11">
        <div className="pb-5">
          <h2>Choose your Companion</h2>
          <h3 className="text-lg pt-2">
            Escape the Ordinary: Experience the Thrill
          </h3>
        </div>
        <div className="card-wrapper">
          <div className="cards">
            <div className="cards-content">
              <img src="./img/pngwing.com 1.png" alt="" />
              <h3 className="text-lg font-bold">Sed ut perspiciatis</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
