const REX = /(corona|covid)((-| )?(v(i|í)rus|19))?/gi;

const ignoreTag = ["script", "noscript", "source", "style"];

function vaccinate(element) {
  if (ignoreTag.includes(element.localName)) return;

  const text = element.textContent;

  if (text) {
    element.textContent = text.replace(REX, "💉");
  }
}

function findMatche(element) {
  if (!element.childElementCount) vaccinate(element);
  
  else for (el of element.children) findMatche(el);
}

chrome.runtime.onMessage.addListener(req => {
  if (req.message === "load") findMatche(document.body);
});
