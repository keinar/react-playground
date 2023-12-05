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
        {
          animalsInfos.map((animal) => (
            <AnimalPrev animal={animal} key={animal.type} />
          ))
        }
      </table>
    </>


    //   <h1>Rare Animals</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Animal</th>
    //         <th>Count</th>
    //         <th>Search Link</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {
    //         animalInfos.map((animal) => (
    //           <AnimalPrev animal={animal} key={animal.type} />
    //         ))
    //       }
    //     </tbody>
    //   </table>



  );
}
