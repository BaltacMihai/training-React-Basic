import React, { useState } from "react";
import FactCard from "../FactCard/FactCard";
import JokeCard from "../JokeCard/JokeCard";

function Main({ isJokeActivate }) {
  const [refresh, setRefresh] = useState(false);

  console.log("Main component - render");

  if (isJokeActivate) {
    return <JokeCard refresh={refresh} setRefresh={setRefresh} />;
  } else {
    return <FactCard refresh={refresh} setRefresh={setRefresh} />;
  }
}

export default Main;
