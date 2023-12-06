import demo from "../../assets/style/spring.png";

export function WatcherPreview({ watcher, onRemove, onSelect }) {
  return (
    <section className="watcher-preview">
      <h1>{watcher.fullName}</h1>
      <img src={demo}></img>
      <button className="remove-button" onClick={() => onRemove(watcher.id)}>
        X
      </button>
      <button className="select-button" onClick={() => onSelect(watcher)}>
        SELECT
      </button>
    </section>
  );
}
