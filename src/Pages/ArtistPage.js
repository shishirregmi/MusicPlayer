import React, { useState } from "react";
import ArtistHeader from "../Components/MainContent/ArtistHeader/ArtistHeader";
import ArtistOverview from "../Components/MainContent/ArtistOverview/ArtistOverview";
import RelatedArtists from "../Components/MainContent/RelatedArtists/RelatedArtists";

const ArtistPage = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  return (
    <div className="content__middle">
      <div className="artist">
        <div className="artist__header">
          <ArtistHeader />
          <div className="artist__navigation">
            <ul className="nav nav-tabs" role="tablist">
              <li
                role="presentation"
                className={selectedTab === "overview" ? "active" : ""}
              >
                <a
                  href="#artist-overview"
                  aria-controls="artist-overview"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    setSelectedTab("overview");
                  }}
                >
                  Overview
                </a>
              </li>

              <li
                role="presentation"
                className={selectedTab === "relatedArtist" ? "active" : ""}
              >
                <a
                  href="#related-artists"
                  aria-controls="related-artists"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    setSelectedTab("relatedArtist");
                  }}
                >
                  Related Artists
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="artist__content">
          <div className="tab-content">
            {selectedTab == "overview" ? <ArtistOverview /> : null}
            {selectedTab == "relatedArtist" ? <RelatedArtists /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
