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

//Empire in the air add to cart

let atc = document.querySelectorAll("button");

for (let i = 0; i < atc.length; i++) {
  if (atc[i].dataset.hook == "add-to-cart") {
    atc[i].addEventListener("click", function () {
      console.log("test");
    });
  }
}

//Generic checkout "Any site for header fire"

if (window.location.href.indexOf("checkout") > -1) {
}

parseFloat(document.querySelectorAll("span")[0].textContent.replace("$", ""));

function pintrk() {}

pintrk("track", "AddToCart", {
  value: "",
  currency: "",
  product_id: "",
});

pintrk("track", "checkout", {
  value: "",
  currency: "",
});

/*
Squarespace
*/

/*
Big Commerce

%%GLOBAL_ProductId%%

%%GLOBAL_value%%
%%GLOBAL_CurrencyName%%

https://developer.bigcommerce.com/legacy/blueprint-themes/global-variables
*/

/*
Wix
*/
