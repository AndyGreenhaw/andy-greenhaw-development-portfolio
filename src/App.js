import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyPortfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar/Navbar.js"

import "./App.css"

function App() {

  return(
    <Router>
      <div className="container-fluid">
      <div className="navbarSection">
        <Navbar />
      </div>
      <div className="mainSection">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/andy-greenhaw-development" component={Homepage} />

          {/* NON NAV PAGES */}
          <Route exact path="/portfolio" component={MyPortfolio} />
      </div>
      </div>
    </Router>
  )
}

export default App;