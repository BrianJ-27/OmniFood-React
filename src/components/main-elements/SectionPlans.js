import { planInfo } from "../../data";
import { IoCheckmarkSharp } from "react-icons/io5";
import { makeStyles } from '@material-ui/core/styles';

const usePlanStyles = makeStyles({
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1140px',
    margin: '1em auto',
  },
  topPlanBox: {
    padding: '1em',
    borderBottom: '1px solid #e8e8e8',
  },
  planPrice: {
    fontSize: '300%',
    marginBottom: '5px',
    fontWeight: '100',
    color: '#17cf45'
  },
  middleDetailsBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '1em',
    borderBottom: '1px solid #e8e8e8',
  },
  bottomBtnBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5em'
  },
  iconSmall: {
    color: '#17cf45',
    display: 'inline-block',
    width: '30px',
    fontSize: '120%',
    marginRight: '-5px',
    lineHeight: '120%',
    verticalAlign: 'middle',
    marginTop: '-5px'
  },
  signUpBtn: {
    background: '#17cf45',
    textDecoration: 'none',
    color: '#fff',
    padding: '.8em',
    borderRadius: '200px'
  }
})

const SectionPlans = () => {

  const classes = usePlanStyles()

  return (
    <section style={{ background: 'rgb(244, 244, 244'}} id="plans">
      <div className="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div className={classes.flexRow}>
        {planInfo.map(
          ({ id, type, price, term, mealDescrptn, deal1, deal2, deal3, deal4, link }) => (
            <div style={{background: '#fff'}} key={id}>
              <div className="plan-box js--wp-4">
                <div className={classes.topPlanBox}>
                  <h3>{type}</h3>
                  <p className={classes.planPrice}>
                    {price}
                    <span style={{fontSize: '45%', fontWeight: '300'}}>{term}</span>
                  </p>
                  <p className="plan-price-meal">{mealDescrptn}</p>
                </div>
                <div className={classes.middleDetailsBox}>
                  <ul>
                    <li style={{marginBottom: '1em'}}>
                      <IoCheckmarkSharp className={classes.iconSmall} />
                      {deal1}
                    </li>
                    <li style={{marginBottom: '1em'}}>
                      <IoCheckmarkSharp className={classes.iconSmall} />
                      {deal2}
                    </li>
                    <li style={{marginBottom: '1em'}}>
                      <IoCheckmarkSharp className={classes.iconSmall} />
                      {deal3}
                    </li>
                    <li style={{marginBottom: '1em'}}>
                      <IoCheckmarkSharp className={classes.iconSmall} />
                      {deal4}
                    </li>
                  </ul>
                </div>
                <div className={classes.bottomBtnBox}>
                  <a href="#d" className={classes.signUpBtn}>
                    {link}
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SectionPlans;
