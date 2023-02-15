import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <div class="bg-black" id="header-menu">
        <div class="z-50 flex justify-between items-center w-screen h-48">
          <img
            src={require("../../assets/images/anonmask.png")}
            alt="anonmask.png"
            height="100"
            width="100"
            class=" px-4 "
          />
          <div class="flex flex-col">
            <a href="#home" class="text-2xl ">
              home
            </a>
            <a href="#roadmap-heading" class="text-2xl">
              roadmap
            </a>
            <a href="#team-heading" class="text-2xl ">
              team
            </a>
            <a href="#faq-heading" class="text-2xl">
              faq
            </a>
          </div>
          <button>
            <img
              src={require("../../assets/images/menu.svg").default}
              alt="menu-icon"
              height="100"
              width="100"
              class=" px-4"
            />
          </button>
        </div>
      </div>
      <div className="bg-black" id="header">
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
