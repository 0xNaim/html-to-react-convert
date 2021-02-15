import call from "../assets/icon/call.png";
import email from "../assets/icon/email.png";
import fb from "../assets/icon/fb.png";
import insta from "../assets/icon/instagram.png";
import link from "../assets/icon/lin(2).png";
import location from "../assets/icon/loc.png";
import tw from "../assets/icon/tw.png";
import rightArrow from "../assets/images/3.png";
import about from "../assets/images/about.jpg";
import logo from "../assets/images/logo.png";
import software from "../assets/images/soft.jpg";
import testimonialOne from "../assets/images/test1.png";
import testimonialTwo from "../assets/images/test2.png";
import testimonialThree from "../assets/images/test3.png";
import NavBar from "../components/header/Navbar";
import SideBar from "../components/header/Sidebar";
import OurGame from "../components/our-game/OurGame";

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

      {/* we are */}
      <div id="software">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Software</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="box_bg">
                <div className="box_bg_img">
                  <figure>
                    <img src={software} />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 border_right">
              <div className="box_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* we are end */}
      {/* about  */}
      <div id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>About Our Game</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="about-box">
                <figure>
                  <img src={about} alt="#" />
                </figure>

                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut
                  <br />
                  labore et dolore magna aliqua. Ut enim conseq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end  */}
      {/* testimonial */}
      <div id="testimonial" className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-md-2">
              <div className="row box">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="testimonial_box">
                    <figure>
                      <img src={testimonialOne} alt="#" />
                    </figure>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="testimonial_box">
                    <figure>
                      <img src={testimonialTwo} alt="#" />
                    </figure>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="testimonial_box">
                    <figure>
                      <img src={testimonialThree} alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="clients_box">
                <h3>Jecoo</h3>
                <p>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna <br />
                  aliqua. Ut enim ad minim veniam, quis
                  <br />
                  nostrud exercitation ullamco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial end */}
      {/* contact */}
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className="contact_bg">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      className="contactus"
                      placeholder="Phone"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="Message"
                    ></textarea>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button className="send">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* contact end */}

      {/* footer */}
      <footr>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Newsletter</h2>
              </div>
              <div className="col-md-10 offset-md-1">
                <form className="news">
                  <input
                    className="newslatter"
                    placeholder="Enter Your Email"
                    type="text"
                    name="Enter Your Email"
                  />
                  <button className="submit">Subscribe</button>
                </form>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <ul className="social_link">
                        <li>
                          <a href="#">
                            <img src={fb} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={tw} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={link} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={insta} />
                          </a>
                        </li>
                      </ul>
                      <a href="index.html">
                        <img src={logo} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Quick links</h3>
                      <ul className="Menu_footer">
                        <li className="active">
                          <img src={rightArrow} alt="#" />
                          <a href="#">Game</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">Software</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">About</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#"> Testimonial</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>downloded</h3>
                      <ul className="Links_footer">
                        <li className="active">
                          <img src={rightArrow} alt="#" />
                          <a href="#">Lorem Ipsum </a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">Simply random</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">Roots in a</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#"> Piece</a>
                        </li>
                        <li>
                          <img src={rightArrow} alt="#" />
                          <a href="#">classNameical</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Contact us</h3>
                      <ul className="loca">
                        <li>
                          <a href="#">
                            <img src={location} alt="#" />
                          </a>
                          London 145 <br />
                          United Kingdom
                        </li>
                        <li>
                          <a href="#">
                            <img src={email} alt="#" />
                          </a>
                          demo@gmail.com
                        </li>
                        <li>
                          <a href="#">
                            <img src={call} alt="#" />
                          </a>
                          +12586954775
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>
                © 2019 All Rights Reserved.
                <a href="#">Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footr>
      {/* footer end */}
    </div>
  );
}

export default Home;
