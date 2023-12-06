export function WatcherDetails({ selectedWatcher, closeModal }) {
  return (
    <section className="watcher-details">
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
    </section>
  );
}
