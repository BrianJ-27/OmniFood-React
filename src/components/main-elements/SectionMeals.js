import mealData from '../../data'
import { makeStyles } from '@material-ui/core/styles';


const useMealPicStyles = makeStyles({
    imgContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        width: '100%',
        fontSize: '0'
    },
    mealPhotoLi: {
        width: '25%'
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
       transition: 'transform 0.5s, opacity 0.5s'
    }
})

const mealpicData = mealData;

const SectionMeals = () => {

    const classes = useMealPicStyles();

    return (
        <section className="section-meals">
            <ul className={classes.imgContainer}>
                {mealpicData.map(({id, pic, alt}) => 
                <li key={id} className={classes.mealPhotoLi}>
                    <figure className={classes.mealPhotoFigure}>
                        <img className={classes.img} src={pic} alt={alt} />
                    </figure> 
                </li>
                )} 
            </ul>
        </section>
    );
}

export default SectionMeals;