var sectionIndex = 0;
var sectionList = [];
window.addEventListener('load', function () {
  var nodes = document.querySelectorAll('section[id]');
  for (var i = 0; i < nodes.length; i++) {
    sectionList.push(nodes[i].getAttribute('id'));
  }

  var node = document
    .querySelector('nav a:nth-child(1)')
    .addEventListener('click', function () {
      if (sectionIndex > 0) sectionIndex--;
      window.location = '#' + sectionList[sectionIndex];
    });

  document
    .querySelector('nav a:nth-child(2)')
    .addEventListener('click', function () {
      if (sectionIndex < sectionList.length - 1) sectionIndex++;
      window.location = '#' + sectionList[sectionIndex];
    });

  window.location = '#partA';
});
