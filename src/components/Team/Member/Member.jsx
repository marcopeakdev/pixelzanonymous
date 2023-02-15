const Member = ({ memberName, text, imgSrc }) => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="border-[#04fd3f] border-4">
        <div className="border-[#000] border-2">
          <div className="border-[#04fd3f] border-4 px-4 py-4">
            <div className="flex justify-center">
              <img
                src={`./images/${imgSrc}`}
                className="max-h-48"
                alt={memberName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#04fd3f] border-4 px-4 py-2 my-1">
        <div className="">
          <div className="text-center text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
            {memberName}
          </div>
        </div>
      </div>
      <div className="border-[#04fd3f] border-4 px-4 py-2 ">
        <div className="">
          <div className="text-primary-content peer-checked:text-secondary-content">
            <p className="text-md text-center">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
