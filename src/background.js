let matches = 0;

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, {
    message: "load"
  });
});

chrome.runtime.onMessage.addListener(({ matches }) => {
  console.log(matches);

  const text = matches === 0 ? "" : matches > 99 ? "99+" : String(matches);

  chrome.browserAction.setBadgeText({ text });
});
