import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Navigation from "./Navigation";
import { StoreContext } from "../../store/StoreContext";
import { setIsShow } from "../../store/StoreAction";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    document.body.classList.toggle('overflow-hidden');
    console.log(store.isShow);
  };

  return (
    <header className={store.isShow ? "" : "overflow-hidden"}>
      <div className="wrapper container relative">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center py-3">
            <FaAngleDoubleUp className="text-accent size-4 lg:size-5 lg:ml-0" />
            <h1 className="text-sm lg:text-[25px] font-[comfortaa-semiBold] ">Pedal</h1>
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
