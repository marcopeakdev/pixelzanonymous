import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="relative flex flex-col xl:flex-row items-center justify-center xl:justify-around xl:h-screen py-36 xl:py-0"
      >
        <div>
          <img
            src={require("../../assets/images/walk.gif")}
            className="max-h-[40rem]"
            alt="walk"
          />
        </div>
        <img
          src={require("../../assets/images/hp.png")}
          className="absolute z-10 w-auto h-full"
          alt="hp"
        />
      </div>
    </>
  );
};

export default Home;
