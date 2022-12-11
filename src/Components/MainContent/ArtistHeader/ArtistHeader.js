import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistHeader = () => {
  let { artistId } = useParams();
  let [artist, setArtist] = useState([]);
  useEffect(() => {
    getArtist();
  }, []);

  let getArtist = async () => {
    const ArtistDetails = {
      id: artistId,
    };
    let response = await fetch("https://localhost:7254/api/User/GetOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify(ArtistDetails),
    });
    let data = await response.json();
    if (response.status === 200) {
      setArtist(data);
    }
  };
  if (artist.length == 0) return null;
  return (
    <>
      <div className="artist__info">
        <div className="profile__img">
          <img src={artist[0].profile_pic} alt={artist[0].fullname} />
        </div>

        <div className="artist__info__meta">
          <div className="artist__info__type">Artist</div>

          <div className="artist__info__name">{artist[0].fullname}</div>

          <div className="artist__info__actions">
            <button className="button-dark">
              <i className="ion-ios-play"></i>
              Play
            </button>

            <button className="button-light">Follow</button>
          </div>
        </div>
      </div>

      <div className="artist__listeners">
        <div className="artist__listeners__count">15,662,810</div>

        <div className="artist__listeners__label">Monthly Listeners</div>
      </div>
    </>
  );
};

export default ArtistHeader;
