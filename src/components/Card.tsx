function Card({
  name,
  url,
  id,
  setScore,
  score,
  highScore,
  setHighScore,
  selected,
  setSelected,
}) {
  const handleClick = (): void => {
    setSelected(selected.concat(id));
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == id) {
        setScore((score = 0));
        setSelected([]);
        break;
      }
    }
    setScore((score += 1));
    if (score > highScore) setHighScore(score);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl cursor-pointer shadow-md p-4 flex flex-col items-center hover:scale-110"
    >
      <img src={url} alt={name} className="max-w-xxs rounded-md" />
      <h2 className="mt-4">{name}</h2>
    </div>
  );
}

export default Card;
