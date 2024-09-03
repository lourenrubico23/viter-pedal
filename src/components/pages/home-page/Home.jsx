import React from "react";
import Header from "../../partials/Header";
import BannerSvg from "../../svg/BannerSvg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <div className="wrapper z-50 ">
          <h1 className="text-[55px] w-[460px] pt-52 pb-9 leading-[80px]">
            The largest community of Bike enthusiasts
          </h1>
          <button className="btn-primary text-lg">Talk to Us</button>
        </div>
      </div>
      <div className="wrapper py-11">
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
      </div>
    </>
  );
};

export default Home;
