import { testimonialData } from "../../data";
import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../../img/back-customers.jpg'
import { IoStarSharp } from "react-icons/io5";

const useTestimonialStyles = makeStyles({
  sectionTestimonial: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url('+ bgImg +')',
    backgroundSize: 'cover',
    color: '#fff',
    backgroundAttachment: 'fixed'
  },
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1140px',
    margin: '1em auto'
  },
  photoImg: {
    height: '50px',
    width: 'auto',
    borderRadius: '50%',
    marginRight: '10px',
    verticalAlign: 'middle'
  }
})

const SectionTestimonials = () => {

  const classes = useTestimonialStyles();

  return (
    <section className={classes.sectionTestimonial}>
      <div className="row">
        <h2>Our customers can't live without us</h2>
      </div>
      <div className={classes.flexRow}>
        {testimonialData.map(({id, review, photo, name, alt}) =>
          <div style={{width: '30%'}} key={id}>
            <IoStarSharp style={{fontSize: '180%'}}/>
          <blockquote>
            {review}
          </blockquote>
          <cite style={{fontSize: '120%', fontWeight: 'bold'}}>
            <img className={classes.photoImg} src={photo} alt={alt} />
            {name}
          </cite>
        </div>
        )}
      </div>
    </section>
  );
};

export default SectionTestimonials;
