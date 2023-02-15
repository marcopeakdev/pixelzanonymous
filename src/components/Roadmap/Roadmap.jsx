import MapItem from "./MapItem/MapItem";

const datas = [
  {
    id: "1",
    text: "All about growing the presence of the Pixelz Anonymous family through unpaid marketing efforts, developing partnerships with influential projects in the space, and brand management.",
  },
  {
    text: ""
  },
  {
    text: ""
  },
  {
    id: "2",
    text: "Finalize plans for utility, all variables locked in for production. Complete financial forecasts, mint price, and set the royalties. Listen to community feedback, and pivot as needed.",
  },
  {
    id: "3",
    text: "Tighten security. Finalize website, and smart contract. Have our smart contract audited by an external source. Continue working for mint, and sell out.",
  },
  {
    text: ""
  },
  {
    text: ""
  },
  {
    id: 4,
    text: "After getting mint funds secured start holders only ga. Create staking, token [off chain], and marketplace approx 1 month after mint out. Release tax tool/revenue tracker approx 2 months after mint out.",
  },
  {
    id: 5,
    text: "Full formation of Pixelz DAO, a DAO driven gen 2. Founders will support full scope of gen 2.",
  },
];

const Roadmap = () => {
  return (
    <>
      <div id="roadmap-heading">
        <img src={require("../../assets/images/roadmap.png")} alt="roadmap" />
      </div>

      <div
        id="roadmap-body"
        className="relative flex flex-col xl:flex-row items-center justify-center xl:justify-around py-12"
      >
        <div className=" grid px-4 lg:px-0 lg:grid-cols-2 gap-y-4 lg:gap-x-36 xl:gap-x-32 lg:w-[1000px] xl:w-[1280px] 2xl:w-[1350px] 2xl:gap-x-28">
          {datas.map((item, id) => (
            <MapItem text={item.text} id={item.id} key={id} />
          ))}
        </div>
        <img
          src={require("../../assets/images/boxes.png")}
          className="hidden lg:flex lg:absolute z-10 w-auto h-full"
          alt="boxes"
        />
      </div>
    </>
  );
};

export default Roadmap;
