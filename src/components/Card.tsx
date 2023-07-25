function Card({ name, url, id }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-110">
      <img src={url} alt={name} className="max-w-xxs rounded-md" />
      <h2 className="mt-4">{name}</h2>
    </div>
  );
}

export default Card;
