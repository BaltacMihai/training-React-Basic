import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeCard() {
  const [refresh, setRefresh] = useState(false);

  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/Any").then((res) => {
      if (res.data.type == "twopart")
        setJoke(res.data.setup + " // " + res.data.delivery);
      else setJoke(res.data.joke);
    });
  }, [refresh]);

  if (joke)
    return (
      <div className="card">
        <p>{joke}</p>
        <button
          onClick={() => {
            setRefresh(!refresh);
          }}
        >
          Reroll
        </button>
      </div>
    );
  else return <div>Incarcare</div>;
}

export default JokeCard;
