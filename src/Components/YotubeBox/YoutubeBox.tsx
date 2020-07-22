import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import getCurrenTime from "react-player";
import { useState } from "react";

export default () => {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(true);

  const ref = React.createRef<ReactPlayer>();

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
            muted={false}
            progressInterval={100}            
            onProgress={() => {
              const time = ref.current?.getCurrentTime();
              if (time !== undefined) setTime(time)
            }}
          />
        </div>
        time: {time} s
      </div>
    </>
  );
};
