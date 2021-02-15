import image from "../../assets/images/img.png";

function SideBar() {
  return (
    <section className="slider_section">
      <div className="banner_main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 padding_left0">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active">
                        <a href="#">Game</a>
                      </li>
                      <li>
                        <a href="#">Software</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="text-bg">
                <h1>
                  amazing
                  <br />
                  3d game
                </h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  <br />
                  tempor incididunt ut
                </span>
                <a href="#">download</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="text-img">
                <figure>
                  <img src={image} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
