export const handleSum = (cart) => {
  let sum = 0;
  for (let { amount, price } of cart.values()) {
    sum += parseFloat(price * amount);
  }
  return Math.round(sum * 100) / 100;
};
