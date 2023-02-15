import { Link } from "react-router-dom";

const MintButton = () => {
  return (
    <>
      <div className="flex justify-center py-24">
        <Link to="/mint">
          <img
            src={require("../../assets/images/mint.png")}
            className="w-48 cursor-pointer"
            alt="mint"
          />
        </Link>
      </div>
    </>
  );
};

export default MintButton;
