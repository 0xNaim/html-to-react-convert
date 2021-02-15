import tw from "../../assets//icon/tw.png";
import call from "../../assets/icon/call.png";
import email from "../../assets/icon/email.png";
import fb from "../../assets/icon/fb.png";
import insta from "../../assets/icon/instagram.png";
import link from "../../assets/icon/lin(2).png";
import location from "../../assets/icon/loc.png";
import rightArrow from "../../assets/images/3.png";
import logo from "../../assets/images/logo.png";
import CopyRight from "./CopyRight";
import NewsLetter from "./NewsLetter";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* newslatter */}
            <NewsLetter />
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
                    <h3>Contact</h3>
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
        {/* copyright */}
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
