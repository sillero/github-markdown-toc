javascript:!function(e){var n=["###Table of Contents"];[].map.call(e.querySelectorAll("h1, h2, h3, h4, h5, h6"),function(e){var o=[Array(parseInt(e.tagName[1])).join("    "),"- [",e.innerText,"](",e.querySelector("a").getAttribute("href"),")"];n.push(o.join(""))}),n=n.join("\n"),console.log(n),alert(n)}(document.querySelector(".markdown-body"))