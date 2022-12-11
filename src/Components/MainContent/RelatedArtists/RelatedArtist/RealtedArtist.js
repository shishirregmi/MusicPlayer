import React from "react";

const RealtedArtist = () => {
  return (
    <div className="media-card">
      <div className="media-card__image" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)' }}>
        <i className="ion-ios-play"></i>
      </div>
      <a className="media-card__footer">Hoodie Allen</a>
    </div>
  );
};

export default RealtedArtist;
