import { useReveal } from "../hooks/useReveal";

export default function Why() {
  const { ref, on } = useReveal(0.25);

  return (
    <section className="why" aria-labelledby="why-title">
      <div ref={ref} className={`why__inner ${on ? "in" : ""}`}>
        {/* LEFT: Copy */}
        <div className="why__left">
          <p className="why__kicker">Why everyone ends up here</p>
          <h2 id="why-title" className="why__title">
            JUMANJI<span>33</span> — Shibuya’s value king
          </h2>

          <p className="why__lead">
            The secret isn’t a secret: <strong>outrageous drink perks</strong>, quick entry, and an
            easygoing crowd that blends locals and travelers. Come early for the deals, stay late
            for the energy.
          </p>

          <ul className="why__bullets">
            <li><span><strong>Women:</strong> free entry & free drinks all night (from 20:00)</span></li>
            <li><span><strong>Men:</strong> all-you-can-drink <strong>20:00–24:00</strong></span></li>
            <li><span>All-mix soundtrack: hip-hop • EDM • pop sing-alongs</span></li>
            <li><span>Friendly, international vibe; staff English/Japanese</span></li>
            <li><span>Central Shibuya — steps from the crossing</span></li>
          </ul>

          <div className="why__badges">
            <div className="badge">Free All Night</div>
            <div className="badge badge--outline">AYCD 20–24</div>
            <div className="badge">Shibuya Center</div>
          </div>
        </div>

        {/* RIGHT: Feature card */}
        <div className="why__right" aria-hidden="true">
          <div className="why__card">
            <div className="why__glow" />
            <h3>What makes us different</h3>
            <p>
              We optimize the night for value and flow: fast door, fast bar, and a floor that
              stays moving. Come as a warm-up, end up staying till close.
            </p>
            <div className="why__ticks">
              <div>✔ Unbeatable perks that actually matter</div>
              <div>✔ Prime-time energy, zero-fuss entry</div>
              <div>✔ Easy meetups: locals × travelers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="why__ticker" aria-hidden="true">
        <div className="why__track">
          JUMANJI 33 • SHIBUYA • FREE DRINKS • ALL-MIX • HIP-HOP • EDM • TOURIST FRIENDLY • NIGHTLIFE •
          JUMANJI 33 • SHIBUYA • FREE DRINKS • ALL-MIX • HIP-HOP • EDM • TOURIST FRIENDLY • NIGHTLIFE •
        </div>
      </div>
    </section>
  );
}
