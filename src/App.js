import React, { /* useState, */ useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Jamie de Lange"
  }, [])
  
  /* const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false); */

  return (
    <Router>
      <body className="">
        <Navigation
          /* aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected} */
          
        ></Navigation>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer></Footer>
      </body>
    </Router>
  );
}

export default App;