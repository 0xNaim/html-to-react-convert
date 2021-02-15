import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import OurGame from "../components/our-game/OurGame";
import Software from "../components/software/Software";
import Testimonial from "../components/testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <OurGame />
      <Software />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
