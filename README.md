#GitHub markdown TOC generator (bookmarklet)
Use this link as bookmarklet
```
javascript:!function(e){var n=["###Table of contents"];[].map.call(e.querySelectorAll("h1, h2, h3, h4, h5, h6"),function(e){var o=[Array(parseInt(e.tagName[1])).join("    "),"- [",e.innerText,"](",e.querySelector("a").getAttribute("href"),")"];n.push(o.join(""))}),n=n.join("\n"),console.log(n),alert(n)}(document.querySelector(".markdown-body")
```

It will output (as an alert and in your browser console) a Table of contents like this
```
###Table of contents
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
