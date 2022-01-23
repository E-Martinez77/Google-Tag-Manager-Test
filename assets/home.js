// const atcPush = () => {};

// const atcBtn = document.querySelector("#atc");

// atcBtn.addEventListener("click", () => {
//   dataLayer.push({
//     "Order Value": "1.00",
//     Currency: "USD",
//     "Order Quantity": "5",
//     "Order ID": "0-000001",
//     "Product ID": "0-000001",
//     "Product Category": "Test_Cat",
//   });

//   console.log("Push Event - Add To Cart");
// });

let atc = document.querySelectorAll("button");

for (let i = 0; i < atc.length; i++) {
  if (atc[i].dataset.hook == "add-to-cart") {
    atc[i].addEventListener(
      "click",
      function () {
        console.log("test");
      },
      { passive: true }
    );
  }
}

document.querySelectorAll("button")[8].addEventListener(
  "click",
  function () {
    console.log("test");
  },
  { passive: true }
);
document.querySelector("button")[8].addEventListener(
  "click",
  function () {
    console.log("test");
  },
  { passive: true }
);
