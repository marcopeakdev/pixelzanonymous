import Accordion from "./Accordion/Accordion";

import "tw-elements";
import "./Faq.scss";

const qa = [
  {
    question:
      "How much does each Genesis Pixelz Anonymous cost and what is the total supply?",
    answer:
      "Each Genesis Pixelz Anonymous will be (TBA) to mint with a VERY limited supply of 555.",
  },
  {
    question: "Will there be a public mint and how many can be minted?",
    answer:
      "Because of the very limited supply it will be a complete WL allocated mint, any WL mint unclaimed willgo to public sale.",
  },
  {
    question:
      "How to get Anonlist/OG for the upcoming Genesis Pixelz Anonymous mint?",
    answer:
      'Here at AnonCorp we have decided the best process is not by how " early " you are or what level you can grind to, but instead handpicking each OG & anonlisted member 1 by 1 in accordance to them fitting the anonymous family vibe.',
  },
  {
    question: "When will the DAO be created and who will run it?",
    answer:
      "The PixelzAnonDAO will be created approximately 30 days after launch and the Genesis holders will vote whom from the community should be in charge of the ideas brought forth for the community to vote on. ( Each Genesis held counts as 1 vote towards the PixelzAnonDAO )",
  },
  {
    question: "What is the Token Utility? ( $ANON )",
    answer:
      "Used to vote in the PixelzAnonDAO , purchases inside of the Marketplace , Unlockable Educational classNamees , Staking to generate one $ANON token daily as well as Nesting for increased token yield. ( 1 $ANON = 1 $ANON ) and more TBA !",
  },
  {
    question: "Will AnonCorp be holding back any NFT's for the company?",
    answer:
      "Yes, there will be a total of 25 of the 555 Genesis Pixelz Anonymous minted for the team vault for the team and promotional purposes.",
  },
  {
    question: "What's an NFT?",
    answer:
      "NFT stands for “non-fungible token” it's a unique, one-of-a-kind digital item that users can buy, own, and trade. Some NFTs' main functions are to be digital art and to look cool; some offer additional utility, like exclusive access to websites or participation in an event. Think of NFTs as rare pieces of art that can also act as a \"member's card\".",
  },
  {
    question:
      "How much does each Access Card cost and what is the total supply ?",
    answer:
      "Total supply of the Access Cards will be 111 and mint price will be .06 ETH",
  },
];

const Faq = () => {
  return (
    <>
      <div id="faq-heading">
        <img src="./images/faq.png" alt="faq-logo" />
      </div>
      <div className="lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px] mx-auto lg:mt-16 py-12 px-4 lg:px-0 faq">
        {qa.map((item, id) => (
          <Accordion
            question={item.question}
            answer={item.answer}
            id={id}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default Faq;
