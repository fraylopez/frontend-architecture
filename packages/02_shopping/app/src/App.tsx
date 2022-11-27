import "./App.css";
import { Layout } from "./modules/layout/Layout";
import { navigation, Screen } from "@goinapp/logic/src/shop/_shared/domain/Navigation";
import { Cart } from "./modules/cart/Cart";
import { CatalogScreen } from "./modules/catalog/CatalogScreen";
import { Home } from "./modules/home/Home";
import { WalletScreen } from "./modules/wallet/walletScreen/WalletScreen";
import { useState } from "react";

const reactMapScreens = {
  [Screen.HOME]: <Home />,
  [Screen.CATALOG]: <CatalogScreen />,
  [Screen.CART]: <Cart />,
  [Screen.WALLET]: <WalletScreen />,
  [Screen.PRODUCT_DETAIL]: <div>Not implemented</div>,
}

function App() {
  const [screen, setScreen] = useState<Screen>(navigation.getScreen());
  navigation.onChangeScreen((newScreen: Screen) => {
    setScreen(newScreen);
  });

  return (
    <div className="root">
      <Layout>
        {reactMapScreens[screen]}
      </Layout>
    </div>
  );
}

export default App;
