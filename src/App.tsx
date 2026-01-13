import { useEffect, useState } from "react";
import "./index.css";

type statok = "varakozas" | "kesz" | "eredmeny";

const App = () => {
  const [state, setState] = useState<statok>("varakozas");
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [timeId, setTimerId] = useState(0);

 

    useEffect(() => {
      const id = setInterval(() => {
        if (id) {
        }
      });
    startGame();
  }, []);

 const ido = Math.floor(Math.random() * 1000) + 500;

  const startGame = () => {
    setState("varakozas");

    const id = setTimeout(() => {
//      setStartTime();
      setState("kesz");
    }, ido);

    setTimerId(id);
  };
  const handleClick = () => {
     {
      clearTimeout(timeId);
      startGame();
    }

    if (state == "kesz") {
   //   const end = ();
  //    setReactionTime(Math.round(end - startTime));
      setState("eredmeny");
    }
  };

  return (
    <div className="container" onClick={handleClick}>
      {state == "varakozas" && (
        <div className="yellow">
          <h1>REFLEXJÁTÉK</h1>
          <p>Várj a zöld képernyőre!</p>
        </div>
      )}

      {state == "kesz" && (
        <div className="green">
          <h1>KATTINTS!</h1>
        </div>
      )}

      {state == "eredmeny" && (
        <div className="blue">
          <h2>A te időd:</h2>
          <h1>{reactionTime} ms</h1>
          <button onClick={startGame}>Új teszt</button>
        </div>
      )}
    </div>
  );
}

export default App;