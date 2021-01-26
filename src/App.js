import Homepage from "./pages/Homepage";
import MyPortfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css"

function App() {

  return(
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container-fluid">
        <div className="navbarSection">
          <Navbar />
        </div>
        <div className="mainSection">
          <Switch>
            <Route exact path="/" component={Homepage} />
            
            {/* <Route exact path="/andy-greenhaw-development-portfolio" component={Homepage} /> */}

            {/* NON NAV PAGES */}
            <Route path="/portfolio" component={MyPortfolio} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;