function Score({ score, highScore }) {
  return (
    <div className="max-w-xxs bg-white shadow-md rounded-xl flex justify-center gap-4 px-4 py-1 ">
      <span>{score}</span>
      <span>{highScore}</span>
    </div>
  );
}

export default Score;
