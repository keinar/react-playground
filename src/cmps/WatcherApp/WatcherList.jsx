import { WatcherPreview } from "./WatcherPreview";

export function WatcherList({ watchers, onRemove, onSelect }) {
  return (
    <section>
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
