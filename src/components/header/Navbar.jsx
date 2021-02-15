import logo from '../../assets/images/logo.png'
import searchIcon from "../../assets/images/search_icon.png"

function NavBar() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="#" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <ul className="top_icon">
              <li className="button_login">
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li className="mean-last">
                <a href="#">
                  <img src={searchIcon} alt="#" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;