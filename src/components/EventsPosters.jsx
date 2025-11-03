import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

// Replace these with your actual poster imports (or external URLs).
// Put files in: src/assets/events/*
import e1 from "../assets/events/e1.jpg";
import e2 from "../assets/events/e2.jpg";
import e3 from "../assets/events/e3.jpg";
import e4 from "../assets/events/e4.jpg";
import e5 from "../assets/events/e5.jpg";
import e6 from "../assets/events/e6.jpg";
import e7 from "../assets/events/e7.jpg";
import e8 from "../assets/events/e8.jpg";

const POSTERS = [e1, e2, e3, e4, e5, e6, e7, e8];

export default function EventsPosters({
  title = "Upcoming Events",
  initialCount = 3,
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, on } = useReveal(0.2);

  const visible = expanded ? POSTERS : POSTERS.slice(0, initialCount);

  return (
    <section className="posters" aria-labelledby="posters-title">
      <div className="posters__head">
        <h2 id="posters-title" className="why__title">{title}</h2>
        <p className="why__lead">Flyers straight from the booth.</p>
      </div>

      <div ref={ref} className={`posters__grid ${on ? "in" : ""}`}>
        {visible.map((src, i) => (
          <figure className="posters__item" key={i}>
            {/* If you want full-size on click later, wrap with <a href={src}> */}
            <img
              className="posters__img"
              src={src}
              alt=""
              loading={i < initialCount ? "eager" : "lazy"}
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>

      {POSTERS.length > initialCount && (
        <div className="posters__more">
          <button className="btn btn--ghost" onClick={() => setExpanded(v => !v)}>
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}
