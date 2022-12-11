import React from "react";
import ArtistPopularReleasesTrack from "./ArtistPopularReleasesTrack/ArtistPopularReleasesTrack";

const ArtistPopularReleases = () => {
  return (
    <>
      <div className="section-title">Popular</div>

      <div className="tracks">
        <ArtistPopularReleasesTrack />
        <ArtistPopularReleasesTrack />
        <ArtistPopularReleasesTrack />
        <ArtistPopularReleasesTrack />
        <ArtistPopularReleasesTrack />
      </div>
    </>
  );
};

export default ArtistPopularReleases;
