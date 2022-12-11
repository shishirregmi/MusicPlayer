import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import PlaylistPage from "./Pages/PlaylistPage";
import ArtistPage from "./Pages/ArtistPage";
import "./style.css";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/NoPage";
import LoginPage from "./Pages/LoginPage";
import { AuthProvider } from "./Context/AppContext";
import RegisterPage from "./Pages/RegisterPage";

const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="playlist/:playlistId" element={<PlaylistPage />} />
              <Route path="artist/:artistId" element={<ArtistPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
