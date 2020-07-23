import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

type timeStamp = {
  time: number;
  numberOfCommits: number;
  comment: string;
  userId: number;
};

export default () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  const [timeStamps, setTimeStamps] = useState<timeStamp[]>([]);
  const CLUE_DURATION = 15;
  const ref = React.createRef<ReactPlayer>();

  const addClue = () => {
    setTimeStamps(
      [
        ...timeStamps,
        { time: currentTime, numberOfCommits: 1, comment: "test", userId: 123 },
      ].sort((a, b) => a.time - b.time)
    );
  };

  const revMovie = () => {
    ref.current?.seekTo(Math.max(currentTime - 15, 0));
  };

  const isNearClue = () => {
    return timeStamps.filter(
      (timeStamp) => Math.abs(currentTime - timeStamp.time) < CLUE_DURATION / 2
    ).length;
  };

  return (
    <>
      <div>
        <div className="player-wrapper">
          <ReactPlayer
            ref={ref}
            className="react-player"
            url="https://youtu.be/PHe0bXAIuk0"
            playing={playing}
            controls={true}
            light={false}
            loop={false}
            volume={volume}
            muted={muted}
            progressInterval={100}
            onProgress={() => {
              const time = ref.current?.getCurrentTime();
              if (time !== undefined) setCurrentTime(time);
            }}
          />
        </div>
        time: {currentTime}
        <br />
        {isNearClue() > 0 ? "A Clue is now?" : ""}
        <br />
        <button onClick={addClue}>Clue!</button>
        <button onClick={revMovie}>Rev!</button>
        <br />
        <br />
        <div>
          <ol>
            {timeStamps.map((stamp) => (
              <li>{stamp.time}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};
