import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTrack from "../../Albums/Album/AlbumTracks/AlbumTrack/AlbumTrack";
import AlbumTrackHeading from "../../Albums/Album/AlbumTracks/AlbumTrackHeading/AlbumTrackHeading";

const PlaylistTracks = () => {
  let { playlistId } = useParams();
  let [tracks, setTracks] = useState([]);
  useEffect(() => {
    getTracks();
  }, []);

  let getTracks = async () => {
    const PlaylistDetails = {
      id: playlistId,
      user_id: "2",
    };
    let response = await fetch(
      "https://localhost:7254/api/Playlist/GetPlaylistMuisc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify(PlaylistDetails),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setTracks(data);
    }
  };
  if (tracks.length == 0) return null;
  return (
    <div className="tracks">
      <AlbumTrackHeading />
      {tracks.map((track) => {
        return <AlbumTrack track={track} key={track.id} />;
      })}
    </div>
  );
};

export default PlaylistTracks;
