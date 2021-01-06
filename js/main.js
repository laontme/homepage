const contacts = Array.from(document.querySelectorAll('#contacts > ul > li'));
const skills = Array.from(document.querySelectorAll('#skills > ul > li'));
const quote = document.getElementById('quote');
const headings = Array.from(document.getElementsByTagName('h1'));

console.log(contacts);
console.log(skills);
console.log(quote);

contacts.forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    blur('contact', el);
  });
});
skills.forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    blur('skill', el);
  });
});
quote.addEventListener('mouseenter', () => {
  blur('quote', quote);
});

contacts.forEach((el, i) => {
  el.addEventListener('mouseleave', () => {
    unblur();
  });
});
skills.forEach((el, i) => {
  el.addEventListener('mouseleave', () => {
    unblur();
  });
});
quote.addEventListener('mouseleave', () => {
  unblur();
});

function blur(type, element) {
  headings.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  contacts.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  skills.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  quote.style.filter = 'blur(5px)';

  element.style.filter = 'none';
}

function unblur() {
  headings.forEach((el, i) => {
    el.style.filter = 'none';
  });
  contacts.forEach((el, i) => {
    el.style.filter = 'none';
  });
  skills.forEach((el, i) => {
    el.style.filter = 'none';
  });
  quote.style.filter = 'none';
}
