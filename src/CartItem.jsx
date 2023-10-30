import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';
import {
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_ITEM,
  UPDATE_SUM,
} from '../utils/actions';
import { useEffect } from 'react';
const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    return () => dispatch({ type: UPDATE_SUM });
  }, [amount]);

  const handleDecreaseAmount = () => {
    if (amount < 2) {
      dispatch({ type: REMOVE_ITEM, payload: { id } });
      return;
    }
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button
          className="remove-btn"
          onClick={() => dispatch({ type: REMOVE_ITEM, payload: { id } })}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch({ type: INCREASE_AMOUNT, payload: { id } })}
        >
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={handleDecreaseAmount}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
