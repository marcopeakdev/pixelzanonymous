import React from "react";

const Team = () => {
  return (
    <>
      <div id="team-heading">
        <img src={require("../../assets/images/team.png")} alt="team" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-4 py-36 ">
        <div className="flex flex-col lg:flex-row gap-x-12 lg:gap-0 ">
          <div className="w-full my-2 max-w-[400px]">
            <div className="border-[#04fd3f] border-4">
              <div className="border-[#000] border-2">
                <div className="border-[#04fd3f] border-4 px-4 py-4">
                  <div className="flex justify-center">
                    <img
                      src={require("../../assets/images/pacasso.jpg")}
                      className="max-h-48"
                      alt="pacasso"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 my-1">
              <div className="">
                <div className="text-center text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                  PacassoNFT
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 ">
              <div className="">
                <div className="text-primary-content peer-checked:text-secondary-content">
                  <p className="text-md text-center">
                    Hey guys! My name is Ruben, most people know me as
                    PacassoNFT ! Let me tell you a little bit about myself. I am
                    27 years old, I live in the East side, but have family all
                    around mainly in Puerto Rico. Throughout my whole life I've
                    loved two things... helping people and gaming.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={require("../../assets/images/teamboxes.png")}
            className="hidden lg:flex z-10 max-h-[800px] "
            alt="teamboxes"
          />
          <div className="w-full my-2 max-w-[400px]">
            <div className="border-[#04fd3f] border-4">
              <div className="border-[#000] border-2">
                <div className="border-[#04fd3f] border-4 px-4 py-4">
                  <div className="flex justify-center">
                    <img
                      src={require("../../assets/images/mkt.jpg")}
                      className="max-h-48"
                      alt="mkt"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 my-1">
              <div className="">
                <div className="text-center text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                  MKT
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 ">
              <div className="">
                <div className="text-primary-content peer-checked:text-secondary-content">
                  <p className="text-md text-center">
                    Raymond is a veteran of the United States Marine Corps,
                    security is always on his mind. He dedicates most of his
                    time to the ever growing Web 3/NFT field. He has worked on
                    multiple projects, as a security/admin on discords. He loves
                    to network, and hear new ideas/innovations!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-12 items-center">
          <div className="w-full max-w-[400px]">
            <div className="border-[#04fd3f] border-4">
              <div className="border-[#000] border-2">
                <div className="border-[#04fd3f] border-4 px-4 py-4">
                  <div className="flex justify-center">
                    <img
                      src={require("../../assets/images/josway.png")}
                      className="max-h-48"
                      alt="josway"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 my-1">
              <div className="">
                <div className="text-center text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                  Josway
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 ">
              <div className="">
                <div className="text-primary-content peer-checked:text-secondary-content">
                  <p className="text-md text-center">
                    Hobbies are usually building keyboards or playing videogames
                    and soccer. Currently working to create a business in
                    keyboard builds and custom PCs. Started in crypto back in
                    2019 but didn't take it serious whatso ever fast forward to
                    a couple months back just coming into NFTs and joining this
                    team and another just leaning and growing within it.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[400px]">
            <div className="border-[#04fd3f] border-4">
              <div className="border-[#000] border-2">
                <div className="border-[#04fd3f] border-4 px-4 py-4">
                  <div className="flex justify-center">
                    <img
                      src={require("../../assets/images/gt.png")}
                      className="max-h-48"
                      alt="gt"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 my-1">
              <div className="">
                <div className="text-center text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                  Meaghan
                </div>
              </div>
            </div>
            <div className="border-[#04fd3f] border-4 px-4 py-2 ">
              <div className="">
                <div className="text-primary-content peer-checked:text-secondary-content">
                  <p className="text-md text-center">
                    GoldenTrees is a digital artist focusing on pixel art for
                    games and NFTs with a background in fine arts and
                    illustration. She has worked on a number of successful
                    projects as well as been self employed in various artistic
                    fields. She uses her skills to combine the digital and art
                    spaces for an accessible, fun experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
