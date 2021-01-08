const contacts = Array.from(document.querySelectorAll('#contacts > ul > li'));
const skills = Array.from(document.querySelectorAll('#skills > ul > li'));
const blog = document.getElementById('blog');
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
blog.addEventListener('mouseenter', () => {
  blur(blog);
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
blog.addEventListener('mouseleave', () => {
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
  blog.style.filter = 'blur(5px)';

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
  blog.style.filter = 'none';
}
