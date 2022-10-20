import { gGet } from "@goinapp/gshell-native";
import { Product } from "@goinapp/logic/src/_shared/domain/Product";
import { ProductBrowserUIStore } from "./ProductBrowserUIStore";

export const ProductBrowser = () => {
  const store = gGet(ProductBrowserUIStore);
  const products = store.getAllProducts();
  const handleAddToCart = (product: Product) => {
    store.addToCart(product);
  };

  return (
    <div className="browser">
      <h2>Products</h2>
      <div className="browser__products">
        {products.map((product:Product) => (
          <div className="browser__product" key={product.id}>
            <div className="browser__product__name"><b>{product.name}</b></div>
            <div className="browser__product__price">{product.price}€</div>
            <button
              className="browser__product__add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
