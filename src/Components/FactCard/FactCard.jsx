import React, { useEffect, useState } from "react";
import axios from "axios";

function FactCard({ refresh, setRefresh }) {
  const [fact, setFact] = useState(null);
  useEffect(() => {
    axios.get("https://www.boredapi.com/api/activity").then((res) => {
      console.log(res.data);
      setFact(res.data.activity);
    });
  }, [refresh]);
  // In the example above, we use the useEffect hook to fetch data from an API when the component mounts.
  //The empty array [] passed as the second argument to useEffect means that the effect
  //will only run once, when the component first mounts.

  if (fact)
    return (
      <div className="card">
        <p>{fact}</p>
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

export default FactCard;
