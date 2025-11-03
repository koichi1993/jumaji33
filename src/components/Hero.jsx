import { useEffect, useRef } from "react";
import heroMp4 from "../assets/hero.mp4";          // MP4 only
import heroPoster from "../assets/hero-poster.png";
import logo from "../assets/jumanji33-logo.png";


export default function HeroTriple() {
  const v1 = useRef(null);
  const v2 = useRef(null);
  const v3 = useRef(null);

  useEffect(() => {
    const vids = [v1.current, v2.current, v3.current].filter(Boolean);

    // Try to start all when loaded; fall back to poster if autoplay fails
    const tryStart = (v) => {
      try { v.currentTime = 0; } catch {}
      const p = v.play?.();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Show poster if autoplay is blocked
          v.pause?.();
          v.removeAttribute("src");
          v.load?.();
        });
      }
    };

    let loaded = 0;
    const onLoaded = () => {
      loaded += 1;
      if (loaded === vids.length) vids.forEach(tryStart);
    };

    vids.forEach(v => v?.addEventListener("loadeddata", onLoaded));
    return () => vids.forEach(v => v?.removeEventListener("loadeddata", onLoaded));
  }, []);

  return (
    <section className="hero" aria-label="Nightclub landing section">
      <a href="/" className="hero__logo" aria-label="Home">
        <img src={logo} alt="Club logo" />
      </a>

      {/* Triple grid; on mobile your CSS collapses to ONE video */}
      <div className="hero__triple">
        {[v1, v2, v3].map((ref, i) => (
          <div className="hero__frame hero__frame--panel" key={i}>
            <video
              ref={ref}
              className="hero__video"
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={heroMp4} type="video/mp4" />
            </video>
            <div className="hero__overlay" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Add some text while debugging so it’s not just black */}
      <div className="hero__content">
        <h1></h1>
        <p></p>
      </div>
    </section>
  );
}
