import logoUrl from "../assets/jumanji33-logo.png";
import igUrl from "../assets/instagram.png";

export default function Footer() {
  // TODO: replace with your real links and address
  const INSTAGRAM_URL = "https://www.instagram.com/jumanji33shibuya/?hl=en"; // ← put your IG here
  const ADDRESS_TEXT = "13-16 Udagawacho, Shibuya, Tokyo 150-0042, Japan";
  // Simple Google Maps embed (no API key needed). Replace q= with your address or place name.
  const MAP_SRC =
  "https://www.google.com/maps?q=35.658306,139.695274&z=16&output=embed";


  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <h2 id="footer-title" className="sr-only">Club footer</h2>
          <div className="footer__logo">
            <img src={logoUrl} alt="HARLEM logo" />
          </div>
          <p className="footer__tag">Shibuya’s hip-hop heartbeat since ’97.</p>

          <div className="footer__social">
            <a
              className="footer__icon"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              title="Instagram"
            >
              <img src={igUrl} alt="" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="footer__info">
          <h3 className="footer__heading">Visit</h3>
          <address className="footer__addr">
            {ADDRESS_TEXT}
          </address>

          <div className="footer__list">
            <div><span>Hours</span><b>Mon–Sun 22:00–04:30</b></div>
          </div>
        </div>

        {/* Map */}
        <div className="footer__mapwrap">
          <h3 className="footer__heading">Find us</h3>
          <div className="footer__map">
            <iframe
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Google map: HARLEM Shibuya"
            />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} HARLEM. All rights reserved.</p>
        <nav className="footer__links" aria-label="Footer">
          <a href="#">House Rules</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
