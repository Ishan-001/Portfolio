import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  const getYouTubeID = (url) => {
    if (!url) return "";
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
    return match ? match[1] : "";
  };

  const videoId = getYouTubeID(talkDetails.event_url);

  return (
    <div className="container">
      <div className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}>
        <div className="diagonal-fill"></div>

        <div className="youtube-embed-wrapper">
          {videoId ? (
            <iframe
              width="100%"
              height="240"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={talkDetails.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p>Invalid YouTube URL</p>
          )}
        </div>
      </div>
    </div>
  );
}