const REX = /coronav(i|í)rus|(corona|covid)(-| )(19|v(i|í)rus|corona)/gi;

const ignoreTag = ['script', 'noscript', 'source', 'style'];

const [body] = document.getElementsByTagName('body');

function findMatche(element) {
  if (!element.childElementCount) {
    if(ignoreTag.includes(element.localName)) return;

    const text = element.textContent;

    if (text) {
      element.textContent = text.replace(REX, '💉');
    }

    return;
  }

  for (el of element.children) findMatche(el);
}

chrome.runtime.onMessage.addListener(req => {
  if(req.message === 'load') findMatche(body);
});
