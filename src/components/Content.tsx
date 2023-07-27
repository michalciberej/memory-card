import { useState, useEffect } from "react";
import Card from "./Card";
import Score from "./Score";

function Content() {
  const [fetchedData, setFetchedData] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const json = await data.json();
      const result = [];
      for (let i = 0; i < 10; i++) {
        result.push(json.meals[i]);
      }
      setFetchedData(result);
    };

    fetchData().catch(console.error);
  }, []);

  const shuffleCards = () => {
    const array = fetchedData.map((obj) => (
      <Card
        key={obj.idMeal}
        name={obj.strMeal}
        url={obj.strMealThumb}
        id={obj.idMeal}
        setScore={setScore}
        score={score}
        highScore={highScore}
        setHighScore={setHighScore}
        selected={selected}
        setSelected={setSelected}
      />
    ));
    let i: number;
    let p = null;
    let l: number = array.length;

    while (l) {
      i = Math.floor(Math.random() * l--);
      p = array[l];
      array[l] = array[i];
      array[i] = p;
    }
    return array;
  };

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
        {shuffleCards()}
      </div>
    </>
  );
}

export default Content;
