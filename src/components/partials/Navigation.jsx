import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { setIsShow } from "../../store/StoreAction";
import { FaIndent } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const isMobileOrTablet = window.matchMedia("(max-width:1027px)").matches;

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
  };

  const handleShowNavigation = () => {
    isMobileOrTablet
      ? setTimeout(() => {
          dispatch(setIsShow(!store.isShow));
        }, 10)
      : setTimeout(() => {
          dispatch(setIsShow(true));
        }, 10);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(setIsShow(false));
      } else {
        dispatch(setIsShow(true));
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  React.useEffect(() => {
    if (!isMobileOrTablet) {
      dispatch(setIsShow(true));
    }
  }, [isMobileOrTablet]);
  return (
    <>
      <div
        className= "navigation"
      >
        <div className="navigation-wrapper bg-primary pt-3 h-full">
          <div className="navigation-content text-dark cursor-pointer text-[14px] font-bold">
            <nav>
              <ul className="flex gap-4">
                <li>Home</li>
                <li>Products</li>
                <li>Community</li>
                <li>Support</li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className={`toggle-menu ${
            store.isShow ? "translate-x-44" : "translate-x-48"
          }`}
          onClick={handleShow}
        >
          <GiHamburgerMenu
            className={` text-sm hover:text-secondary ${
              store.isShow && "rotate-180"
            }`}
          />
        </div>
      </div>
      {store.isShow && (
        <span
          className={`fixed z-30 w-full h-full bg-dark/50 ${
            isMobileOrTablet ? "" : "lg:hidden"
          }`}
          onClick={handleShowNavigation}
          onTouchMove={handleShowNavigation}
        />
      )}
    </>
  );
};

export default Navigation;
