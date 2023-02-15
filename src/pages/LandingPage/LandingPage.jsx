import React, { useState } from "react";
import OnBoarding from "../../components/OnBoarding/OnBoarding";

import Audio from "../../components/Audio/Audio";
import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";
import MintButton from "../../components/MintButton/MintButton";
import Home from "../../components/Home/Home";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team/Team";
import Faq from "../../components/Faq/Faq";
import Partner from "../../components/Partner/Partner";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [isSkipped, setIsSkipped] = useState(false);

  return (
    <React.Fragment>
      {!isSkipped && <OnBoarding onClickButton={() => setIsSkipped(true)} />}
      {isSkipped && (
        <div className="landing-page text-white bg-black tw">
          <Audio />
          <Header />
          <Social />
          <MintButton />
          <Home />
          <Roadmap />
          <Team />
          <Faq />
          <Partner />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
