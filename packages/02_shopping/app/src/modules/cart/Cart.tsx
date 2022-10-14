import { CartUIStore } from "./CartUIStore";
import {gGet} from "@goinapp/gshell-native"
export const Cart = () => {
  const store = gGet(CartUIStore)
  const products = store.getProducts();
  const handleCheckout = () => {
    store.checkout()
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart__products">
        {products.map((product) => (
          <div className="cart__product" key={product.id}>
            <div className="cart__product__name">{product.name}</div>
            <div className="cart__product__price">{product.price}</div>
            <div className="cart__product__quantity">{product.quantity}</div>
          </div>
        ))}
      </div>
      <div className="cart__total">
        <div className="cart__total__label">Total</div>
        <div className="cart__total__value">{store.getTotal()}</div>
      </div>
      <div className="cart__actions">
        <button className="cart__actions__checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>

  );
};
