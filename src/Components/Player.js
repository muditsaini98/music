import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControl from "./PlayerControl";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSong(() => {
        let temp = props.currentSong;
        temp++;

        if (temp > props.imge.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSong(() => {
        let temp = props.currentSong;
        temp--;

        if (temp < 0) {
          temp = props.imge.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="player">
      <audio src={props.imge[props.currentSong].src} ref={audioEl}></audio>
      <h4 id="text1">Playing Now</h4>
      <PlayerDetails imge={props.imge[props.currentSong]} />
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p className="nextsong">
        <strong>Next Song :</strong> {props.imge[props.nextSong].song} by{" "}
        {props.imge[props.nextSong].artist}
      </p>
    </div>
  );
};

export default Player;
