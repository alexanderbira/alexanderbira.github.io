import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function startObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          //make all the siblings of the loaded element fade in so that horizontal scrolling doesn't fade in cards
          Array.from(entry.target.parentNode!.children).forEach((i) =>
            i.classList.add("show")
          );
        }
      },
      { threshold: 0.5 }
    );
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  if (hiddenElements.length === 0) {
    //thank you, Safari, for running this function before the elements are loaded
    setTimeout(startObserver, 500);
    return;
  }
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
}

//scroll animations
window.addEventListener("load", startObserver);

//hide the little arrow when the user scrolls down a bit
window.addEventListener("scroll", () => {
  if (window.scrollY < 25) {
    document.getElementById("scrollIndicator")!.style.opacity = "1";
  } else {
    document.getElementById("scrollIndicator")!.style.opacity = "0";
  }
});
