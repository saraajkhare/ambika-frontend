import videoFile from "../assets/myvid.mp4"; // add your video

const PromoVideo = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        bg-black/75
        flex items-center justify-center
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[80%] max-w-[900px]
          aspect-video
          bg-black
          rounded-[12px]
          overflow-hidden
          transform
          scale-100 opacity-100
          transition-all duration-300 ease-out
        "
      >
        <video
          src={videoFile}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PromoVideo;