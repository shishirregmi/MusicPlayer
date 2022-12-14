import React from "react";

const NowPlaying = () => {
  return (
    <section className="playing">
      <div className="playing__art">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg"
          alt="Album Art"
        />
      </div>

      <div className="playing__song">
        <a className="playing__song__name">Some Type of Love</a>

        <a className="playing__song__artist">Charlie Puth</a>
      </div>

      <div className="playing__add">
        <i className="ion-checkmark"></i>
      </div>
    </section>
  );
};

export default NowPlaying;
