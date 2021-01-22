import Homepage from "./pages/Homepage";
import MyPortfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css"

function App() {

  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container-fluid">
        <div className="navbarSection">
          <Navbar />
        </div>
        <div className="mainSection">
          <Switch>
            <Route exact path="/" component={Homepage} />
            
            {/* <Route exact path="/andy-greenhaw-development-portfolio" component={Homepage} /> */}

            {/* NON NAV PAGES */}
            <Route exact path="/portfolio" component={MyPortfolio} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;