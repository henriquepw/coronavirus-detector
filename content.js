const REX = /(coronavirus|coronavírus|corona-19|covid-19|corona)/gi;

const ignoreTag = ['script', 'noscript', 'source'];

const [body] = document.getElementsByTagName('body');

function findMatche(element) {
  if (!element.childElementCount) {
    if(ignoreTag.includes(element.localName)) return;

    const text = element.textContent.replace(REX, '💉');
  
    element.textContent = text;

    // console.log(element.localName, text);

    return;
  }

  for (el of element.children) {
    findMatche(el);
  }
}

findMatche(body);