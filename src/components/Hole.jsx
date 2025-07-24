function Hole({ index, isActive, onClick }) {
  return (
    <div
      className={`hole ${isActive ? "mole" : ""}`}
      onClick={() => onClick(index)}
    ></div>
  );
}

export default Hole;
