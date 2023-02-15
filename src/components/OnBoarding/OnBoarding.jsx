import Button from "../Button/Button";

const OnBoarding = ({ onClickSkip }) => {
  return (
    <div className="OnBoarding bg-black relative flex flex-col xl:flex-row items-center justify-center h-screen">
      <button className="absolute z-20 top-2 left-2" onClick={onClickSkip}>
        <img
          src={require("../../assets/images/skip.png")}
          alt="skip button"
          className="w-24"
        />
      </button>
      <Button>Enter</Button>
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
