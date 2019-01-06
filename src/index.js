const article = document.getElementsByTagName('body')[0]
  .appendChild(document.createElement('article'));
const text = 'I am Super Man!';
article.innerHTML = text.split('')
  .map((char) => `<div class='item'>${char}</div>`)
  .join('\n');
article.classList.add('word-wrapper');

const nodes = document
  .querySelector('.word-wrapper')
  .children;

for (let i = 0, n = 0; i < text.length; i++) {
  if (text.charAt(i) !== ' ') {
    const invokeClassToggle = () => {
        nodes[i].classList.add('active');
        setTimeout(
          () => nodes[i].classList.remove('active'),
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

const getResource = async function(url) {
  const res_full = await fetch(url);
  if (!res_full.ok) {
    throw new Error('Record not found');
  }
  return await res_full.json();
};

getResource('https://swapi.co/api/people/11111111111')
  .then((body) => console.log(body))
  .catch((err) => console.log(err.message));