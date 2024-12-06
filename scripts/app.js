const logo = document.querySelector("#logo");
const offer = document.querySelector("#offer");
const form = document.querySelector(".contact-form__inputs");
const productCards = document.querySelectorAll(".card-sys");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  logoDown(scroll);
});

function logoDown(scroll) {
  logo.style.top = scroll >= 22 ? "0rem" : "-0.6rem";
}

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return;

  n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };

  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '787180756425947');
fbq('track', 'PageView');

const uhlikoveSystemy = [
  "Systém RLD 08", "Systém RLD 08 Biely", "Systém RLD 09", "Systém RLD 10", "Systém RLD 11", "Systém RLD 12", "Systém RLD 13", "Systém RLD 14", "Systém RLD 16", "Systém RLD 17", "Systém RLD 18", "Systém RLD 19", "Systém RLD 20", "Systém RLD 21", "Systém RLD 22", "Systém RLD 23", "Systém RLD 24", "Systém RLD 25", "Systém RLD 26", "Systém RLD 27", "Systém RLD 28", "Systém RLD 29", "Rebrik R1"]

const nerezSystemy = ["Systém S8", "Systém S9", "Systém S11", "Systém S12", "Systém S13", "Systém S15", "Systém S17", "Systém S18"]

const patinaSystemy = ["Patina HRDZA", "Patina ZELENA", "Patina BRONZ", "Patina BRONZ P5"]

const skloSystemy = ["Systém G1", "Systém G2", "Systém G3"]

const miniSystemy = ["Mini 1", "Mini 2", "Mini 3", "Mini 4", "Mini 5", "Mini 6"]

const bypassSystemy = ["Systém BYPASS"]

const mergedArray = [
  "Vyberte systém, o ktorý máte záujem",
  ...uhlikoveSystemy,
  ...nerezSystemy,
  ...patinaSystemy,
  ...skloSystemy,
  ...miniSystemy,
  ...bypassSystemy
]

if (form) {
  const selectElement = document.createElement('select');
  const fromQuery = window.location.href.indexOf('?') + 5;
  const toQuery = window.location.href.indexOf('#');
  const selectedSystem = decodeURIComponent(window.location.href.slice(fromQuery, toQuery));

  selectElement.name = 'systemy';
  selectElement.id = 'systemy';

  mergedArray.forEach((element, index) => {
    const optionElement = document.createElement('option');
    optionElement.value = element;
    optionElement.innerText = `${element}`;
    selectElement.appendChild(optionElement);
  });

  if (selectedSystem) {
    let selectedIndex;
    const selectedChoice = Array.from(selectElement.children).forEach((e, index) => {
      if (e.value == selectedSystem) {
        selectedIndex = index
      }
    })
    selectElement.selectedIndex = selectedIndex;
  }
  form.appendChild(selectElement);
}

if (productCards) {
  let system;
  const sysId = document.querySelector('main').dataset.sysId
  console.log(sysId);

  switch (sysId) {
    case 'uhlikoveSystemy':
      system = uhlikoveSystemy;
      console.log(system);
      break;
    case 'nerezSystemy':
      system = nerezSystemy;
      console.log(system);
      break;
    case 'patinaSystemy':
      system = patinaSystemy;
      console.log(system);
      break;
    case 'skloSystemy':
      system = skloSystemy;
      console.log(system);
      break;
    case 'bypassSystemy':
      system = bypassSystemy;
      console.log(system);
      break;
    default:
      break;
  }
  productCards.forEach((card, index) => {
    const textContainer = card.querySelector('.card-sys__text')
    const bookButton = document.createElement('a');
    bookButton.setAttribute('class', 'card-sys__book-button');
    bookButton.setAttribute('href', 'http://127.0.0.1:5500/index.html?sys=' + system[index] + '#contact-form');
    bookButton.setAttribute('data-sys-id', system[index]);
    bookButton.innerText = 'Objednať'
    textContainer.appendChild(bookButton);
  })
}