import React from "react";
import { YouTubeEmbed } from 'react-social-media-embed';


const Videos = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="video-container mt-2 md-2">
     <YouTubeEmbed url="https://www.youtube.com/watch?v=vYwnXYFCmF0" width={325} height={220} />
     </div>
    </div>
    </>
    );
};

export default Videos;