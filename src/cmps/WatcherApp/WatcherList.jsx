import { WatcherPreview } from "./WatcherPreview";

export function WatcherList({ watchers, onRemove, onSelect }) {
  return (
    <section className="watcher-list">
      {watchers.map((watcher) => (
        <WatcherPreview
          key={watcher.id}
          watcher={watcher}
          onRemove={onRemove}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}
