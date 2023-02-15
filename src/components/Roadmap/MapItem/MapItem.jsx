const MapItem = ({ id, text }) => {
  return (
    <>
      {text ? (
        <div className="border-[#04fd3f] border-4">
          <div className="border-[#000] border-2">
            <div className="border-[#04fd3f] border-4 px-4 py-2">
              <div className="">
                <div className="tw text-2xl font-semibold text-primary-content peer-checked:text-secondary-content">
                  Stage {id}:
                </div>
                <div className="text-primary-content peer-checked:text-secondary-content">
                  <p className="text-md">{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex"></div>
      )}
    </>
  );
};

export default MapItem;
