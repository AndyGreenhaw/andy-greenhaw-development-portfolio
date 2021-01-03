import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {

  return(
    <Router>
      <div className="bg">
        <div className="container-fluid">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/andy-greenhaw-react-portfolio" component={Homepage} />
        </div>
      </div>
    </Router>
    )
}

export default App;