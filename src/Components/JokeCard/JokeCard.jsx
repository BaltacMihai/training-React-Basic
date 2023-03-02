import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeCard() {
  const [refresh, setRefresh] = useState(false);

  const [joke, setJoke] = useState(null);

  // useEffect is a hook that allows you to perform side effects in your component,
  //such as fetching data from an API, updating the document title, or subscribing to an event.
  //It takes two arguments: a function that defines the side effect and an optional array of dependencies
  //that specify when the effect should be re-run. Here's an example:
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
