'use strict';

var cards = document.querySelectorAll('.js-card');
var links = document.querySelectorAll('.js-buy');

var searchParent = function searchParent(e, searched) {
  return e.target.closest(searched);
};

[].forEach.call(cards, function (element) {

  var parent = element.parentElement;
  var allowedHover = true;

  element.addEventListener('mouseenter', function () {
    if (allowedHover) parent.classList.add('hover');
  });

  element.addEventListener('mouseleave', function () {
    parent.classList.remove('hover');
    allowedHover = true;
  });

  element.addEventListener('click', function () {
    var addedClass = parent.classList.toggle('selected');
    if (addedClass) {
      parent.classList.remove('hover');
      allowedHover = false;
    } else {
      parent.classList.add('hover');
      allowedHover = true;
    }
  });
});

[].forEach.call(links, function (element) {

  element.addEventListener('mouseenter', function (e) {
    var parent = searchParent(e, '.card');
    if (parent) parent.classList.add('hover');
  });

  element.addEventListener('mouseleave', function (e) {
    var parent = searchParent(e, '.card');
    if (parent) parent.classList.remove('hover');
  });

  element.addEventListener('click', function (e) {
    var parent = searchParent(e, '.card');
    if (parent) {
      parent.classList.add('selected');
      parent.classList.remove('hover');
    }
  });
});