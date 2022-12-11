import React, { useEffect, useState } from "react";
import AlbumInfo from "./AlbumInfo/AlbumInfo";
import AlbumTracks from "./AlbumTracks/AlbumTracks";

const Album = ({album}) => {
  let [tracks, setTracks] = useState([]);
  useEffect(() => {
    getTracks();
  }, []);

  let getTracks = async () => {
    const MusicDetails = {
      id: album,
    };
    let response = await fetch("https://localhost:7254/api/Music/GetAllMusic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify(MusicDetails),
    });
    let data = await response.json();
    if (response.status === 200) {
      setTracks(data);
    }
  };
  if (tracks.length == 0) return null;
  return (
    <div className="album">
      <AlbumInfo tracks={tracks[0]} />
      <div className="album__tracks">
        <AlbumTracks tracks={tracks} />
      </div>
    </div>
  );
};

export default Album;
