import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Collection from "../../components/Collection/Collection";
import About from "../../components/About/About";
import Craft from "../../components/Craft/Craft";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Craft />
      <Testimonials />
      <Footer />
    </div>
  );
}
