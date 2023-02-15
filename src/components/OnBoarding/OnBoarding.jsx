import { useState, useEffect } from "react";

import Button from "../Button/Button";

const OnBoarding = ({ onClickButton }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImgLoaded(true);
    }, 32000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="OnBoarding min-[789px] d-flex bg-black relative flex flex-col xl:flex-row items-center justify-center h-screen">
      {!isImgLoaded && (
        <button className="absolute z-20 top-2 left-2" onClick={onClickButton}>
          <img
            src={require("../../assets/images/skip.png")}
            alt="skip button"
            className="w-24"
          />
        </button>
      )}

      {isImgLoaded && <Button onClick={onClickButton}>ENTER</Button>}

      <img
        src={require("../../assets/images/bg.gif")}
        alt="background"
        id="imgBg"
        className="absolute z-10 w-auto h-full min-w-full max-w-screen"
      />
    </div>
  );
};

export default OnBoarding;
