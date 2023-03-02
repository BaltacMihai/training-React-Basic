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
