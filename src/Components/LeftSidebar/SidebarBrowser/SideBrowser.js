import React from "react";
import PersonalisedMenu from "./PersonalisedMenu/PersonalisedMenu";
import PlaylistsList from "./PlaylistsList/PlaylistsList";
import SideBrowserMain from "./SideBrowserMain/SideBrowserMain";

const SideBrowser = () => {
  return (
    <section className="navigation">
      <SideBrowserMain />

      <PersonalisedMenu />

      <PlaylistsList />
    </section>
  );
};

export default SideBrowser;
