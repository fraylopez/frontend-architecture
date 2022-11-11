import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import { Cart } from "./modules/cart/Cart";
import { CatalogScreen } from "./modules/catalog/CatalogScreen";
import { Home } from "./modules/home/Home";
import { Layout } from "./modules/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<CatalogScreen />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
