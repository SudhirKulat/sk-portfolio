"use client";

const GRID_SIZE = 25;
const ROWS = 30;
const COLS = 60;

const ParticlesBackground = () => {
  const squares = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      squares.push(
        <div
          key={`${r}-${c}`}
          className="w-[2px] h-[2px] bg-neutral-400 square-glow"
          style={{
            gridRowStart: r + 1,
            gridColumnStart: c + 1,
          }}
        ></div>
      );
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10" />
      <div
        className="grid absolute inset-0 place-content-center"
        style={{
          gridTemplateRows: `repeat(${ROWS}, ${GRID_SIZE}px)`,
          gridTemplateColumns: `repeat(${COLS}, ${GRID_SIZE}px)`,
        }}
      >
        {squares}
      </div>
    </div>
  );
};

export default ParticlesBackground;
