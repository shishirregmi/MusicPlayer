import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Album from "./Album/Album";

const Albums = () => {
  let { artistId } = useParams();
  let [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums();
  }, []);

  let getAlbums = async () => {
    const AlbumDetails = {
      artist: artistId,
    };
    let response = await fetch("https://localhost:7254/api/Album/GetAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify(AlbumDetails),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAlbums(data);
    }
  };
  if (albums.length == 0) return null;
  return (
    <div className="overview__albums">
      <div className="overview__albums__head">
        <span className="section-title">Albums</span>
      </div>
      {albums.map((album) => {
        return <Album album={album.id} key={album.id} />;
      })}
    </div>
  );
};

export default Albums;
