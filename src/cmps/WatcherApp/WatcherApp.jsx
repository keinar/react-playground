import { useEffect, useState } from "react";
import { watcherService } from "../../services/watcher.service";
import { WatcherList } from "./WatcherList";
import { WatcherDetails } from "./WatcherDetails";

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    loadWatchers();
  }, []);

  async function loadWatchers() {
    try {
      let watchersFromDB = await watcherService.query();
      setWatchers(watchersFromDB);
    } catch (err) {
      console.error("Error loading watchers:", err);
    }
  }

  async function handleRemove(watcherId) {
    try {
      watcherService.remove(watcherId);
      setWatchers(watchers.filter((watcher) => watcher.id !== watcherId));
    } catch (err) {
      console.error("Error remove watcher:", err);
    }
  }

  async function addWatcher() {
    try {
      const fullName = prompt("What is your name?");
      const moviesStr = prompt("Enter your movies list, separated by commas");
      const movies = moviesStr.split(",").map((movie) => movie.trim());

      const newWatcher = await watcherService.save({ fullName, movies });
      setWatchers([...watchers, newWatcher]);
    } catch (err) {
      console.error("Error adding a watcher:", err);
    }
  }

  async function handleSelect(watcher) {
    setSelectedWatcher(watcher);
  }

  function closeModal() {
    setSelectedWatcher(null);
  }

  return (
    <section className="wa-main-container">
      <h1 style={{ color: "white" }}>Watcher App</h1>
      <button onClick={addWatcher}>Add Watcher</button>

      <section className="main-card-container">
        {!!watchers.length && (
          <WatcherList
            watchers={watchers}
            onRemove={handleRemove}
            onSelect={handleSelect}
          />
        )}
      </section>

      {selectedWatcher && (
        <WatcherDetails
          selectedWatcher={selectedWatcher}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}
