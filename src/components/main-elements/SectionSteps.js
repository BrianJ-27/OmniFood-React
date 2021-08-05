import { makeStyles } from '@material-ui/core/styles'
import phoneImg from '../../img/app-iPhone.png'
import appStoreImg from '../../img/download-app.svg'
import androidStoreImg from '../../img/download-app-android.png'

const useStepStyles = makeStyles({
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1140px',
    margin: '1em auto'
  },
  col: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 auto'
  },
  appScreen: {
    width: '50%'
  },
  iconDiv: {
    display: 'flex',
    width: '65%'
  },
  iconApp: {
    height: '50px',
    width: 'auto',
    marginRight: '1em'
  },
  stepNum: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#17cf45',
    border: '2px solid #17cf45',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '150%',
    padding: '1.5em'
  },
  workStep: {
    width: '65%'
  },
  workStepCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const SectionSteps = () => {

  const classes = useStepStyles();

  return (
    <section style={{background: '#f4f4f4'}} id="works">
      <div className="row">
        <h2>How it works - Simple as 1, 2, 3</h2>
      </div>
      <div className={classes.flexRow}>
          <div className={classes.col}>
            <img src={phoneImg} alt="Omnifood app on iPhone" className={classes.appScreen}/>
      </div>
          <div className={classes.workStepCol}>
            <div className={classes.workStep}>
              <div className={classes.stepNum}>1</div>
                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
           </div>
            <div className={classes.workStep}>
             <div className={classes.stepNum}>2</div>
                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
            </div>
           <div className={classes.workStep}>
            <div className={classes.stepNum}>3</div>
                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
           </div>
           <div className={classes.iconDiv}>
              <a href="#p" className="btn-app"><img  className={classes.iconApp} src={appStoreImg} alt="App Store Button"/></a>
              <a href="#k" className="btn-app"><img className={classes.iconApp} src={androidStoreImg} alt="Play Store Button"/></a>
            </div>
          </div>
        </div> 
    </section>
  );
};

export default SectionSteps;