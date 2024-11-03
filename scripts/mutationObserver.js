const btn = document.querySelector('.data-layer')

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      // A new item has been pushed to the dataLayer
      // const newDataLayer = mutation.target.dataLayer;
      // Process the newDataLayer as needed
    }
  });
});

// observer.observe(window, { childList: true, subtree: true });  
