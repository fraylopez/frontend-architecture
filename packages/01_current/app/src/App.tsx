import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Home } from "./modules/home/containers/Home";
import { Layout } from "./modules/layout/Layout";
import { MultiScreen1 } from "./modules/multi-screen/containers/MultiScreen1";
import { MultiScreen2 } from "./modules/multi-screen/containers/MultiScreen2";
import { Section1 } from "./modules/section1/containers/Section1";

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/multi-screen1" element={<MultiScreen1 />} />
          <Route path="/multi-screen2" element={<MultiScreen2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
