import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

  // root: 'body',
  // autoShow: true,
  // disablePageInteraction: true,
  // hideFromBots: true,
  // mode: 'opt-in',
  // revision: 0,

  cookie: {
    name: 'cc_cookie',
    // domain: location.hostname,
    // path: '/',
    // sameSite: "Lax",
    // expiresAfterDays: 365,
  },

  // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
  guiOptions: {
    consentModal: {
      layout: 'cloud inline',
      position: 'bottom center',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },

  onFirstConsent: ({ cookie }) => {
    console.log('onFirstConsent fired', cookie);
  },

  onConsent: ({ cookie }) => {
    console.log('onConsent fired!', cookie)
  },

  onChange: ({ changedCategories, changedServices }) => {
    console.log('onChange fired!', changedCategories, changedServices);
  },

  onModalReady: ({ modalName }) => {
    console.log('ready:', modalName);
  },

  onModalShow: ({ modalName }) => {
    console.log('visible:', modalName);
  },

  onModalHide: ({ modalName }) => {
    console.log('hidden:', modalName);
  },

  categories: {
    necessary: {
      enabled: true,  // this category is enabled by default
      readOnly: true  // this category cannot be disabled
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/,   // regex: match all cookies starting with '_ga'
          },
          {
            name: '_gid',   // string: exact cookie name
          }
        ]
      },

      // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
      services: {
        ga: {
          label: 'Google Analytics',
          onAccept: () => { },
          onReject: () => { }
        },
        // youtube: {
        // label: 'Youtube Embed',
        // onAccept: () => { },
        // onReject: () => { }kachlicky 
        // }, 
      }
    },
    ads: {}
  },

  language: {
    default: 'sk',
    translations: {
      sk: {
        consentModal: {
          title: 'Používame súbory cookies.',
          description: 'Táto stránka používa súbory cookie na zlepšenie používateľskej skúsenosti. Používaním našej stránky vyjadrujete súhlas s používaním všetkých súborov cookie v súlade s našimi zásadami používania súborov cookie.',
          acceptAllBtn: 'Prijať všetko',
          acceptNecessaryBtn: 'Odmietnut všetko',
          showPreferencesBtn: 'Zobraziť podrobnosti',
          // closeIconLabel: 'Odmietnut vsetko and close modal',
          footer: `
                        <a href="cookies.pdf" download>Privacy Policy</a>
                    `,
        },
        preferencesModal: {
          title: 'Podrobnosti cookies',
          acceptAllBtn: 'Prijať všetko',
          acceptNecessaryBtn: 'Odmietnuť všetko',
          savePreferencesBtn: 'Prijať selekciu',
          closeIconLabel: 'Zavrieť',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Vaše možnosti ochrany osobných údajov',
              description: `V tomto paneli môžete vyjadriť niektoré preferencie súvisiace so spracovaním vašich osobných údajov. Vyjadrené voľby môžete kedykoľvek skontrolovať a zmeniť tak, že znova zobrazíte tento panel prostredníctvom poskytnutého odkazu. Ak chcete odmietnuť súhlas s konkrétnymi činnosťami spracovania popísanými nižšie, vypnite prepínače alebo použite tlačidlo „Odmietnúť všetko“ a potvrďte, že chcete uložiť svoje voľby.`,
            },
            {
              title: 'Nevyhnutne nevyhnutné',
              description: 'Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky a nemožno ich zakázať.',

              //this field will generate a toggle linked to the 'necessary' category
              linkedCategory: 'necessary'
            },
            {
              title: 'Výkonnosť a analytika',
              description: 'Tieto cookies zhromažďujú informácie o tom, ako používate našu webovú stránku. Všetky údaje sú anonymizované a nie je možné ich použiť na vašu identifikáciu.',
              linkedCategory: 'analytics',
              cookieTable: {
                caption: 'Cookie table',
                headers: {
                  name: 'Cookie',
                  domain: 'Domain',
                  desc: 'Description'
                },
                body: [
                  {
                    name: '_ga',
                    domain: location.hostname,
                    desc: 'Description 1',
                  },
                  {
                    name: '_gid',
                    domain: location.hostname,
                    desc: 'Description 2',
                  }
                ]
              }
            },
            {
              title: 'Zacielenie a reklama',
              description: 'Tieto súbory cookie sa používajú na to, aby boli reklamné správy relevantnejšie pre vás a vaše záujmy. Zámerom je zobrazovať reklamy, ktoré sú relevantné a pútavé pre jednotlivých používateľov, a tým hodnotnejšie pre vydavateľov a inzerentov tretích strán.',
              linkedCategory: 'ads',
            },
            {
              title: 'Viac informácií',
              description: 'V prípade akýchkoľvek otázok týkajúcich sa mojich zásad týkajúcich sa súborov cookie a vašich možností, prosím <a href="#contact-page">kontaktujte nás</a>'
            }
          ]
        }
      }
    }
  }
});