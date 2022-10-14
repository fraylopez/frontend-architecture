import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { ProductBrowser } from "./modules/browser/ProductBrowser";
import { Cart } from "./modules/cart/Cart";
import { Home } from "./modules/home/Home";
import { Layout } from "./modules/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductBrowser />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
