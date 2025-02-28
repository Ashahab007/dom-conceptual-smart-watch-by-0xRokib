const ringButton = document.querySelectorAll(".ring-button");
/* const ringButtonId = document.getElementById("purple-color");
console.log(ringButtonId.classList); */

for (let i = 0; i < ringButton.length; i++) {
  const ringBtn = ringButton[i];
  const productImageId = document.getElementById("product-image");
  console.log(ringBtn);
  //   purple color add করার আগে এই loop এ check করে নেওয়া হছে যদি purple color থাকে তাহলে সেটা remove করে দিবে। এবং নতুন color set করে দিবে ।
  ringBtn.addEventListener("click", function (event) {
    let color = event.target.id.replace("-color", ""); //replacing the '-color' name from purple-color for dynamically use in productImageId.src.
    console.log(color);

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
      button.classList.add("border-purple-400");
    } else {
      button.classList.remove("border-purple-400");
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
    console.log(currentAmount);
    displayedQuantity.innerText = currentAmount;
  });
}
