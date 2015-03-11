(function(){
  'use strict';
  
  var markdownBody = document.querySelector('#readme .markdown-body') || document.querySelector('#wiki-body .markdown-body');
  var headers = Array.prototype.slice.call(markdownBody.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  
  //TOC pipeline
  var toc = readHeaders(headers)
    .each(buildTree)
    .filter(cleanTree)
    //build string array from tree
    .reduce(traverseTree, [])
    //stringify    
    .join('\n');

  //print
  console.log(toc);
  alert(toc);
    
  
  //helpers
  
  function readHeaders(headers) {
    var toc = [
      { tagIndex: 0, index: 0, text: '###Table of Contents' }
    ].concat(headers.map(function(node){
      return { 
        tagIndex: parseInt(node.tagName[1]),
        text: node.innerText,
        url: node.querySelector('a').getAttribute('href')
      };
    }));
    
    toc.each = function(callback){
      toc.forEach(callback);
      return toc;
    };
    
    return toc;
  }
  
  function lookUp(arr, index) {
    var target = arr[index];
    
    for (var i = index; i >= 0; i--) {
      if (arr[i].tagIndex < target.tagIndex) {
        return arr[i];
      }
    }
  }
  
  function buildTree(node, index, toc) {
    var parent = lookUp(toc, index);

    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
      node.index = parent.index + 1;
      node.remove = true;
    }
  }
  
  function cleanTree(node) {
    return !('remove'in node);
  }

  function traverseTree(output, node, index, tree){    
    output = output || [];
    
    var str = [node.text];
    
    if (node.index) {
      str = [
        (new Array(node.index)).join('    '),
        '- [',
        node.text,
        '](',
        node.url,
        ')'
      ];
    }
    
    output.push(str.join(''));
    
    if (node.children) {
      output = node.children.reduce(traverseTree, output);
    }
    
    return output;
  }
})();
