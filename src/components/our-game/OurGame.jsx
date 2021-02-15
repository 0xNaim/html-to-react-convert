import ourImgOne from "../../assets/images/our-image1.jpg";
import ourImgTwo from "../../assets/images/our-image2.jpg";
import ourImgThree from "../../assets/images/our-image3.jpg";
import Game from "./Game";

function OurGame() {
  return (
    <div id="games" className="our">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Our Games</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 margin_bottom">
            <Game img={ourImgOne} name="Angry Bird" />
            <Game img={ourImgTwo} name="Ludo" />
            <Game img={ourImgThree} name="Cricket" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGame;
