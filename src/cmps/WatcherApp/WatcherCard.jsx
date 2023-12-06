import demo from "../../assets/style/spring.png"

export function WatcherCard({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export function WatcherCardHeader(watcher) {
    return (
        <img src={demo}></img>
    )
}

export function WatcherCardBody(watcher) {
    return (
        <h2>{watcher.title}</h2>
    )
}

export function WatcherCardFooter(props) {
    return (
        <>
            <button className="remove-button" onClick={props.onRemove}>X</button>
            <button className="select-button" onClick={props.onSelect}>SELECT</button>
        </>
    )
}
