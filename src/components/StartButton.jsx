function StartButton({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {disabled ? "Game in Progress..." : "Start Game"}
    </button>
  );
}

export default StartButton;
