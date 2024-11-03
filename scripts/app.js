const logo = document.querySelector("#logo");
const offer = document.querySelector("#offer");
const cookieBanner = document.querySelector(".cookie-banner");
const closeCookieBanner = document.querySelector(".cookie-banner__close");
const isCookieSet = window.localStorage.getItem('barn-door-consent') === 'true';

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  logoDown(scroll);
});

function logoDown(scroll) {
  logo.style.top = scroll >= 22 ? "0rem" : "-0.6rem";
}

if (isCookieSet && cookieBanner) {
  cookieBanner.classList.add('cookie-banner--hidden')
} else if (cookieBanner) {
  closeCookieBanner.addEventListener('click', () => {
    cookieBanner.classList.add('cookie-banner--hidden')
    window.localStorage.setItem('barn-door-consent', 'true')
  })
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