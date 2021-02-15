import NavBar from "./Navbar";
import SideBar from "./Sidebar";

function Header() {
  return (
    <header>
      <div className="header-top">
        <NavBar />
        <SideBar />
      </div>
    </header>
  );
}

export default Header;