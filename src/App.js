import { useState } from "react";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isJokeActive, setIsJokeActive] = useState(true);

  return (
    <>
      <Navbar action={setIsJokeActive} first={isJokeActive} />
      <Main isJokeActivate={isJokeActive} />
    </>
  );
}

export default App;
//https://uselessfacts.jsph.pl/api/v2/facts/random
//https://v2.jokeapi.dev/joke/Any
