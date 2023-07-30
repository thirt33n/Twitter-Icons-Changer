// content.js
const replaceTwitterIcon = () => {
    const newPath = "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z";
    const twitterIconSelector = '[aria-label="Twitter"] svg path';
    const customIconUrl = chrome.extension.getURL('cust_icon.svg');
    document.title = "Twitter";
    const newFaviconURL = "https://abs.twimg.com/favicons/twitter.2.ico";
    const faviconLink = document.querySelector('link[rel="shortcut icon"]');
    if (faviconLink) {
    faviconLink.setAttribute("href", newFaviconURL);
    }

    const twitterIcon = document.querySelector(twitterIconSelector);
    if (twitterIcon) {
     twitterIcon.setAttribute("d", newPath);
    }
    console.log('Twitter icon replaced');
  };
  
  // Execute the icon replacement when the page loads
  replaceTwitterIcon();
  
  // Listen for DOM changes and replace the icon if necessary
  const observer = new MutationObserver(replaceTwitterIcon);
  observer.observe(document.body, { childList: true, subtree: true });
  