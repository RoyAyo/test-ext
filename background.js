chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "getCookie") {
        console.log("Received getCookie request:", request);
        chrome.cookies.getAll({
            url: request.url,
            name: request.cookieName
        }, (cookies) => {
            if (chrome.runtime.lastError) {
                console.error("Error fetching cookies:", chrome.runtime.lastError);
                sendResponse({ error: chrome.runtime.lastError.message });
                return;
            }

            if (cookies && cookies.length > 0) {
                console.log("Cookies found:", cookies);
                sendResponse({ value: cookies });
            } else {
                console.log("Cookies not found");
                sendResponse({ value: null });
            }
        });

        return true;
    }
});