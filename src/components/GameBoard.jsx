import Hole from "./Hole";
import "./GameBoard.css"; // Optional if you separate styles

function GameBoard({ activeHole, onWhack }) {
  const holes = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="grid">
      {holes.map((index) => (
        <Hole
          key={index}
          index={index}
          isActive={index === activeHole}
          onClick={onWhack}
        />
      ))}
    </div>
  );
}

export default GameBoard;
