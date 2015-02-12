#GitHub markdown TOC generator (bookmarklet)
Use this link as bookmarklet
```
javascript:!function(e){var r=["###Table of contents"];[].map.call(e.querySelectorAll("h1, h2, h3, h4, h5, h6"),function(e){var t=[Array(parseInt(e.tagName[1])).join("    "),"- [",e.innerText,"](",e.querySelector("a").getAttribute("href"),")"];r.push(t.join(""))}),alert(r.join("\n"))}(document.querySelector(".markdown-body"))
```
