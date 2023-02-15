import React from "react";

import "tw-elements";
import "./Faq.scss";

const Faq = () => {
  return (
    <>
      <div>
        <img src={require("../../assets/images/faq.png")} alt="faq-logo" />
      </div>
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px] mx-auto lg:mt-16 py-12 px-4 lg:px-0">
        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion1" id="accordionExample1">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="heading1">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          How much does each Genesis Pixelz Anonymous cost and
                          what is the total supply?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Each Genesis Pixelz Anonymous will be (TBA) to mint
                          with a VERY limited supply of 555.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion2" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="heading2">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          Will there be a public mint and how many can be
                          minted?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Because of the very limited supply it will be a
                          complete WL allocated mint, any WL mint unclaimed will
                          go to public sale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion3" id="accordionExample3">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingT3">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          How to get Anonlist/OG for the upcoming Genesis Pixelz
                          Anonymous mint?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Here at AnonCorp we have decided the best process is
                          not by how " early " you are or what level you can
                          grind to, but instead handpicking each OG & anonlisted
                          member 1 by 1 in accordance to them fitting the
                          anonymous family vibe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion4" id="accordionExample4">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          When will the DAO be created and who will run it?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          The PixelzAnonDAO will be created approximately 30
                          days after launch and the Genesis holders will vote
                          whom from the community should be in charge of the
                          ideas brought forth for the community to vote on. (
                          Each Genesis held counts as 1 vote towards the
                          PixelzAnonDAO )
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion5" id="accordionExample5">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          What is the Token Utility? ( $ANON )
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Used to vote in the PixelzAnonDAO , purchases inside
                          of the Marketplace , Unlockable Educational classNamees ,
                          Staking to generate one $ANON token daily as well as
                          Nesting for increased token yield. ( 1 $ANON = 1 $ANON
                          ) and more TBA !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion6" id="accordionExample6">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          Will AnonCorp be holding back any NFT's for the
                          company?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Yes, there will be a total of 25 of the 555 Genesis
                          Pixelz Anonymous minted for the team vault for the
                          team and promotional purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion7" id="accordionExample7">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          What's an NFT?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          NFT stands for “non-fungible token” it's a unique,
                          one-of-a-kind digital item that users can buy, own,
                          and trade. Some NFTs' main functions are to be digital
                          art and to look cool; some offer additional utility,
                          like exclusive access to websites or participation in
                          an event. Think of NFTs as rare pieces of art that can
                          also act as a "member's card".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#04fd3f] border-4 my-6">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div id="faq-heading">
                <div className="accordion8" id="accordionExample8">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="accordion-button collapsed relative flex items-center w-full py-4 px-6 bg-black border-0 rounded-none transition focus:outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <p className="collapse-title text-left text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                          How much does each Access Card cost and what is the
                          total supply ?
                        </p>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample8"
                    >
                      <div className="accordion-body collapse-content text-primary-content peer-checked:text-secondary-content ">
                        <p className="text-md mb-4 ml-5">
                          Total supply of the Access Cards will be 111 and mint
                          price will be .06 ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
