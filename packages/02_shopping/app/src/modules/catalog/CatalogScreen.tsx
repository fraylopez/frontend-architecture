import { gGet } from "@goinapp/gshell-native";


import { CatalogScreenUIStore, ProductWithStars } from "./CatalogScreenUIStore";

export const CatalogScreen = () => {
  const store = gGet(CatalogScreenUIStore);
  const products = store.getAllProducts();
  const handleAddToCart = (product: ProductWithStars) => {
    store.addToCart(product);
  };

  return (
    <div className="catalog">
      <h2>Catalog Screen</h2>
      <div className="catalog__products">
        {products.map((product) => (
          <div className="catalog__product" key={product.id}>
            <div className="catalog__product__name">
              <b>{product.name}</b>
            </div>
            <div className="catalog__product__price">
              Price: {product.price}€
            </div>
            <div className="catalog__product__stock">
              Stock: {product.stock}
            </div>
            <div className="catalog__product__stars">
              Stars: {Array.from("⭐️".repeat(product.stars))}
            </div>
            <button
              className="catalog__product__add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
