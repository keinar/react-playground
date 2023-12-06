import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// import img from "./assets/react.svg";
import { AnimalList } from "./cmps/AnimalList/AnimalList";
import { SeasonClock } from "./cmps/SeasonClock/SeasonClock";
import { CountDown } from "./cmps/CountDown/CountDown";
import { WatcherApp } from "./cmps/WatcherApp/WatcherApp";
import MouseMonitor from "./cmps/MouseMonitor/MouseMonitor";
import Home from './cmps/Home';

export function App() {
  const animalInfos = [
    { type: "Malayan Tiger", count: 787 },
    { type: "Mountain Gorilla", count: 212 },
    { type: "Fin Whale", count: 28 },
  ];
  return (
    <BrowserRouter>
      <header className="container">
        <nav>
          <h1>React Home Work</h1>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/animals-list'}>Animals List</NavLink>
          <NavLink to={'/season-clock'}>Season Clock</NavLink>
          <NavLink to={'/countdown'}>Countdown</NavLink>
          <NavLink to={'/watcher-app'}>Watcher App</NavLink>
          <NavLink to={'/mouse-monitor'}>Mouse Monitor</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="animals-list" element={<AnimalList animalsInfos={animalInfos} />} />
          <Route path="season-clock" element={<SeasonClock />} />
          <Route path="countdown" element={<CountDown startFrom={10}
            // toTime={Date.now() + 1000 * 10}
            onDone={() => {
              console.log("Done!");
            }} />} />
          <Route path="watcher-app" element={<WatcherApp />} />
          <Route path="mouse-monitor" element={<MouseMonitor />} />
        </Routes>

      </main>
    </BrowserRouter >
  );
}
