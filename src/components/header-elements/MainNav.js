import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/logo-white.png';

const useNavStyles = makeStyles ({
    navFlexContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '0 4em'
    },
    mainNav: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
    },
    mainNavLi: {
        marginRight: '1em'
    },
    links: {
        color: '#fff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '1.2em',
        fontWeight: '300',
        letterSpacing: '.5px'
    }
});

const MainNavigation = () => {

    const classes = useNavStyles();
    
    return (
        <nav>
            <div className={classes.navFlexContainer}>
                <img src={logo} alt="Omnifood logo" style={{ width: '100px' }} />
                <ul className={classes.mainNav}>
                    <li className={classes.mainNavLi}>
                        <a className={classes.links} href="#features">Food Delivery</a>
                    </li>
                    <li className={classes.mainNavLi}>
                        <a className={classes.links}href="#works">How it Works</a>
                    </li>
                    <li className={classes.mainNavLi}>
                        <a className={classes.links}href="#cities">Our Cities</a>
                    </li>
                    <li className={classes.mainNavLi}>
                        <a className={classes.links}href="#plans">Sign Up</a>
                    </li>
                </ul>
                {/* <a href="#icon" className="mobile-nav-icon js--nav-icon">
                    icon here -{" "}
                </a> */}
            </div>
        </nav>
    )
}

export default MainNavigation;