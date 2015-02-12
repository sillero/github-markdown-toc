(function(markdownBody){
  var toc = ['###Table of contents'];
  
  [].map.call(markdownBody.querySelectorAll('h1, h2, h3, h4, h5, h6'), function(node){
    var str = [
      Array(parseInt(node.tagName[1])).join('    '),
      '- [',
      node.innerText,
      '](',
      node.querySelector('a').getAttribute('href'),
      ')'
    ];
  
    toc.push(str.join(''));
  });
  
  alert(toc.join('\n'));  
})(document.querySelector('.markdown-body'));