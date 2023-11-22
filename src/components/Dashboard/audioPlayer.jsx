// AudioPlayer.js
import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";
import "./audio.css"; // Import your CSS file for styling

const AudioPlayer = ({
  audioSrc,
  initialVolume = 0.5,
  startTime = 0,
  duration,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(startTime);
  const [currentVolume, setVolume] = useState(initialVolume);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Update the volume slider when the volume state changes
    if (audioRef.current) {
      audioRef.current.volume = currentVolume;
    }
  }, [currentVolume]);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioSrc}
        volume={currentVolume}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          audioRef.current.currentTime = startTime;
          // Set the volume to trigger the useEffect
        }}
      />
      <input
        type="range"
        min="0"
        max={duration || audioRef.current?.duration || 0}
        step="1"
        value={currentTime}
        onChange={handleSeek}
        className="seek-slider"
      />
      <div className="play-dur-col flex">
        <span className="time-display">{formatTime(currentTime)}</span>
        <button onClick={togglePlayPause} className="ply-bnt">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <span className="time-display">
          {formatTime(duration || audioRef.current?.duration || 0)}
        </span>
      </div>
      <div className="vol-bx-con">
        {currentVolume > 0.7 ? (
          <FaVolumeUp className="volume-icon" />
        ) : currentVolume > 0 ? (
          <FaVolumeDown className="volume-icon" />
        ) : (
          <FaVolumeMute className="volume-icon" />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={currentVolume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

// Helper function to format time in MM:SS format
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

export default AudioPlayer;
