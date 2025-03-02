const logo = document.querySelector("#logo");
const offer = document.querySelector("#offer");

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
