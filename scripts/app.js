import getMergedArray, {
  uhlikoveSystemy,
  nerezSystemy,
  bypassSystemy,
  doplnky,
  miniSystemy,
  patinaSystemy,
  skloSystemy
} from "./productArrays.js";

const logo = document.querySelector("#logo");
const offer = document.querySelector("#offer");
const formInputsContainer = document.querySelector(".contact-form__inputs");
const productCards = document.querySelectorAll(".card-sys");
const sysId = document.querySelector('main')?.dataset.sysId ?? false;

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  logo.style.top = scroll >= 22 ? "0rem" : "-0.6rem";
});

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

if (formInputsContainer) {
  const systemyDropdown = document.createElement('select');
  const url = new URL(window.location.href)
  const selectedSystem = url.searchParams.get('sys') ?? false;
  const mergedSystemyArray = getMergedArray() ?? [];

  systemyDropdown.name = 'systemy';
  systemyDropdown.id = 'systemy';

  mergedSystemyArray.forEach((system, index) => {
    const newSystemsDropdownOption = document.createElement('option');
    newSystemsDropdownOption.value = system;
    newSystemsDropdownOption.innerText = `${system}`;
    systemyDropdown.appendChild(newSystemsDropdownOption);
  });

  formInputsContainer.appendChild(systemyDropdown);

  if (selectedSystem) {
    let selectedIndex;
    Array.from(systemyDropdown.children).forEach((option, index) => {
      option.value == selectedSystem ? selectedIndex = index : null
    })
    systemyDropdown.selectedIndex = selectedIndex;
  }
}

if (productCards && sysId) {
  let system;

  switch (sysId) {
    case 'uhlikoveSystemy':
      system = uhlikoveSystemy; break;
    case 'nerezSystemy':
      system = nerezSystemy; break;
    case 'patinaSystemy':
      system = patinaSystemy; break;
    case 'skloSystemy':
      system = skloSystemy; break;
    case 'miniSystemy':
      system = miniSystemy; break;
    case 'bypassSystemy':
      system = bypassSystemy; break;
    case 'doplnky':
      system = doplnky; break;
    default:
      break;
  }

  productCards.forEach((card, index) => {
    const bookButton = document.createElement('a')
    const url = window.location.origin

    if (url == 'https://vankoosh.github.io') {
      bookButton.setAttribute('href', '../index.html?sys=' + system[index] + '#contact-form')
    } else {
      const buttonURL = new URL(window.location.origin);
      buttonURL.searchParams.set('sys', system[index]);
      buttonURL.hash = '#contact-form'
      bookButton.setAttribute('href', buttonURL)
    }

    bookButton.setAttribute('class', 'card-sys__book-button');
    bookButton.setAttribute('data-sys-id', system[index])
    bookButton.innerText = 'Objednať'

    const textContainer = card.querySelector('.card-sys__text')
    textContainer.appendChild(bookButton)
  })
}