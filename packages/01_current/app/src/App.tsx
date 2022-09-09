import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './App.css';
import { Home } from "./modules/home/containers/Home";
import { MultiScreen1 } from "./modules/multi-screen/containers/MultiScreen1";
import { MultiScreen2 } from "./modules/multi-screen/containers/MultiScreen2";
import { Section1 } from "./modules/section1/containers/Section1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/section1">Section1</Link>
            </li>
            <li>
              <Link to="/multi-screen1">MultiScreen1</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={  <Home />}/>
          <Route path="/section1" element={  <Section1 />}/>
          <Route path="/multi-screen1" element={  <MultiScreen1 />}/>
          <Route path="/multi-screen2" element={  <MultiScreen2 />}/>
        </Routes>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
