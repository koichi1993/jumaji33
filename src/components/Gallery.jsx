import { useInView } from "../hooks/useInView";

// Replace these with your actual image imports.
// Put files in: src/assets/gallery/*
import g1 from "../assets/gallery/g1.png";
import g2 from "../assets/gallery/g2.png";
import g3 from "../assets/gallery/g3.png";
import g4 from "../assets/gallery/g4.png";
import g5 from "../assets/gallery/g5.png";
import g6 from "../assets/gallery/g6.png";
import g7 from "../assets/gallery/g7.png";
import g8 from "../assets/gallery/g8.png";
import g9 from "../assets/gallery/g9.png";
import g10 from "../assets/gallery/g10.png";
import g11 from "../assets/gallery/g11.png";
import g12 from "../assets/gallery/g12.png";
import g13 from "../assets/gallery/g13.png";

const ROW_TOP = [g1, g2, g3, g4, g5, g6];
const ROW_BOTTOM = [g7, g8, g9, g10, g11, g12, g13];

export default function Gallery() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="gallery" aria-labelledby="gallery-title" ref={ref}>
      <div className="gallery__head">
        <h2 id="gallery-title" className="why__title">
          Last night <span>looked like this</span>
        </h2>
        <p className="why__lead">Highlights from recent parties in Shibuya.</p>
      </div>

      <div className="gallery__wrap">
        {/* TOP ROW */}
        <div className={`gallery__row ${inView ? "play" : ""}`}>
          <div className="gallery__track gallery__track--left">
            {ROW_TOP.concat(ROW_TOP).map((src, i) => (
              <div className="gallery__tile" key={`t-${i}`}>
                <img
                  className="gallery__img"
                  src={src}
                  alt=""
                  loading={i > ROW_TOP.length ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className={`gallery__row ${inView ? "play" : ""}`}>
          <div className="gallery__track gallery__track--right">
            {ROW_BOTTOM.concat(ROW_BOTTOM).map((src, i) => (
              <div className="gallery__tile" key={`b-${i}`}>
                <img
                  className="gallery__img"
                  src={src}
                  alt=""
                  loading={i > ROW_BOTTOM.length ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="gallery__mask gallery__mask--left" aria-hidden="true" />
        <div className="gallery__mask gallery__mask--right" aria-hidden="true" />
      </div>
    </section>
  );
}
