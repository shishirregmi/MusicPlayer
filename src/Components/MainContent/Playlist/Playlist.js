import React from 'react'
import PlaylistInfo from './PlaylistInfo/PlaylistInfo';
import PlaylistTracks from './PlaylistTracks/PlaylistTracks';

const Playlist = () => {
  return (
    <div className="album">
      <PlaylistInfo />
      <div className="album__tracks">
        <PlaylistTracks />
      </div>
    </div>
  );
};


export default Playlist