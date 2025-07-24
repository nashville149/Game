import { useState, useEffect, useRef } from "react";
import GameBoard from "./components/GameBoard";
import StartButton from "./components/StartButton";
import Score from "./components/Score";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [activeHole, setActiveHole] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const gameDuration = 10000;
  const moleInterval = 800;

  const timerRef = useRef(null);
  const timeoutRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
    showRandomMole();

    timerRef.current = setInterval(showRandomMole, moleInterval);
    timeoutRef.current = setTimeout(() => {
      clearInterval(timerRef.current);
      setIsPlaying(false);
      setActiveHole(null);
      alert(`Game Over! Your score: ${score}`);
    }, gameDuration);
  };

  const showRandomMole = () => {
    const randomIndex = Math.floor(Math.random() * 9);
    setActiveHole(randomIndex);
  };

  const handleWhack = (index) => {
    if (index === activeHole && isPlaying) {
      setScore((prev) => prev + 1);
      setActiveHole(null);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="App">
      <h1>Whack-a-Mole 🐹</h1>
      <Score score={score} />

      <GameBoard
        activeHole={activeHole}
        onWhack={handleWhack}
      />

      <StartButton onClick={startGame} disabled={isPlaying} />
    </div>
  );
  }

export default App;
