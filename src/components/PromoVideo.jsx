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
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-3xl hover:scale-110 transition-transform z-50 p-2"
        aria-label="Close video"
      >
        ✕
      </button>

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