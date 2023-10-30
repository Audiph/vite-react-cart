import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';
import { INCREASE_AMOUNT, REMOVE_ITEM } from '../utils/actions';
const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useGlobalContext();
  const increaseAmount = () => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
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
        <button className="amount-btn" onClick={() => increaseAmount()}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => console.log('decrease')}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
