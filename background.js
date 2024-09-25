chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(sender)
    if (request.type === "getCookie") {
        console.log(request)
        chrome.cookies.get({
            url: request.url,
            name: request.cookieName
        }, (cookie) => {
            if (cookie) {
                console.log("Cookie value:", cookie.value);
                sendResponse({ value: cookie.value });
            } else {
                console.log("Cookie not found");
                sendResponse({ value: null });
            }
        });
  
      return true;
    }
});
  