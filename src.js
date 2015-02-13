(function(markdownBody){
  var toc = ['###Table of Contents'];
  var headers = Array.prototype.slice.call(markdownBody.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  
  headers.map(function(node){
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
  
  toc = toc.join('\n');
  console.log(toc);
  alert(toc);  
})(document.querySelector('.markdown-body'));
