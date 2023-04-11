// 1. Select the "Add to Cart" button
const addToCartBtn = document.querySelector(".add-to-cart");

// 2. Select the cart
const cart = document.querySelector(".cart ul");

// 3. Initialize the cart total
let cartTotal = 0;

// 4. Add a click event listener to the "Add to Cart" button
addToCartBtn.addEventListener("click", () => {
  // 5. Get the product information
  const productTitle = document.querySelector(".product h2").textContent;
  const productPrice = parseFloat(document.querySelector(".product p").textContent.slice(1));

  // 6. Create a new cart item
  cart.insertAdjacentHTML("beforeend", `<li><span>${productTitle}</span><span>$${productPrice.toFixed(2)}</span></li>`);

  // 7. Add the cart item to the cart
  cartTotal += productPrice;

  // 8. Update the cart total
  document.querySelector(".cart p").textContent = `Total: $${cartTotal.toFixed(2)}`;
});
