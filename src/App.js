import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router";
import ContactPage from "./components/pages/ContactUs";
import HowItWorks from "./components/pages/HowItWorks";
import OurCities from "./components/pages/OurCities";
import FoodDelivery from "./components/pages/FoodDelivery";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ContactPage">
          <ContactPage />
        </Route>
        <Route path="/HowItWorks">
          <HowItWorks />
        </Route>
        <Route path="/OurCities">
          <OurCities />
        </Route>
        <Route path="/FoodDelivery">
          <FoodDelivery />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
