import React from "react";
import Playlist from "../Components/MainContent/Playlist/Playlist";

const PlaylistPage = () => {
  return (
    <div className="content__middle">
      <div className="artist">
        <div className="artist__content">
          <div className="tab-content">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
