const REX = /(corona|covid)((-| )?(v(i|í)rus|19))?/gi;

const ignoreTag = ["script", "noscript", "source", "style"];

let matches = 0;

function vaccinate(element) {
  if (ignoreTag.includes(element.localName)) return;

  const text = element.textContent;

  if (text) {
    element.textContent = text.replace(REX, "💉");

    const count = text.match(REX);
    matches += count && count.length;
  }
}

function findMatche(element, first = false) {
  if (!element.childElementCount) vaccinate(element);
  
  else for (el of element.children) findMatche(el);

  if (first) {
    chrome.runtime.sendMessage({ matches });
  }
}

chrome.runtime.onMessage.addListener(req => {
  if (req.message === "load") findMatche(document.body, true);
});
