import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Navigation from "./Navigation";
import { StoreContext } from "../../store/StoreContext";
import { setIsShow } from "../../store/StoreAction";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    document.body.classList.toggle("overflow-hidden");
    console.log(store.isShow);
  };

  return (
    <header className={store.isShow ? "" : "overflow-hidden"} id="header">
      <div className="container relative">
        <div className="flex justify-between items-center">
          <div className="py-1 w-[90px] md:w-[115px] md:h-[37px] relative">
            <img src="/img/pedalLogo.png" alt="" className="object-cover" />
          </div>

          <nav>
            <div className="toggle lg:hidden" onClick={handleShow}>
              <span></span>
              <span className="my-1"></span>
              <span></span>
            </div>
            <ul className={store.isShow ? "show nav" : "nav"}>
              <li className="hover:text-accent cursor-pointer">Home</li>
              <li className="hover:text-accent cursor-pointer">Products</li>
              <li className="hover:text-accent cursor-pointer">Community</li>
              <li className="hover:text-accent cursor-pointer">Support</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
