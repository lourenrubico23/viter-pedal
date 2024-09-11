const MobileViewFooter = () => {
  return (
    <>
      <div className="footer_wrapper bg-secondary py-12" id="footer">
        <div className="container">
          <div className="">
            <div className="footer-nav text-center">
              <ul className="text-[1rem] font-[montserrat-extrabold] flex flex-col gap-2">
                <li className="hover:text-accent transition-all cursor-pointer">
                  Home
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Products
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Community
                </li>
                <li className="hover:text-accent transition-all cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div className="logo flex items-center gap-2 justify-center py-10">
              <div className="py-1 w-[115px] h-[37px]">
                <img src="/img/pedalLogo.png" alt="" className="object-cover" />
              </div>
            </div>
            <h3 className="text-center text-[1rem] text-gray-700">
              &copy; Pedal 2024. We love our Community!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileViewFooter;
