import AnimalPrev from "./AnimalPrev";

export function AnimalList({ animalInfos }) {
  return (
    <section className="animal-list">
      <h1>Rare Animals</h1>
      <table>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Count</th>
            <th>Search Link</th>
          </tr>
        </thead>

        <tbody>
          {animalInfos.map((animal) => (
            <AnimalPrev animal={animal} key={animal.type} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
