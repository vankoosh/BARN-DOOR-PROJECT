const logo = document.querySelector("#logo");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll);
  logoDown(scroll);
});

function logoDown(scroll) {
  if (scroll >= 22) {
    logo.style.top = "0rem";
  }
  else {
    logo.style.top = "-0.6rem";
  }
}


