// LOGO IN NAVBAR MOVES WHEN SCROLLED DOWN
const logo = document.querySelector("#logo");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  /* console.log(scroll); */
  logoDown(scroll);
});

function logoDown(scroll) {
  if (scroll >= 22) {
    logo.style.top = "0rem";
  } else {
    logo.style.top = "-0.6rem";
  }
}
// CHANGE OFFER BANNER ACCORDING TO VIEWPORT SIZE
// PURELY FOR EXCERCISE PURPOSES, EASIER WAY TO DO THIS IS THRU @media QUERY

let windowWidth = window.innerWidth;
const offer = document.querySelector("#offer");

window.onload = (e) => {
  if (windowWidth >= 1200) {
    offer.src = "UTILITIES/IMGS/offer-banner.jpg";
  } else if (windowWidth < 1200) {
    offer.src = "UTILITIES/IMGS/offer-banner1.jpg";
  }
};

window.onresize = (e) => {
  windowWidth = this.window.innerWidth;
  console.log(windowWidth);
  if (windowWidth >= 1200) {
    offer.src = "UTILITIES/IMGS/offer-banner.jpg";
  } else if (windowWidth < 1200) {
    offer.src = "UTILITIES/IMGS/offer-banner1.jpg";
  }
};
