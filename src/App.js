import { useState } from "react";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  //useState is a hook that allows you to add state to a functional component.
  //It takes an initial value as an argument and returns an array containing two items:
  //the current state value and a function to update the state value.
  //You can then use the state value and the state update function to manage and
  //update the state of your component. Here's an example:

  const [isJokeActive, setIsJokeActive] = useState(true);

  // The <> and </> are shorthand syntax for React fragments.

  //In React, a fragment is a way to group a list of children elements without adding an extra node to the DOM.
  //It's useful when you want to return multiple elements from a component, but you don't want to wrap them in a parent element.

  return (
    <>
      <Navbar action={setIsJokeActive} first={isJokeActive} />
      <Main isJokeActivate={isJokeActive} />
    </>
  );
}

export default App;
