import { useState } from "react";

function getYoutubeEmbed(url) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/  
  );
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : "";
}

function getYoutubeThumbnail(url) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/  
  );
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "";
}

export default function VideoCard({ videoUrl }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
      {!play ? (
        <>
          <img
            src={getYoutubeThumbnail(videoUrl)}
            alt="Project Video"
            className="w-full h-full object-cover"
          />

          {/* Play Overlay */}
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-black text-xl">
              ▶
            </div>
          </button>
        </>
      ) : (
        <iframe
          src={getYoutubeEmbed(videoUrl)}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Project Video"
        />
      )}
    </div>
  );
}
