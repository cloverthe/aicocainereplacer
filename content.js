function replaceTextInNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .replace(/\bAI\b/g, 'cocaine')
      .replace(/\bai\b/g, 'cocaine')
      .replace(/\bAi\b/g, 'cocaine')
      .replace(/\baI\b/g, 'cocaine');
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceTextInNode(node.childNodes[i]);
    }
  }
}

function replaceAllText() {

  const elementsToSkip = ['SCRIPT', 'STYLE', 'NOSCRIPT'];
  
  function walkTheDOM(node) {
    if (elementsToSkip.includes(node.tagName)) {
      return;
    }
    
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent
        .replace(/\bAI\b/g, 'cocaine')
        .replace(/\bai\b/g, 'cocaine')
        .replace(/\bAi\b/g, 'cocaine')
        .replace(/\baI\b/g, 'cocaine');
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        walkTheDOM(node.childNodes[i]);
      }
    }
  }
  
  walkTheDOM(document.body);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', replaceAllText);
} else {
  replaceAllText();
}

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
          replaceTextInNode(node);
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('AI Replacer: active');