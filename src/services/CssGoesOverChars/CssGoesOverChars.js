import './CssGoesOverChars.css';

export default class CssGoesOverChars {
  start(elementId) {
    const article = document.getElementById(elementId);
    const text = article.innerHTML;
    article.innerHTML = text.split('')
      .map((char) => `<div class='char-item'>${char}</div>`)
      .join('\n');
    article.classList.add('word-wrapper');

    const nodes = document
      .querySelector('.word-wrapper')
      .children;

    for (let i = 0, n = 0; i < text.length; i++) {
      if (text.charAt(i) !== ' ') {
        const invokeClassToggle = () => {
          nodes[i].classList.add('char-active');
          setTimeout(
            () => nodes[i].classList.remove('char-active'),
            1000
          );

          setTimeout(
            invokeClassToggle,
            text.replace(/ /g, '').length * 1000
          );
        };

        setTimeout(
          invokeClassToggle,
          1000 + (n * 1000)
        );

        if (n < text.replace(/ /g, '').length) {
          n++;
        }
      }
    }
  }
};