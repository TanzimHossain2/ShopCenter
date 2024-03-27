export function calculateTotalPrice(price, discountPercentage) {

    const discountAmount = price * (discountPercentage / 100);
    const totalPrice = price - discountAmount;
    return totalPrice.toFixed(2);
}
