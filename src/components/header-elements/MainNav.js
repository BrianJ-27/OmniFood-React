import { makeStyles } from "@material-ui/core/styles";
import logo from "../../img/logo-white.png";
import { Wrapper, FlexDiv } from "../breakpoints";
import { MainNav, NavListItem, NavLinks } from "./navStyles";

const useNavStyles = makeStyles({
  mainNavLi: {
    marginRight: "1em",
  },
  navLinks: {
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "1.2em",
    fontWeight: "300",
    letterSpacing: ".5px",
  },
});

const MainNavigation = () => {

  const classes = useNavStyles();

  return (
    <nav>
      <Wrapper>
        <FlexDiv>
          <img src={logo} alt="Omnifood logo" style={{ width: "100px" }} />
          <ul>
            <NavListItem >
              <NavLinks className={classes.navLinks} href="#features">
                Food Delivery
              </NavLinks>
            </NavListItem>
            <NavListItem>
              <NavLinks className={classes.navLinks} href="#works">
                How it Works
              </NavLinks>
            </NavListItem>
            <NavListItem>
              <NavLinks href="#cities">
                Our Cities
              </NavLinks>
            </NavListItem>
            <NavListItem>
              <NavLinks className={classes.navLinks} href="#plans">
                Sign Up
              </NavLinks>
            </NavListItem>
          </ul>
          {/* <a href="#icon" className="mobile-nav-icon js--nav-icon">
                    icon here -{" "}
                </a> */}
        </FlexDiv>
      </Wrapper>
    </nav>
  );
};

export default MainNavigation;
