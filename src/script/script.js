'use strict';

const cards = document.querySelectorAll('.js-card');
const links = document.querySelectorAll('.js-buy');

const searchParent = (e, searched) => e.target.closest(searched);

[].forEach.call(cards, element => {

  const parent = element.parentElement;
  let allowedHover = true;

  element.addEventListener('mouseenter', () => {
    if (allowedHover) parent.classList.add('hover');
  });

  element.addEventListener('mouseleave', () => {
    parent.classList.remove('hover');
    allowedHover = true;
  });

  element.addEventListener('click', () => {
    let addedClass = parent.classList.toggle('selected');
    if (addedClass) {
      parent.classList.remove('hover');
      allowedHover = false;
    } else {
      parent.classList.add('hover');
      allowedHover = true;
    }
  });
});

[].forEach.call(links, element => {

  element.addEventListener('mouseenter', e => {
    const parent = searchParent(e, '.card');
    if (parent) parent.classList.add('hover');
  });

  element.addEventListener('mouseleave', e => {
    const parent = searchParent(e, '.card');
    if (parent) parent.classList.remove('hover');
  });

  element.addEventListener('click', e => {
    const parent = searchParent(e, '.card');
    if (parent) {
      parent.classList.add('selected');
      parent.classList.remove('hover');
    }
  });
});
