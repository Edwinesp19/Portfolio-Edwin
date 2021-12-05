const btn = document.querySelector(".btn_darkmode");
const icon = document.querySelector(".icon-mode");

btn.addEventListener("click", () => {
  console.log(icon);
  if (icon.getAttribute("src") === "img/sun.svg") {
    icon.setAttribute("src", "img/icon-darkmode.svg");
  } else {
    icon.setAttribute("src", "img/sun.svg");
  }
});
