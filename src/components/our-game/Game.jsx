function Game({ img, name }) {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-md-12 margin_bottom">
        <div className="two-box">
          <figure>
            <img src={img} alt="#" />
          </figure>
        </div>
      </div>

      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
        <div className="Games">
          <h3>{name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <a href="#">Free Download</a>
        </div>
      </div>
    </div>
  );
}

export default Game;
