const contacts = Array.from(document.querySelectorAll('#contacts > ul > li'));
const skills = Array.from(document.querySelectorAll('#skills > ul > li'));
const zzz = document.getElementById('zzz');
const headings = Array.from(document.getElementsByTagName('h1'));

contacts.forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    blur(el);
  });
});
skills.forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    blur(el);
  });
});
zzz.addEventListener('mouseenter', () => {
  blur(zzz);
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
zzz.addEventListener('mouseleave', () => {
  unblur();
});

function blur(element) {
  headings.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  contacts.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  skills.forEach((el, i) => {
    el.style.filter = 'blur(5px)';
  });
  zzz.style.filter = 'blur(5px)';

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
  zzz.style.filter = 'none';
}
