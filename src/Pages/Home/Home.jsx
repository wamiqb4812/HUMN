import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Collection from "../../Components/Collection/Collection";
import About from "../../Components/About/About";
import Craft from "../../Components/Craft/Craft";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";
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
