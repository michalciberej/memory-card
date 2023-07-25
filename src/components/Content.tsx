import { useState, useEffect } from "react";
import Card from "./Card";
import Score from "./Score";

function Content() {
  const [fetchedData, setFetchedData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const json = await data.json();
      console.log(json.meals[0]);
      const result = [];
      for (let i = 0; i < 10; i++) {
        result.push(json.meals[i]);
      }
      setFetchedData(result);
      console.log(fetchedData);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div
        id="contentContainer"
        className="flex justify-center items-center mt-6"
      >
        <Score score={score} highScore={highScore} />
      </div>
      <div
        id="cardsContainer"
        className="mt-6 gap-6 flex justify-center items-center flex-wrap"
      >
        {fetchedData.map((obj) => (
          <Card
            name={obj.strMeal}
            url={obj.strMealThumb}
            id={obj.idMeal}
            key={obj.idMeal}
          />
        ))}
      </div>
    </>
  );
}

export default Content;
