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
        <Route exact path="/" component={Main}/>
        <Route path="/HowItWorks" component={HowItWorks}/>
        <Route path="/OurCities" component={OurCities}/>
        <Route path="/FoodDelivery" component={FoodDelivery}/>
        <Route path="/ContactPage" component={ContactPage}/>   
      </Switch>
      <Footer />
    </>
  );
};

export default App;
