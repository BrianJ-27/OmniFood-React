import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogle,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex__container">
          <div className="footer__col">
            <ul className="footer__nav">
              <li className="footer__item">
                <a className="footer__link" href="#1">About us</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#2">Blog</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#3">Press</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#4">iOS App</a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#5">Android App</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul className="footer__nav">
              <li className="footer__item">
                <a className="footer__link" href="#6">
                  <IoLogoFacebook />
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#7">
                  <IoLogoTwitter />
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#8">
                  <IoLogoGoogle />
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#9">
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <p>Copyright &copy; 2015 by Omnifood. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
