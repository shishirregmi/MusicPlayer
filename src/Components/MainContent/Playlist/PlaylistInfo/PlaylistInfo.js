import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

const PlaylistInfo = () => {
  let { playlistId } = useParams();
  let [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    getPlaylist();
  }, []);

  let getPlaylist = async () => {
    const PlaylistDetails = {
      id: playlistId,
      user_id: "2",
    };
    let response = await fetch(
      "https://localhost:7254/api/Playlist/GetPlaylistDetail",
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
      setPlaylist(data);
    }
  };
  if (playlist.length == 0) return null;
  return (
    <div className="album__info">
      <div className="album__info__art">
        <img src={playlist[0].img} alt={playlist[0].name} />
      </div>

      <div className="album__info__meta">
        <div className="album__year">
          <Moment date={playlist[0].releasedate} format="YYYY" />
        </div>

        <div className="album__name">{playlist[0].name}</div>

        <div className="album__actions">
          <button className="button-light save">Save</button>
          <button className="button-light save">Play</button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
