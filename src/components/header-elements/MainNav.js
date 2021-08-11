import logo from "../../img/logo-white.png";
import { makeStyles } from "@material-ui/core/styles";
import { FlexMe } from "../../theme";




const useNavStyles = makeStyles((theme) => ({
    logoSize: {
      width: '110px',
      [theme.breakpoints.up('tablet')]: {
        width: '150px',
      },
      [theme.breakpoints.up('desktop')]: {
        width: '170px',
      },
    },
}));


const MainNavigation = () => {
  const classes = useNavStyles();

  return (
      <nav className={FlexMe.flexRow}>
        <img src={logo} alt="Omnifood logo" className={classes.logoSize} />
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

