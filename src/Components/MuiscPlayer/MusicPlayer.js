import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import AppContext from "../../Context/AppContext";

const MusicPlayer = () => {
  let { allMusic, populateSongs } = useContext(AppContext);
  let [musicIndex, setMusicIndex] = useState(1);
  let [isMusicPaused, setIsMusicPaused] = useState(true);
  let [currMusic, setCurrMusic] = useState({});
  let [playPauseButton, setPlayPauseButton] = useState("ion-ios-play play");
  let [progressBarValue, setProgressBarValue] = useState(0);
  const songPlayer = useRef(null);

  useEffect(() => {
    populateSongs();
  }, []);

  useEffect(() => {
    loadMusic(musicIndex);
  }, [allMusic]);

  let toggleMusic = () => {
    if (songPlayer.current !== null) {
      if (isMusicPaused) {
        songPlayer.current.play();
        setPlayPauseButton("ion-ios-pause play");
      } else {
        songPlayer.current.pause();
        setPlayPauseButton("ion-ios-play play");
      }
      setIsMusicPaused(!isMusicPaused);
    }
  };
  let toggleNext = () => {
    if (songPlayer.current !== null) {
      console.log(musicIndex);
      console.log(allMusic.length);
      if (musicIndex == allMusic.length) setMusicIndex(1);
      else setMusicIndex(musicIndex + 1);
    }
  };
  let updateProgressBar = () => {
    if (songPlayer.current !== null) {
      setProgressBarValue((songPlayer.current.currentTime / songPlayer.current.duration) * 100);
    }
  };
  let togglePrevious = () => {
    if (songPlayer.current !== null) {
      if (musicIndex == 1) setMusicIndex(allMusic.length);
      else setMusicIndex(musicIndex - 1);
    }
  };
  useEffect(() => {
    loadMusic();
    if (songPlayer.current !== null) {
      if (!isMusicPaused) {
        songPlayer.current.play();
      }
    }
  }, [musicIndex]);
  let loadMusic = (indexNumb) => {
    setCurrMusic(allMusic[indexNumb - 1]);
  };
  if (allMusic.length == 0) return null;
  if (currMusic == {}) return null;
  return (
    <section className="current-track">
      <div className="current-track__actions">
        <a className="ion-ios-skipbackward" onClick={togglePrevious}></a>
        <audio
          src={allMusic[musicIndex - 1].musicurl}
          ref={songPlayer}
          onTimeUpdate={updateProgressBar}
        />
        <a className={playPauseButton} onClick={toggleMusic}></a>
        <a className="ion-ios-skipforward" onClick={toggleNext}></a>
      </div>

      <div className="current-track__progress">
        <div className="current-track__progress__start">0:01</div>

        <div className="current-track__progress__bar">
          <Slider
            size="small"
            value={progressBarValue}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </div>

        <div className="current-track__progress__finish">
          {allMusic[musicIndex - 1].duration / 3600 >= 1
            ? Math.floor(allMusic[musicIndex - 1].duration / 3600) + "0"
            : null}
          {allMusic[musicIndex - 1].duration / 60 < 10 ? "0" : null}
          {Math.floor(allMusic[musicIndex - 1].duration / 60)}:
          {allMusic[musicIndex - 1].duration % 60 < 10 ? "0" : null}
          {Math.floor(allMusic[musicIndex - 1].duration % 60)}
        </div>
      </div>

      <div className="current-track__options">
        <span className="controls">
          <a href="#" className="control control-x">
            <i className="ion-navicon"></i>
          </a>

          <a href="#" className="control control-x">
            <i className="ion-shuffle"></i>
          </a>

          <a href="#" className="control control-x">
            <i className="fa fa-refresh"></i>
          </a>

          <a href="#" className="control volume">
            <i className="ion-volume-high"></i>

            <div id="song-volume">
              <Slider
                size="small"
                defaultValue={100}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </a>
        </span>
      </div>
    </section>
  );
};

export default MusicPlayer;
