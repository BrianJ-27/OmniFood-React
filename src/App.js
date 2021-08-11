import './scss/styles.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { theme } from './theme';




const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Header/>
          <Main/>
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
