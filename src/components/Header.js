import MainNavigation from './header-elements/MainNav'
import HeroBx from './header-elements/HeroBox'
import { makeStyles } from '@material-ui/core/styles'
import backgroundHdr from '../img/hero-bg.jpeg'

const useHeaderStyles = makeStyles ({
    headerBg: {
        background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.7) 90%), url(' + backgroundHdr+ ') ',
        backgroundSize: 'cover',
        boxShadow: '0 3px 5px 2px rgba(105, 255, 125, 0.534)',
        maxWidth: '1540px', 
        padding: "1em 0 8em 0"
    },
});

const Header = () => {

const classes = useHeaderStyles();

  return (
    <header className={classes.headerBg}>
      <MainNavigation/>
      <HeroBx/>
    </header>
  );
};

export default Header;