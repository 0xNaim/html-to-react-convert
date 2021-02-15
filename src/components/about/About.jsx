import about from "../../assets/images/about.jpg";

function About() {
  return (
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
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                <br />
                labore et dolore magna aliqua. Ut enim conseq
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;