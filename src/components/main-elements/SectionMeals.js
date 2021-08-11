import mealData from '../../data'
import { makeStyles } from '@material-ui/core/styles';
import { MealCol }  from '../../theme';

const useMealPicStyles = makeStyles({
    imgContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: '100%',
        fontSize: '0'
    },
    mealPhotoFigure: {
        width: '100%',
        margin: '0',
        overflow: 'hidden',
        background: '#000'
    },
    img: {
       borderStyle: 'none',
       height: 'auto',
       width: '100%',
       opacity: '0.7',
       transform: 'scale(1.15)',
       transition: 'transform 0.5s, opacity 0.5s',
    }
})

const mealpicData = mealData;

const SectionMeals = () => {

    const classes = useMealPicStyles();

    return (
        <section className="section-meals">
            <div className={classes.imgContainer}>
                {mealpicData.map(({id, pic, alt}) => 
                <MealCol component='section' key={id} >
                    <figure className={classes.mealPhotoFigure}>
                        <img className={classes.img} src={pic} alt={alt} />
                    </figure> 
                </MealCol>
                )} 
            </div>
        </section>
    );
}

export default SectionMeals;