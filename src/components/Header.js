import MainNavigation from './header-elements/MainNav'
import HeroBx from './header-elements/HeroBox'
import { makeStyles } from '@material-ui/core/styles'
import backgroundHdr from '../img/hero-bg.jpeg'

const useHeaderStyles = makeStyles ({
    headerBg: {
        background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.7) 90%), url(' + backgroundHdr+ ') ',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 3px 5px 2px rgba(105, 255, 125, 0.534)', 
        padding: "1em 0 8em 0"
    },
    siteWrapper: {
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '0 2em'
    }
});

const Header = () => {

const classes = useHeaderStyles();

  return (
    <header className={classes.headerBg}>
      <div className={classes.siteWrapper}>
        <MainNavigation/>
        <HeroBx/>
      </div>
    </header>
  );
};

export default Header;