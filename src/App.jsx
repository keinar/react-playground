// import img from "./assets/react.svg";
import { AnimalList } from "./cmps/AnimalList";
import { SeasonClock } from "./cmps/SeasonClock";
import { CountDown } from "./cmps/CountDown";
import { WatcherApp } from "./cmps/WatcherApp";
import MouseMonitor from "./cmps/MouseMonitor";

export function App() {
  // const animalInfos = [
  //   { type: "Malayan Tiger", count: 787 },
  //   { type: "Mountain Gorilla", count: 212 },
  //   { type: "Fin Whale", count: 28 },
  // ];
  return (
    <section className="main-app">
      <header className="container">
        <h1>React App</h1>
      </header>

      <main className="container">
        <section>
          {/* <AnimalList animalInfos={animalInfos} /> */}

          {/* <SeasonClock /> */}

          {/* <CountDown
            startFrom={10}
            // toTime={Date.now() + 1000 * 10}
            onDone={() => {
              console.log("Done!");
            }}
          /> */}

          {/* <WatcherApp /> */}

          <MouseMonitor />

        </section>
      </main>
    </section>
  );
}
