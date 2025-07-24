function App() {
  const holes = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="App">
      <h1>Whack-a-Mole 🐹</h1>
      <h2>Score: 0</h2>
      <div className="grid">
        {holes.map((_, index) => (
          <div key={index} className="hole"></div>
        ))}
      </div>
      <button>Start Game</button>
    </div>
  );
}

export default App;
