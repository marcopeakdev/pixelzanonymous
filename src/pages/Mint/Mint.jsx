const Mint = () => {
  return (
    <>
      <div>
        <div className="fixed bg-[#ff7575] text-light max-w-fit p-4 px-8 left-10 bottom-8 grid grid-rows-[1fr_1fr] gap-3 justify-items-center rounded-[1rem] z-50">
          <h1 className="text-2xl tracking-widest">Notification</h1>
          <h1 className="text-lg tracking-wide text-light opacity-90">
            Please use browser that supports web3!
          </h1>
        </div>
        <div className="relative flex flex-row items-start md:items-start justify-center h-screen">
          <div className="z-30 uppercase bg-opacity-50 text-left text-white  flex-col flex items-center justify-center h-1/2 pt-24">
            <h2 className=" text-2xl md:text-4xl mt-12">CONNECTING WEB3</h2>
          </div>
          <img
            src="./images/mint_screen.gif"
            className="absolute z-10 w-auto h-full min-w-full max-w-screen object-cover"
            alt="mint screen"
          />
        </div>
      </div>
    </>
  );
};

export default Mint;
