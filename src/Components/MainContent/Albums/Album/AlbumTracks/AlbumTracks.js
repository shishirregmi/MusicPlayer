import React, { useEffect, useState } from "react";
import AlbumTrack from "./AlbumTrack/AlbumTrack";
import AlbumTrackHeading from "./AlbumTrackHeading/AlbumTrackHeading";

const AlbumTracks = ({tracks}) => {
  return (
    <div className="tracks">
      <AlbumTrackHeading />
      {
      tracks.map((track) => {
        return <AlbumTrack track={track} key={track.id}/>;
      })}
    </div>
  );
};

export default AlbumTracks;
