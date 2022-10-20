import { CartUIStore } from "./CartUIStore";
import {observer} from "mobx-react";
import {gGet} from "@goinapp/gshell-native"
export const Cart = observer(() => {
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
            <div className="cart__product__name"><b>{product.name}</b></div>
            <div className="cart__product__price">{product.price}€</div>
            <div className="cart__product__quantity">{product.quantity}</div>
            <button className="cart__product__decrease-quantity" onClick={() => store.decreaseQuantity(product.id)}> - </button>
            <button className="cart__product__increase-quantity" onClick={() => store.increaseQuantity(product.id)}> + </button>
          </div>
        ))}
      </div>
      <br /><br />
      <div className="cart__total">
        <div className="cart__total__label">Total</div>
        <div className="cart__total__value">{store.getTotal().toFixed(2)}€</div>
      </div>
      <div className="cart__actions">
        <button className="cart__actions__checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>

  );
});
