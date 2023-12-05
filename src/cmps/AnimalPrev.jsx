import React, { useState } from "react";

export default function AnimalPrev({ animal }) {
  const [count, setCount] = useState(animal.count);

  const updateCount = () => {
    let question = prompt("update the count:");
    if (question !== null && !isNaN(question)) {
      setCount(+question);
    }
  };

  return (
    <tr>
      <td title={animal.type}>{animal.type}</td>
      <td title={count} onClick={updateCount}>
        {count}
      </td>
      <td>
        <a
          href={`https://www.google.com/search?q=${animal.type}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Search
        </a>
      </td>
    </tr>
  );
}
