import logo from "../../img/logo-white.png";


const MainNavigation = () => {

  return (
      <nav className="flex__container">
        <img src={logo} alt="Omnifood logo" className='logo__img' />
        <ul className="flex__container--nav nav__wrapper">
          <li className="nav__item">
            <a href="#features" className="nav__link">Food Delivery</a>
          </li>
          <li className="nav__item">
            <a href="#works" className="nav__link">How it Works</a>
          </li>
          <li className="nav__item">
            <a href="#cities" className="nav__link">Our Cities</a>
          </li>
          <li className="nav__item">
            <a href="#plans" className="nav__link">Sign Up</a>
          </li>
        </ul>
        {/* <a href="#icon" className="mobile-nav-icon js--nav-icon">
                    icon here -{" "}
                </a> */}
      </nav>
  );
};

export default MainNavigation;

