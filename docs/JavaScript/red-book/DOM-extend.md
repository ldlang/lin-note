---
sidebar: auto
---

# Dom 扩展

### Selectors API

1. **querySelector**

   获取匹配条件的第一个 dom 节点，主要是通过 class 名，获取的是快照，获取的这个节点在其
   他地方被更改，并不会实时检测到，但是对这个获取到的节点进行操作依然是有效的。

   - 通过标签名获取

     ```js
     // 获取页面上第一个div标签的dom
     const dom = document.querySelector("div");
     ```

   - 通过 id 获取标签

     ```js
     // 获取页面上第一个 id 为 myDiv 的dom
     const dom = document.querySelector("#myDiv");
     ```

   - 通过 class 的名获取

     ```js
     // 获取页面上第一个有 bd 这个class的dom
     const dom = document.querySelector(".bd");
     ```

   - 获取指定标签下，指定的 class 的标签

     ```js
     // 获取页面上第一个 div标签有 bd 这个class的标签
     const dom = document.querySelector("div.bd");
     ```

2.
