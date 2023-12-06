import AnimalPrev from "./AnimalPrev";

export function AnimalList({ animalsInfos }) {
  return (
    <>
      <h1 style={{ color: "white" }}>Rare animals</h1>
      <table style={{ backgroundColor: "white", color: "black" }}>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Count</th>
            <th>Search Link</th>
          </tr>
        </thead>
        <tbody>
          {animalsInfos.map((animal, idx) => (
            <AnimalPrev animal={animal} key={idx} />
          ))}
        </tbody>
      </table>
    </>
  );
}
