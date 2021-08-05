import { makeStyles } from '@material-ui/core/styles';
import { IoInfiniteOutline, IoStopwatchOutline, IoNutritionOutline, IoCartOutline} from "react-icons/io5";

const useFeatureStyles = makeStyles({
  sectionFeatures: {
    marginBottom: '2em',
    maxWidth: '1140px',
    margin: '1em auto',
    boxSizing: 'border-box'
  },
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1140px',
    margin: '1em auto'
  },
  longCopy: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
    margin: '0 auto',
    paddingBottom: '2em'
  },
  col: {
    padding: '.5em',
    maxWidth: '275px'
  },
  iconBig: {
    fontSize: '350%',
    display: 'block',
    color: '#17cf45'
  }
})

const SectionFeatures = () => {
  const classes = useFeatureStyles();
    return (
        <section className={classes.sectionFeatures} id="features">
        <div className={classes.row}>
          <h2>Get food fast &mdash; not fast food</h2>
          <p className={classes.longCopy}>
            Hello, we&rsquo;re Omnifood, your new premium food delivery service. We know you&rsquo;re always busy. No time for cooking. So let us take care of that, we&rsquo;re really good at it, we promise!
          </p>
        </div>
        <div className={classes.flexRow}>
            <div className={classes.col}>
              <IoInfiniteOutline className={classes.iconBig}/>
              {/* <i className="ion-ios-infinite-outline icon-big"></i> */}
              <h3>Up to 365 days/year</h3>
              <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
            </div>
            <div className={classes.col}>
              <IoStopwatchOutline className={classes.iconBig}/>
          {/* <i className="ion-ios-stopwatch-outline icon-big"></i> */}
              <h3>Ready in 20 minutes</h3>
              <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
            </div>
            <div className={classes.col}>
              <IoNutritionOutline className={classes.iconBig}/>
              {/* <i className="ion-ios-nutrition-outline icon-big"></i> */}
              <h3>100% organic</h3>
              <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
            </div>
            <div className={classes.col}>
              <IoCartOutline className={classes.iconBig}/>
              {/* <i className="ion-ios-cart-outline icon-big"></i> */}
              <h3>Order anything</h3>
              <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you</p>
            </div>
        </div>
      </section>
    )
}

export default SectionFeatures;