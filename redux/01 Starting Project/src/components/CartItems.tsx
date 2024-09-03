import { useCartDispatch, useCartSelector } from "../hooks";
import { type CartItem, addToCart, removeFromCart } from "../store/cart-slice.ts"

export default function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items)
  const dispatch = useCartDispatch()
  const totalPrice = cartItems.reduce((val, item) => val + item.price + item.quantity, 0)
  const formattedTotalPrice = totalPrice.toFixed(2)
  const handleAddToCart = (items: CartItem) => {
    dispatch(addToCart(items))
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div id="cart">
      {cartItems.length === 0 ? (
        <p>No items in cart!</p>
      ) : (
        <>
          <ul id="cart-items">

            {cartItems.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;

              return (
                <li key={item.id}>
                  <div>
                    <span>{item.title}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                </li>
              );
            })}

          </ul>

          <p id="cart-total-price">
            Cart Total: <strong>Rs {formattedTotalPrice}</strong>
          </p>
        </>
      )}



    </div>
  );
}
