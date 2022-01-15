export function cartItemcount(cartItems) {
    const counts = {};

    cartItems.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });

    return counts
}

