const pic1 = document.querySelector("#carousel__img1");
const pic2 = document.querySelector("#carousel__img2");
const pic3 = document.querySelector("#carousel__img3");
const pic4 = document.querySelector("#carousel__img4");
const pic5 = document.querySelector("#carousel__img5");
const carousel = document.querySelector("#carousel");




const loop = () => {
  pic1.style.zIndex = '1';
  setTimeout(() => { pic2.style.zIndex = "2" }, 2000);
  setTimeout(() => { pic3.style.zIndex = "3" }, 4000);
  setTimeout(() => { pic4.style.zIndex = "4" }, 6000);
  setTimeout(() => { pic5.style.zIndex = "5" }, 8000);
};
  

window.onload = () => {
  loop();
  setInterval(loop, 10000);
};
