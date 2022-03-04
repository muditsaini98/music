import "./App.css";
import { useState, useEffect } from "react";
import Player from "./Components/Player";
import baby from './musics/Baby.mp3';
import friends from './musics/Friends.mp3';

function App() {
  const [imge] = useState([
    {
      song: "Friends",
      artist: "Anne Marie and Marshmello",
      imag: "https://i.ytimg.com/vi/CY8E6N5Nzec/maxresdefault.jpg",
      src: friends,
    },
    {
      song: "Baby",
      artist: "Justin Biber ft. Ludacris",
      imag: "https://i.pinimg.com/originals/c0/fa/62/c0fa6262ebc7c716568932091f18df6c.jpg",
      src: baby,
    },
  ]);

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);

  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > imge.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [currentSong]);

  return (
    <div className="App">
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        nextSong={nextSong}
        imge={imge}
      />
    </div>
  );
}

export default App;
