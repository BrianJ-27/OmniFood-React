import { makeStyles } from '@material-ui/core/styles';

const useHeroBoxStyles = makeStyles({
    HeroBoxContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      textAlign: 'left',
      paddingTop: '2em'
    },  
    Headline: {
      textTransform: 'uppercase',
      fontWeight: '300',
      color: '#fff',
    },
    BtnContainer: {
    
    },
    HeroBtn: {
     background: '#17cf45',
     outline: 'none', 
     padding: '1em', 
     color: '#fff', 
     marginRight: '1em',
     borderRadius: '150px',
     border: 'none',
     cursor: 'pointer'
    }
})

const HeroBx = () => {

const classes = useHeroBoxStyles();

    return (
        <div className={classes.HeroBoxContainer}>
        <h1 className={classes.Headline}>
          Goodbye Junk Food
          <br /> Hello super healthy meals.
        </h1>
        <div className={classes.BtnContainer}>
          <button type='button' className={classes.HeroBtn} href="#h">
            I&rsquo;m hungry
          </button>
          <button className={classes.HeroBtn} href="#s">
            Show me more
          </button>
        </div>
      </div>
    )
}

export default HeroBx;