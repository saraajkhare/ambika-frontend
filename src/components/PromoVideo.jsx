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
        <iframe
          src="https://www.youtube.com/embed/JvmNsL_vxbk?autoplay=1&rel=0"
          title="Teaser Video of Ambika Ananda"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export default PromoVideo;
