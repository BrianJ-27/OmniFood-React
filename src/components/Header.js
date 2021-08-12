import MainNavigation from './header-elements/MainNav'
import HeroBx from './header-elements/HeroBox'


const Header = () => {


  return (
    <header>
      <div className='wrapper'>
        <MainNavigation/>
        <HeroBx/>
      </div>
    </header>
  );
};

export default Header;