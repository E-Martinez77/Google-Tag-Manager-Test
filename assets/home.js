function gtmEvents() {
  let btns = document.querySelectorAll("button");

  dataLayer.push({
    event: "pageView",
    ecommerce: {
      product_id: "000001",
    },
  });

  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("add-to-cart")) {
      btns[i].addEventListener("click", function () {
        dataLayer.push({
          event: "addToCart",
          ecommmerce: {
            price: this.dataset.price,
            quantity: this.dataset.qty,
            category: this.dataset.category,
            product_id: this.dataset.product_id,
          },
        });
      });
    } else if (btns[i].classList.contains("lead")) {
      btns[i].addEventListener("click", function () {
        dataLayer.push({
          event: "lead",
          lead_type: this.dataset.signup,
        });
      });
    }
  }

  let forms = document.querySelectorAll(".needs-validation");

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener(
      "submit",
      function (e) {
        if (!forms[i].checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          e.preventDefault();
          dataLayer.push({ event: "signUp", lead_type: "form-submission" });
        }
        forms[i].classList.add("was-validated");
      },
      false
    );
  }

  console.log("GTM Events Loaded.");
}

window.addEventListener("load", gtmEvents);
