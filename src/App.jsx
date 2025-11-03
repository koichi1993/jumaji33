import Hero from "./components/Hero.jsx";
import Why from "./components/Why.jsx";
import Gallery from "./components/Gallery.jsx";
import EventsPosters from "./components/EventsPosters.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <Why />
      <Gallery />
      <EventsPosters initialCount={3} title="Upcoming Events" />
      <Testimonials title="People are loving it" />
      <Footer />
      
    </>
  );
}
