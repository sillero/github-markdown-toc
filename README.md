#GitHub markdown TOC generator (bookmarklet)
Use this link as bookmarklet
```
javascript:!function(e){var r=["###Table of Contents"],o=Array.prototype.slice.call(e.querySelectorAll("h1, h2, h3, h4, h5, h6"));o.map(function(e){var o=[Array(parseInt(e.tagName[1])).join("    "),"- [",e.innerText,"](",e.querySelector("a").getAttribute("href"),")"];r.push(o.join(""))}),r=r.join("\n"),console.log(r),alert(r)}(document.querySelector(".markdown-body"))
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
