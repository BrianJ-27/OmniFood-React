import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import contactPage from "./components/header-elements/ContactUs";
import howItWorks from "./components/header-elements/HowItWorks";
import ourCities from "./components/header-elements/OurCities";
import foodDelivery from "./components/header-elements/FoodDelivery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="./components/header-elements/FoodDelivery.js" component={foodDelivery} />
        <Route path="./components/header-elements/HowItWorks.js" component={howItWorks} />
        <Route path="./components/header-elements/OurCities.js" component={ourCities} />
        <Route path="./components/header-elements/ContactUs.js" component={contactPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
