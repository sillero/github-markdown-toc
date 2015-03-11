#GitHub markdown TOC generator (bookmarklet)
Use this link as bookmarklet
```
javascript:!function(){"use strict";function e(e){var n=[{tagIndex:0,index:0,text:"###Table of Contents"}].concat(e.map(function(e){return{tagIndex:parseInt(e.tagName[1]),text:e.innerText,url:e.querySelector("a").getAttribute("href")}}));return n.each=function(e){return n.forEach(e),n},n}function n(e,n){for(var r=e[n],t=n;t>=0;t--)if(e[t].tagIndex<r.tagIndex)return e[t]}function r(e,r,t){var o=n(t,r);o&&(o.children=o.children||[],o.children.push(e),e.index=o.index+1,e.remove=!0)}function t(e){return!("remove"in e)}function o(e,n){e=e||[];var r=[n.text];return n.index&&(r=[new Array(n.index).join("    "),"- [",n.text,"](",n.url,")"]),e.push(r.join("")),n.children&&(e=n.children.reduce(o,e)),e}var c=document.querySelector("#readme .markdown-body")||document.querySelector("#wiki-body .markdown-body"),i=Array.prototype.slice.call(c.querySelectorAll("h1, h2, h3, h4, h5, h6")),u=e(i).each(r).filter(t).reduce(o,[]).join("\n");console.log(u),alert(u)}();
```

1. Visit the target github markdown page, let's say https://github.com/facebook/react/blob/master/README.md
1. Click the bookmarklet or execute the script
1. It will output (as an alert and in your browser console) a Table of Contents like this
```
###Table of Contents
- [React ](#react-)
    - [Examples](#examples)
    - [Installation](#installation)
    - [Contribute](#contribute)
        - [Building Your Copy of React](#building-your-copy-of-react)
            - [Prerequisites](#prerequisites)
            - [Build](#build)
        - [Grunt](#grunt)
        - [License](#license)
        - [More…](#more)
```
