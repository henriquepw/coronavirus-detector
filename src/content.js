// const REX = /(coronav(i|í)rus|(corona|covid)(-| )(19|virus|vírus)|corona)/gi;
const REX = /(coronavirus|coronavírus|corona-19|covid-19|corona (virus|vírus)|corona)/gi;

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

  element.children.forEach(el => findMatche(el));
}

chrome.runtime.onMessage.addListener(req => {
  if(req.message === 'load') findMatche(body);
});
