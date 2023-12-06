
import { useEffect, useState } from "react";
import { WatcherCard, WatcherCardBody, WatcherCardFooter, WatcherCardHeader } from "./WatcherCard";
import { watcherService } from "../../services/watcher.service";


export function WatcherApp() {

  const [watchers, setWatchers] = useState([])
  const [selectedWatcher, setSelectedWatcher] = useState(null)

  useEffect(() => {
    const loadWatchers = async () => {
      try {
        let watcherList = await watcherService.query();
        if (!watcherList || watcherList.length === 0) {
          watcherService.createWatchers();
          watcherList = await watcherService.query();
        }
        setWatchers(watcherList);
      } catch (err) {
        console.error('Error loading watchers:', err);
      }
    };

    loadWatchers();
  }, []);

  async function handleRemove(watcherId) {
    try {
      watcherService.remove(watcherId)
      setWatchers(watchers.filter(watcher => watcher.id !== watcherId))
    } catch (err) {
      console.error('Error remove watcher:', err)
    }
  }

  async function addWatcher() {
    try {
      const fullName = prompt("What is your name?")
      const moviesStr = prompt("Enter your movies list, separated by commas");
      const movies = moviesStr.split(',').map(movie => movie.trim())

      const newWatcher = await watcherService.save({ fullName, movies });
      setWatchers([...watchers, newWatcher]);

    } catch (err) {
      console.error('Error adding a watcher:', err)
    }
  }

  async function handleSelect(watcher) {
    setSelectedWatcher(watcher)
  }

  function closeModal() {
    setSelectedWatcher(null);
  }

  return (
    <>
      <section className="wa-main-container">

        <h1>Watcher App</h1>
        <button onClick={addWatcher}>Add Watcher</button>

        <section className="main-card-container">

          {watchers && watchers.map(watcher => {

            return (
              <WatcherCard key={watcher.id}>
                <WatcherCardHeader />
                <WatcherCardBody title={watcher.fullName} />
                <WatcherCardFooter
                  onRemove={() => handleRemove(watcher.id)}
                  onSelect={() => handleSelect(watcher)}
                />
              </WatcherCard>

            )
          })}
        </section>

        {selectedWatcher && (
          <div className="modal">
            <div className="modal-content">
              <h4>{selectedWatcher.fullName}</h4>
              <ul>
                {selectedWatcher.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
              <button onClick={closeModal}>Close</button>
              {/* <button onClick={editWatcher}>EDIT</button> */}

            </div>
          </div>
        )}

      </section>
    </>
  );
}
