import { useState, useEffect, useRef } from "react"

export function CountDown({ startFrom, onDone, toTime }) {
  const [hasStarted, setHasStarted] = useState(false)
  const [count, setCount] = useState(toTime ? toTime : startFrom)
  const timerIntervalRef = useRef()
  const audio = new Audio("../../src/assets/style/alram.mp3")

  useEffect(() => {
    if (hasStarted && count > 0) {
      timerIntervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)
    } else if (count <= 0) {
      clearInterval(timerIntervalRef.current);
      onDone()
      audio.play()
    }

    return () => clearInterval(timerIntervalRef.current); // Clear interval on unmount
  }, [hasStarted, count]);

  const handleStartClick = () => {
    setHasStarted((prev) => !prev)
  }

  return (
    <>
      <section className="count-down-container">
        <button
          className="start-count-down"
          style={{ margin: "25px auto", display: "block" }}
          onClick={handleStartClick}
        >
          {!hasStarted ? "START" : "STOP"}
        </button>

        <p className="count-down-p" style={{ color: count <= 6 ? 'red' : 'white' }}>
          {count}
        </p>
      </section>
    </>
  );
}
