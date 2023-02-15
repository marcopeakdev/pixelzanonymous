const Button = ({ onClick, children }) => {
  return (
    <>
      <div className="z-30 bg-opacity-50 text-left text-white  flex-col flex items-center xl:items-start justify-center">
        <button
          onClick={onClick}
          className="border-[#04fd3f] border-8 max-w-lg hover:scale-105 duration-500 "
        >
          <div className="border-[#000] border-4">
            <div className="border-[#04fd3f] border-4 px-4 py-2 bg-[#024300]">
              <div className="">
                <div className="text-[#04fd3f] tw text-5xl xl:text-8xl font-semibold peer-checked:text-secondary-content">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
