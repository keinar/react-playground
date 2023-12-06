import { utilService } from "../../services/util.service";
import React, { useEffect, useState } from "react";

export function SeasonClock() {
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState(new Date());
  const dynBg = isDark ? "dark" : "light";

  function getImgUrl(url) {
    return new URL(url, import.meta.url).href;
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <section
        className={dynBg}
        onClick={() => {
          setIsDark((prevIsDark) => !prevIsDark);
        }}
      >
        <h1>
          {utilService.getMonthName(date)} ({utilService.getSeason()})
        </h1>
        <img
          src={getImgUrl("../../assets/style/" + utilService.getSeason() + ".png")}
        />
        <p>{utilService.getDayName(date)}</p>
      </section>
      <div className="running-clock">{date.toLocaleTimeString()}</div>
    </>
  );
}
