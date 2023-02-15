import "./Audio.scss";

const Audio = () => {
  return (
    <>
      <div className="flex justify-center">
        <audio
          autoPlay="autoPlay"
          controls="controls"
          loop="loop"
          src={require("../../assets/song/song.mp3")}
          className="fixed bottom-4 z-50"
        ></audio>
      </div>
    </>
  );
};

export default Audio;
