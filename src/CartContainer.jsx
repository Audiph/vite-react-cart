import { useEffect } from 'react';
import { useGlobalContext } from '../utils/context';
import CartItem from './CartItem';
import { UPDATE_SUM } from '../utils/actions';
const CartContainer = () => {
  const { cart, sum, dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: UPDATE_SUM });
  }, [cart]);

  if (cart.length === 0) {
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
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
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
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
