import logo from "../../img/logo-white.png";
import { Link } from "react-router-dom";

const MainNavigation = () => {

  return (
      <nav className="flex__container">
        <img src={logo} alt="Omnifood logo" className='logo__img' />
        <ul className="flex__container nav__wrapper">
          <li className="nav__item">
            <Link to="/FoodDelivery" className="nav__link">Food Delivery</Link>
          </li>
          <li className="nav__item">
            <Link to="HowItWorks" className="nav__link">How it Works</Link>
          </li>
          <li className="nav__item">
            <Link to="OurCities" className="nav__link">Our Cities</Link>
          </li>
          <li className="nav__item">
            <Link to="ContactUs" className="nav__link">Sign Up</Link>
          </li>
        </ul>
        {/* <a href="#icon" className="mobile-nav-icon js--nav-icon">
                    icon here -{" "}
                </a> */}
      </nav>
  );
};

export default MainNavigation;

