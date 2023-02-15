import React from "react";

const Roadmap = () => {
  return (
    <>
      <div id="roadmap-heading">
        <img
          src={require("../../assets/images/roadmap.png")}
          alt="roadmap"
        />
      </div>

      <div
        id="roadmap-body"
        className="relative flex flex-col xl:flex-row items-center justify-center xl:justify-around py-12"
      >
        <div className=" grid px-4 lg:px-0 lg:grid-cols-2 gap-y-4 lg:gap-x-36 xl:gap-x-32 lg:w-[1000px] xl:w-[1280px] 2xl:w-[1350px] 2xl:gap-x-28">
          <div className="border-[#04fd3f] border-4">
            <div className="border-[#000] border-2">
              <div className="border-[#04fd3f] border-4 px-4 py-2">
                <div className="">
                  <div className="tw text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                    Stage 1:
                  </div>
                  <div className="text-primary-content peer-checked:text-secondary-content">
                    <p className="text-md">
                      All about growing the presence of the Pixelz Anonymous
                      family through unpaid marketing efforts, developing
                      partnerships with influential projects in the space, and
                      brand management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex"></div>
          <div className="hidden lg:flex"></div>
          <div className="border-[#04fd3f] border-4 ">
            <div className="border-[#000] border-2">
              <div className="border-[#04fd3f] border-4 px-4 py-2">
                <div className="">
                  <div className=" text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                    Stage 2:
                  </div>
                  <div className="text-primary-content peer-checked:text-secondary-content">
                    <p className="text-md">
                      Finalize plans for utility, all variables locked in for
                      production. Complete financial forecasts, mint price, and
                      set the royalties. Listen to community feedback, and pivot
                      as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[#04fd3f] border-4 ">
            <div className="border-[#000] border-2">
              <div className="border-[#04fd3f] border-4 px-4 py-2">
                <div className="">
                  <div className=" text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                    Stage 3:
                  </div>
                  <div className="text-primary-content peer-checked:text-secondary-content">
                    <p className="text-md">
                      Tighten security. Finalize website, and smart contract.
                      Have our smart contract audited by an external source.
                      Continue working for mint, and sell out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex"></div>
          <div className="hidden lg:flex"></div>
          <div className="border-[#04fd3f] border-4 ">
            <div className="border-[#000] border-2">
              <div className="border-[#04fd3f] border-4 px-4 py-2">
                <div className="">
                  <div className=" text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                    Stage 4:
                  </div>
                  <div className="text-primary-content peer-checked:text-secondary-content">
                    <p className="text-md">
                      After getting mint funds secured start holders only ga.
                      Create staking, token [off chain], and marketplace approx
                      1 month after mint out. Release tax tool/revenue tracker
                      approx 2 months after mint out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[#04fd3f] border-4">
            <div className="border-[#000] border-2">
              <div className="border-[#04fd3f] border-4 px-4 py-2">
                <div className="">
                  <div className=" text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                    Stage 5:
                  </div>
                  <div className="text-primary-content peer-checked:text-secondary-content">
                    <p className="text-md">
                      Full formation of Pixelz DAO, a DAO driven gen 2. Founders
                      will support full scope of gen 2.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("../../assets/images/boxes.png")}
          className="hidden lg:flex lg:absolute z-10 w-auto h-full"
          alt="boxes"
        />
      </div>
    </>
  );
};

export default Roadmap;
