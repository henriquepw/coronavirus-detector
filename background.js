chrome.browserAction.onClicked.addListener(tab => {
  console.log(tab);

  chrome.tabs.sendMessage(tab.id, {
    message: 'load',
  });
});