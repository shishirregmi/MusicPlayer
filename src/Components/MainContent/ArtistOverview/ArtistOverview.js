import React from "react";
import Albums from "../Albums/Albums";
import ArtistLatestRelease from "./ArtistLatestRelease/ArtistLatestRelease";
import FeaturedArtists from "./FeaturedArtists/FeaturedArtists";

const ArtistOverview = () => {
  return (
    <div className="tab-pane active">
      <div className="overview">
        <ArtistLatestRelease />

        <FeaturedArtists />

        <Albums />
      </div>
    </div>
  );
};

export default ArtistOverview;
