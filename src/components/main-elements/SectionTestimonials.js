import { testimonialData } from "../../data";
import { IoStarSharp } from "react-icons/io5";
import { makeStyles } from '@material-ui/core/styles';

const useTestimonialStyles = makeStyles({
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
    <section className="testimonial__bg">
      <div className="wrapper">
      <div className="row">
        <h2 className="title__secondary reviews">Our customers can't live without us</h2>
      </div>
      <div className='flex__container testimonial'>
        {testimonialData.map(({id, review, photo, name, alt}) =>
          <div className='grid__col--4 review' key={id}>
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
      </div>
    </section>
  );
};

export default SectionTestimonials;
