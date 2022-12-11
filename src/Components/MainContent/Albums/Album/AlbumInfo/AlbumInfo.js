import React, { useEffect, useState } from "react";
import Moment from "react-moment";
const AlbumInfo = ({ tracks }) => {
  return (
    <div className="album__info">
      <div className="album__info__art">
        <img src={tracks.img} alt={tracks.album} />
      </div>

      <div className="album__info__meta">
        <div className="album__year">
          <Moment date={tracks.releasedate} format="YYYY" />
        </div>

        <div className="album__name">{tracks.album}</div>

        <div className="album__actions">
          <button className="button-light save">Save</button>
          <button className="button-light save">Play</button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
