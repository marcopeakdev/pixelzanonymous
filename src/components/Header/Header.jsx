import React, { useState } from "react";

const Header = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <React.Fragment>
      <div className="bg-black lg:hidden" id="header-menu">
        <div className="z-50 flex justify-between items-center w-screen h-48">
          <img
            src={require("../../assets/images/anonmask.png")}
            alt="anonmask.png"
            height="100"
            width="100"
            className=" px-4 "
          />
          {!isClosed && (
            <div className="flex flex-col">
              <a href="#home" className="text-2xl ">
                home
              </a>
              <a href="#roadmap-heading" className="text-2xl">
                roadmap
              </a>
              <a href="#team-heading" className="text-2xl ">
                team
              </a>
              <a href="#faq-heading" className="text-2xl">
                faq
              </a>
            </div>
          )}
          <button onClick={() => setIsClosed(isClosed ? false : true)}>
            {isClosed ? (
              <img
                src={require("../../assets/images/menu.svg").default}
                alt="menuicon"
                height="100"
                width="100"
                className=" px-4"
              />
            ) : (
              <img
                src={require("../../assets/images/close.svg").default}
                alt="close icon"
                height="100"
                width="100"
                className=" px-4"
              ></img>
            )}
          </button>
        </div>
      </div>
      <div className="bg-black lg:block hidden" id="header">
        <div className="w-full flex items-center justify-evenly py-12 text-[#04fd3f] font-bold">
          <div className="border-b-[5px] border-[#04fd3f] flex items-center justify-evenly w-full">
            <a href="#home" className="md:text-5xl xl:text-7xl">
              home
            </a>
            <a href="#roadmap-heading" className="md:text-5xl xl:text-7xl">
              roadmap
            </a>
          </div>
          <img
            src={require("../../assets/images/anonmask.png")}
            className="max-h-48"
            alt="anonmask"
          />
          <div className="border-b-[5px] border-[#04fd3f] flex items-center justify-evenly w-full">
            <a href="#team-heading" className="md:text-5xl xl:text-7xl">
              team
            </a>
            <a href="#faq-heading" className="md:text-5xl xl:text-7xl">
              faq
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
