import "./scss/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
