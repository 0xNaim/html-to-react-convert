import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/Navbar";
import SideBar from "../components/header/Sidebar";
import OurGame from "../components/our-game/OurGame";
import Software from "../components/software/Software";
import Testimonial from "../components/testimonial/Testimonial";

function Home() {
  return (
    <div>
      {/* header */}
      <header>
        <div className="header-top">
          <NavBar />
          <SideBar />
        </div>
      </header>

      {/* our game */}
      <OurGame />

      {/* software */}
      <Software />

      {/* about  */}
      <About />

      {/* testimonial */}
      <Testimonial />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
