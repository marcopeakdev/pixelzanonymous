import React from "react";
import "./Button.scss";

const Button = ({ onClick, children }) => {
  return (
    <React.Fragment>
      <div className="z-30 bg-opacity-50 text-left text-white  flex-col hidden items-center xl:items-start justify-center">
        <button
          type="button"
          className="border-[#000] border-4"
          onClick={onClick}
        >
          <div className="border-[#04fd3f] border-4 px-4 py-2 bg-[#024300]">
            <span className="text-[#04fd3f] tw text-5xl xl:text-8xl font-semibold peer-checked:text-secondary-content">
              {children}
            </span>
          </div>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Button;
