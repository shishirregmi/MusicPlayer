import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlaylistsList = () => {
  let [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getPlaylists();
  }, []);

  let getPlaylists = async () => {
    const PlaylistDetails = {
      user_id: "2",
    };
    let response = await fetch(
      "https://localhost:7254/api/Playlist/GetPlaylists",
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
      setPlaylists(data);
    }
  };
  if (playlists.length == 0) return null;
  return (
    <div className="navigation__list">
      <div
        className="navigation__list__header"
        role="button"
        data-toggle="collapse"
        href="#playlists"
        aria-expanded="true"
        aria-controls="playlists"
      >
        Playlists
      </div>

      <div className="collapse in" id="playlists">
        {playlists.map((playlist) => {
          return (
            <Link to={"/playlist/" + playlist.id} className="navigation__list__item" key={playlist.id}>
              <i className="ion-ios-musical-notes"></i>
              <span>{playlist.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistsList;
