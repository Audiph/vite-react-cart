import { useEffect } from 'react';
import { useGlobalContext } from '../utils/context';
import CartItem from './CartItem';
import { CLEAR_CART, UPDATE_SUM } from '../utils/actions';
const CartContainer = () => {
  let cartItems2 = [];
  const { cart, sum, dispatch } = useGlobalContext();

  useEffect(() => {
    return () => dispatch({ type: UPDATE_SUM });
  }, [cart]);

  if (cart?.size === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart?.forEach((value) => {
          cartItems2.push(value);
        })}
        {cartItems2.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${sum.toString()}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
