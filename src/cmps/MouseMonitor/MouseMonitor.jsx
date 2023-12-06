import { useState, useEffect } from "react";

export default function MouseMonitor() {
  //useRef is mandatory here
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const updatePos = (event) => {
    setPos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (isOn) {
      window.addEventListener("mousemove", updatePos);
    }
    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  }, [isOn]);

  return (
    <div className="mouse-position-container">
      <p>Mouse Position</p>
      <div>Mouse Position: {isOn ? `x: ${pos.x}, y: ${pos.y}` : "Paused"}</div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
