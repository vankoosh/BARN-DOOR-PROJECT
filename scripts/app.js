const logo = document.querySelector("#logo");
const offer = document.querySelector("#offer");
const form = document.querySelector(".contact-form__inputs");

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

const uhlikoveSystemyArray = ["Vyberte systém, o ktorý máte záujem",
  "Systém RLD 08", "Systém RLD 08 Biely", "Systém RLD 09", "Systém RLD 10", "Systém RLD 11", "Systém RLD 12", "Systém RLD 13", "Systém RLD 14", "Systém RLD 16", "Systém RLD 17", "Systém RLD 18", "Systém RLD 19", "Systém RLD 20", "Systém RLD 21", "Systém RLD 22", "Systém RLD 23", "Systém RLD 24", "Systém RLD 25", "Systém RLD 26", "Systém RLD 27", "Systém RLD 28", "Systém RLD 29", "Rebrik R1"]

const nerezSystemyArray = ["Systém S8", "Systém S9", "Systém S11", "Systém S12", "Systém S13", "Systém S15", "Systém S17", "Systém S18"]

const patinaSystemyArray = ["Patina HRDZA", "Patina ZELENA", "Patina BRONZ", "Patina BRONZ P5"]

const skloSystemyArray = ["Systém G1", "Systém G2", "Systém G3"]

const miniSystemyArray = ["Mini 1", "Mini 2", "Mini 3", "Mini 4", "Mini 5", "Mini 6"]

const bypassSystemyArray = ["Systém BYPASS"]

const mergedArray = [...uhlikoveSystemyArray, ...nerezSystemyArray, ...patinaSystemyArray, ...skloSystemyArray, ...miniSystemyArray, ...bypassSystemyArray]

if (form) {
  const selectElement = document.createElement('select');
  selectElement.name = 'systemy';
  selectElement.id = 'systemy';

  mergedArray.forEach((element, index) => {
    if (index == 0) {
      const optionElement = document.createElement('option');
      optionElement.value = '';
      optionElement.innerText = `${element}`;
      optionElement.disabled = true;
      optionElement.selected = true;
      selectElement.appendChild(optionElement);
    } else {
      const optionElement = document.createElement('option');
      optionElement.value = element;
      optionElement.innerText = `${element}`;
      selectElement.appendChild(optionElement);
    }
  });

  form.appendChild(selectElement);
}