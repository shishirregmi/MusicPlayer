import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";
import MusicPlayer from "../Components/MuiscPlayer/MusicPlayer";
const Layout = () => {
  return (
    <>
      <Header />
      <section className="content">
        <LeftSidebar />
        <Outlet />
      </section>
      <MusicPlayer />
    </>
  );
};

export default Layout;
