const ringButton = document.querySelectorAll(".ring-button");
/* const ringButtonId = document.getElementById("purple-color");
console.log(ringButtonId.classList); */

for (let i = 0; i < ringButton.length; i++) {
  const ringBtn = ringButton[i];
  const productImageId = document.getElementById("product-image");
  // console.log(ringBtn);
  ringBtn.addEventListener("click", function (event) {
    let color = event.target.id.replace("-color", ""); //replacing the '-color' name from purple-color for dynamically use in productImageId.src.
    console.log(color);

    //   purple color add করার আগে এই loop এ check করে নেওয়া হছে যদি purple color থাকে তাহলে সেটা remove করে দিবে। এবং নতুন color set করে দিবে ।
    for (let j = 0; j < ringButton.length; j++) {
      ringButton[j].classList.remove("border-purple-600");
      ringButton[j].classList.add("border-gray-300");
    }
    // adding purple color and remove gray color
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    productImageId.src = "../images/" + color + ".png";
  });
}
// alert();

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    let button = document.getElementById("size-" + sizes[i]);
    let element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}

const quantityIncreDecreBtn = document.querySelectorAll(".quantity-button");
for (let i = 0; i < quantityIncreDecreBtn.length; i++) {
  // console.log(quantityIncreDecreBtn[i]);
  quantityIncreDecreBtn[i].addEventListener("click", function (event) {
    let amount = event.target.innerText === "+" ? 1 : -1;
    // console.log(amount);
    let displayedQuantity = document.getElementById("quantity");
    let convertedDisplayQuantity = parseInt(displayedQuantity.innerText);
    let currentAmount = Math.max(0, amount + convertedDisplayQuantity);
    // console.log(currentAmount);
    displayedQuantity.innerText = currentAmount; //set the current amount to the displayedQuantity
  });
}

let amount = 0;
let cartItem = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  document.getElementById("checkout-container").classList.remove("hidden");
  let quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity > 0) {
    amount = amount + quantity;
    document.getElementById("cart-count").innerText = amount;
    let selectedColorButton = document.querySelector(
      "button.border-purple-600.w-6"
    );
    let selectedColor = selectedColorButton.id.split("-")[0];
    console.log(selectedColor);

    let selectedSizeButton = document.querySelector(
      "button.border-purple-600:not(.w-6)"
    );
    let selectedSize = selectedSizeButton.innerText.split(" ")[0];
    console.log(selectedSize);

    let selectedPrice = selectedSizeButton.innerText
      .split(" ")[1]
      .split("$")[1];
    console.log(selectedPrice);

    let selectedProductName = document.querySelector("h1").innerText;

    console.log(selectedProductName);

    let productImage = "../images" + selectedColor + ".png";
    console.log(productImage);
    const selectedProduct = {
      productName: selectedProductName,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: selectedPrice * quantity,
    };
    cartItem.push(selectedProduct);
    console.log(cartItem);
  } else {
    alert("Please add quantity");
    document.getElementById("checkout-container").classList.add("hidden");
  }
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  document.getElementById("cart-modal").classList.remove("hidden");
  const cartItem = document.getElementById("cart-items");
  for (let i = 0; i < cartItem.length; i++) {
    let item = cartItem[i];
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>
     <div class="flex">
     <img src="" alt="" srcset="">
     <span>${item.productName}</span>
     </div>
    </td>
    `;

    cartItem.appendChild(row);
  }
});
