function gtmEvents() {
  dataLayer.push({
    event: "purchase",
    eventModel: {
      value: 20,
      currency: "USD",
      quantity: 4,
      orderId: "3234513",
      items: [
        {
          product_id: "434fkdsn4",
          product_category: "All Products",
          product_price: 5.43,
          product_quantity: 5,
        },
        {
          product_id: "55555555523",
          product_category: "All Products",
          product_price: 7.1,
          product_quantity: 5,
        },
        {
          product_id: "0011-2352",
          product_category: "All Products",
          product_price: 10.0,
          product_quantity: 1,
        },
      ],
    },
  });
  console.log("GTM Events Loaded.");
}

window.addEventListener("load", gtmEvents);
