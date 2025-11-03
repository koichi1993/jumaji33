import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

// screenshots
import t1 from "../assets/testimonials/t1.png";
import t2 from "../assets/testimonials/t2.png";
import t3 from "../assets/testimonials/t3.png";
import t4 from "../assets/testimonials/t4.png";

const SHOTS = [t1, t2, t3, t4];

export default function Testimonials({
  title = "What people are saying",
  intervalMs = 4000,
}) {
  const { ref, inView } = useInView(0.2);
  const [i, setI] = useState(0);
  const [frameW, setFrameW] = useState(0);
  const timer = useRef(null);
  const frameRef = useRef(null);
  const startX = useRef(null);
  const [paused, setPaused] = useState(false);

  // measure frame width for pixel-precise slides
  useEffect(() => {
    const measure = () => setFrameW(frameRef.current?.clientWidth || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // autoplay when in view and not paused
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!inView || paused || reduce) return;
    timer.current = setInterval(() => setI(prev => (prev + 1) % SHOTS.length), intervalMs);
    return () => clearInterval(timer.current);
  }, [inView, paused, intervalMs]);

  const go = (dir) => {
    setI(prev => {
      if (dir === "next") return (prev + 1) % SHOTS.length;
      if (dir === "prev") return (prev - 1 + SHOTS.length) % SHOTS.length;
      return prev;
    });
  };

  // swipe
  const onTouchStart = e => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = e => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? "next" : "prev");
    startX.current = null;
  };

  return (
    <section className="testi" aria-labelledby="testi-title" ref={ref}>
      <div className="testi__head">
        <h2 id="testi-title" className="why__title">{title}</h2>
        <p className="why__lead">From Google reviews</p>
      </div>

      <div
        className="testi__frame"
        ref={frameRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="testi__track"
          style={{ transform: `translateX(-${i * frameW}px)` }}
          role="list"
        >
          {SHOTS.map((src, idx) => (
            <figure className="testi__slide" key={idx} role="listitem">
              <img
                src={src}
                alt=""
                className="testi__img"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <button className="testi__nav testi__nav--prev" onClick={() => go("prev")} aria-label="Previous review">‹</button>
        <button className="testi__nav testi__nav--next" onClick={() => go("next")} aria-label="Next review">›</button>

        <div className="testi__dots" role="tablist" aria-label="Testimonials">
          {SHOTS.map((_, idx) => (
            <button
              key={idx}
              className={`testi__dot ${idx === i ? "is-active" : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === i}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
