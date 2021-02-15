import testimonialOne from "../../assets/images/test1.png";
import testimonialTwo from "../../assets/images/test2.png";
import testimonialThree from "../../assets/images/test3.png";

function Testimonial() {
  return (
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
  );
}

export default Testimonial;