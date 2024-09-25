// Get LinkedIn session cookies
chrome.runtime.sendMessage({
    type: "getCookie",
    cookieName: "cookie",
    url: "https://linkedin.com"
});

console.log("Processing...")