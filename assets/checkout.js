function gtmEvents() {
  dataLayer.push({
    event: "purchase",
  });
  console.log("GTM Events Loaded.");
}

window.addEventListener("load", gtmEvents);
