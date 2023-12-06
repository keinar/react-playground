import { utilService } from "../../services/util.service";
import React, { useEffect, useState } from "react";

export function SeasonClock() {
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState(new Date());

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

  const darkModeClass = isDark ? "dark" : "light";
  const seasonName = utilService.getMonthName(date);
  const monthName = utilService.getSeason();
  const dayName = utilService.getDayName(date);
  return (
    <>
      <section
        className={darkModeClass}
        onClick={() => {
          setIsDark((prevIsDark) => !prevIsDark);
        }}
      >
        <h1>
          {seasonName} ({monthName})
        </h1>
        <img src={getImgUrl("../../assets/style/" + monthName + ".png")} />
        <p>{dayName}</p>
      </section>
      <div className="running-clock">{date.toLocaleTimeString()}</div>
    </>
  );
}
