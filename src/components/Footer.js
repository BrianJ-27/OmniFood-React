import { makeStyles } from '@material-ui/core/styles';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle, IoLogoInstagram} from "react-icons/io5";

const useFooterStyles = makeStyles({
  footerBg: {
    background: '#333',
    padding: '2em',
    fontSize: '90%',
    color: '#888'
  },
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1140px',
    margin: '1em auto'
  },
  footerNav:{
    display: 'flex',
    flexWrap: 'wrap',
  },
  firstLi: {
    marginTop: '.5em',
    marginBottom: '.5em',
    marginRight: '1.2em'
  },
  footerNavLi: {
    margin: '.5em 1.2em'
  },
  bottomFooter: {
    textAlign: 'center'
  }
})

const Footer = () => {

  const classes = useFooterStyles();

  return (
    <footer className={classes.footerBg}>
      <div className={classes.flexRow}>
        <div className="col span-1-of-2">
          <ul className={classes.footerNav}>
            <li className={classes.firstLi}>
              <a href="#1">About us</a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#2">Blog</a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#3">Press</a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#4">iOS App</a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#5">Android App</a>
            </li>
          </ul>
        </div>
        <div className="col span-1-of-2">
          <ul className={classes.footerNav}>
            <li className={classes.footerNavLi}>
              <a href="#6">
              <IoLogoFacebook/>
              </a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#7">
              <IoLogoTwitter/>
              </a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#8">
              <IoLogoGoogle/>
              </a>
            </li>
            <li className={classes.footerNavLi}>
              <a href="#9">
              <IoLogoInstagram/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.bottomFooter}>
        <p>Copyright &copy; 2015 by Omnifood. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
