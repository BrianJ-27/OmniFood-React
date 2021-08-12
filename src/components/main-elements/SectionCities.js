import { citiData } from '../../data';
import { IoPersonSharp, IoStarSharp, IoLogoTwitter } from "react-icons/io5";
import { makeStyles } from '@material-ui/core/styles';

const useCityStyles =makeStyles({
  cityIcon: {
    color: '#17cf45',
    display: 'inline-block',
    width: '30px',
    fontSize: '120%',
    marginRight: '-1px',
    lineHeight: '120%',
    verticalAlign: 'middle',
    marginTop: '-5px'
  },
});

const citiInfo = citiData;

const SectionCities = () => {

  const classes = useCityStyles();

  return (
    <section className="section-cities" id="cities">
      <div className="row">
        <h2>We're currently in these cities</h2>
      </div>
      <div className='flex__container--city'>
        {citiInfo.map(({ id, img, city, review1, review2, link }) => (
          <div key={id} className='col'>
            <img src={img} alt="Lisbon" />
            <h3>{city}</h3>
            <div className="city-feature">
              <IoPersonSharp className={classes.cityIcon} />
              {review1}
            </div>
            <div className="city-feature">
              <IoStarSharp className={classes.cityIcon} />
              {review2}
            </div>
            <div className="city-feature">
              <IoLogoTwitter className={classes.cityIcon} />
              <a style={{color: '#17cf45'}} href="#g">{link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCities;
