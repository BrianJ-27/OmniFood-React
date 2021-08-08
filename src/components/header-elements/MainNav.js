import logo from "../../img/logo-white.png";

const MainNavigation = () => {
  return (
      <nav className="flex_container">
        <img src={logo} alt="Omnifood logo" style={{ width: "100px" }} />
        <ul className="flex_container">
          <li>
            <a href="#features">Food Delivery</a>
          </li>
          <li>
            <a href="#works">How it Works</a>
          </li>
          <li>
            <a href="#cities">Our Cities</a>
          </li>
          <li>
            <a href="#plans">Sign Up</a>
          </li>
        </ul>
        {/* <a href="#icon" className="mobile-nav-icon js--nav-icon">
                    icon here -{" "}
                </a> */}
      </nav>
  );
};

export default MainNavigation;

