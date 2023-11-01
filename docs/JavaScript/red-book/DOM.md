---
sidebar: auto
---

# Dom

### Node 类型

**注意**：以下所有的节点信息都来自于这里

```html
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const nodes = document.getElementsByTagName("li");

const ulNode = document.getElementById("ul");

const newNode = document.createElement("li");
newNode.innerText = 7;
```

1. **nodeName**

   始终返回标签的大写名称

   ```js
   const name = document.getElementById("btn").nodeName;
   console.log(name); // BUTTON
   ```

2. 节点关系

   - 获取一组节点中指定的节点，获取到的节点是一个类数组，但也有 length 的属性，
     也可以通过下标的方式获取指定的节点，还可以用过`item`的方式获取节点

     ```js
     获取第二个节点
     	nodes.item(1)		等同于		nodes[1]
     ```

   - **parentNode**

     每个节点都有自己的`parentNode`，得到的是该节点的父节点信息

     ```js
     nodes[1].parentNode; // 节点ul
     ```

   - **previousSibling 和 nextSibling**

     第一个节点的 previousSibling 属性是 null，最后一个节点的 nextSibling
     属性也是 null

     如果只有一个节点则两个属性都是 null

   - **firstChild、lastChild、firstElementChild、lastElementChild**

     firstChild、lastChild 通过父节点获取子节点的信息，但是空白等也算节点信息，
     所以通过这两个拿到的子节点信息不是预期的节点信息，要更换为 firstElementChild、
     lastElementChild 得到的才是预期的节点信息

     ```js
     ulNode.firstChild; // #text
     ulNode.firstElementChild; // 正确的li节点信息
     ```

   - **hasChildNodes**

     当前节点是否有子节点，有就返回 true ，没有返回 false，但是空白也算他的子节点，
     所以不怎么准确

     ```js
     ulNode.hasChildNodes(); // true
     ```

3. 操作节点

   **注意：**下面所有的方法都是通过父节点来操作子节点

   - **appendChild**

     往当前这个节点中插入子节点，并且插入到末尾中

     ```js
     ulNode.appendChild(newNode); // 此时 ulNode 中的末尾就新增了这个 newNode 的节点
     ```

   - **insertBefore**

     插入指定节点的前面，接收两个参数，第一个为父节点，第二个为参照节点，要插入的节
     点会拆入槽参照节点的前面，如果第二个参数为`null`，怎表现和`appendChild`一致

     ```js
     ulNode.insertBefore(newNode, ulNode.children[2]); // 插入到第三个节点的前面
     ```

   - **replaceChild**

     替换节点，接收两个参数，第一个为替换的节点，第二个为被替换的节点，被替换的节点
     则会从 dom 树上删除

     ```js
     ulNode.replaceChild(newNode, ulNode.children[2]); // 将第三个节点替换为 newNode
     ```

   - **removeChild**

     移除节点，将节点从 dom 树上移除，返回值就是被移除的 dom 节点

     ```js
     ulNode.removeChild(ulNode.children[2]);
     ```

4. 其他方法

   - **cloneNode**

     所有节点身上的方法，复制一个节点，接收一个 Boolean 的参数，true 表示深拷贝，
     false 表示浅拷贝，浅拷贝无法将节点添加到页面上

     ```js
     nodes[0].parentNode.insertBefore(nodes.item(1).cloneNode(false), nodes[2]);

     ulNode.appendChild(nodes[0].cloneNode(true));
     ```

   - **normalize**

     ```js

     ```

### document

表示文档节点，也就是整个 html 最外层的节点

1. 文档子节点

   - 获取`html`的节点

     ```js
     document.documentElement; // html 的节点
     ```

   - 获取`body`节点

     ```js
     document.body; // body 的节点
     ```

   - 文档信息

     ```js
     // 读取文档标题
     let originalTitle = document.title;
     // 修改文档标题
     document.title = "New page title";
     // 取得完整的 URL
     let url = document.URL;
     // 取得域名
     let domain = document.domain;
     // 取得来源
     let referrer = document.referrer;
     ```

2. **获取元素（定位元素）**

   - **getElementById**

     根据标签上的`id`属性去获取节点，区分大小写，如果有重名的`id`只会获取匹配的
     第一个节点，找不到则返回 null

     ```js
     <ul id="ulDom" />;
     const element = document.getElementById("ulDom");
     console.log(element); // 获取id为 ulDom 的节点
     ```

   - **getElementsByTagName**

     获取所有标签名匹配的节点集合

     ```js
     const liNodes = document.getElementsByTagName("li");
     console.log(liNodes); // 获取所有的 li 节点信息
     ```

   - **namedItem**

     从已有的节点集合中匹配标签中的`name`属性相同的节点（有问题不使用）

     ```js
     const liNodes = document.getElementsByTagName("li");
     console.log(element.children.namedItem("my"));
     ```

   - **getElementsByName**

     通过匹配标签上的`name`属性去获取所有节点的集合，有些标签不支持`name`属性，
     比如 li 标签，所以不推荐使用。最常使用的方式是获取 radio 标签

     ```js
     <div name="my">6666</div>
     <div name="my">7777</div>
     const nameNodes = document.getElementsByName('my')
     console.log(nameNodes);
     ```

   - 特殊集合

     ```js
     document.anchors 包含文档中所有带 name 属性的<a>元素。

     document.applets 包含文档中所有<applet>元素（因为<applet>元素已经不建议使用，所以这个集合已经废弃

     document.forms 包含文档中所有<form>元素（与 document.getElementsByTagName ("form")
     返回的结果相同

     document.images 包含文档中所有<img>元素（与 document.getElementsByTagName ("img")
     返回的结果相同

     document.links 包含文档中所有带 href 属性的<a>元素
     ```

### Element 类型

1. **tagName 和 nodName**

   获取一个节点的标签名，并且返回的都是大写的形式，因为在不同浏览器可能行为不同，
   所以最好转换为小写去判断。

   ```js
   const element = document.getElementById("ulDom");
   if (element.nodeName.toLowerCase() == "ul") {
     // 逻辑
   }
   ```

2. **HTML**元素

   读取标签上的属性，如果对其进行赋值，那么就是对标签上对应的属性赋值

   ```js
   <div id="myDiv" class="bd ac" title="Body text" lang="en" dir="ltr">
     66666666
   </div>;
   const div = document.getElementById("myDiv");

   div.className; // bd ac  因为class是设置类名，被占用，所以使用className
   div.id; // myDiv
   div.title; // Body text
   div.lang; // en
   div.dir; // ltr 文字的方向
   ```

3. **getAttribute**

   获取标签身上的任意属性的值

   ```js
   <div id="myDiv" class="bd ac" doo="doo">
     66666666
   </div>;

   const div = document.getElementById("myDiv");

   div.getAttribute("class"); // bd ac
   div.getAttribute("doo"); // doo
   ```

4. **setAttribute**

   设置标签任意属性，淡入如果标签上已有这个属性，那么他的属性值将会被覆盖

   ```js
   <div id="myDiv" class="bd ac" doo="doo">
     66666666
   </div>;

   const div = document.getElementById("myDiv");

   div.setAttribute("class", "main"); // 此时标签上的 class 就只有 mian 这一个属性了
   div.setAttribute("foo", "foo");
   ```

5. **removeAttribute**

   移除标签上的属性

   ```js
   div.removeAttribute("doo");
   ```

6. **attributes**（不常用）

   读取标签身上的所有属性的集合，如果对其进行赋值，那么就是对标签上对应属性进行赋值

   ```js
   <div id="myDiv" class="bd ac" doo="doo">
     66666666
   </div>;

   const div = document.getElementById("myDiv");
   ```

   - `getNamedItem`读取集合中指定的属性

     ```js
     div.attributes.getNamedItem('doo')  // doo=doo
     等同于  div.attributes['doo'] 	等同于 div.attributes['2']

     div.attributes.getNamedItem('doo').nodeValue // doo 才是读取到属性的值
     ```

   - `removeNamedItem`删除属性，并且返回被删除的属性值

   - `setNamedItem`设置属性值

7. **createElement**

   创建元素，传入的参数就是要创建标签的标签名

   ```js
   const span = document.createElement("span");
   span.innerHTML = "我是span标签";
   span.style.color = "red";
   div.appendChild(span);
   ```

8. **children 和 childNodes**

   chilren 只会获取到标签下面所有的元素集合，并不会获取到其空白产生的节点（#text）

   childNodes 会获取到所有的元素集合，包括因空白产生的（#text）文本节点

### DOM 编程

1. **MutationObserver**接口

   监听整个文档，dom 数的一部分，或者某个元素，元素的属性，子节点，文本或者前三者组合的变化。

   - 基本用法

     ```js
     let observer = new MutationObserver(() => {}); // 接收一个回调函数
     ```

   - `observe`方法

     接收两个参数，第一个是要监听的节点，第二个是配置对象，配置要监听这个节点的什么变化

     ```js
     const element = document.getElementById("ulDom");

     let mb = new MutationObserver(watchDom); // 创建实例,并传入回调函数
     mb.observe(element, { attributes: true }); // 调用observe 方法并传入节点和配置对象

     function watchDom() {
       // 回调函数
       console.log(arguments);
     }

     // 上面监听的节点属性的变化，这里修改了节点上的属性，回调函数就会被触发
     element.setAttribute("foo", "doo");
     ```

     - 配置对象说明

       | 配置                  | 说明                                                                                                              |
       | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
       | childList             | 如果设为 `true`，则观察目标节点（以及其子节点，如果 `subtree` 为 `true`）的子节点的添加或删除                     |
       | attributes            | 如果设为 `true`，则观察目标节点的属性变动                                                                         |
       | characterData         | 如果设为 `true`，则观察目标节点的数据变动                                                                         |
       | subtree               | 如果设为 `true`，则观察目标节点的所有后代节点，而不仅仅是直接子节点。                                             |
       | attributeOldValue     | 如果设为 `true`，且 `attributes` 属性也设为 `true`，则 `MutationRecord` 的 `oldValue` 属性将记录变动前的属性值。  |
       | characterDataOldValue | 如果设为 `true`，且 `characterData` 属性也设为 `true`，则 `MutationRecord` 的 `oldValue` 属性将记录变动前的数据。 |
       | attributeFilter       | 如果提供了一个数组，且 `attributes` 属性设为 `true`，则只有数组中指定的属性变动才会被观察。                       |

       ```js
       const element = document.getElementById("ulDom");
       let mb = new MutationObserver(watchDom);

       mb.observe(element, {
         // 观察所有子节点及其子节点属性的变化
         childList: true,
         subtree: true,
         attributes: true,
       });

       function watchDom() {
         console.log(arguments); // 下面添加子节点，和修改子节点的属性都会触发这个函数的
       }
       element.appendChild(document.createElement("span"));
       element.children[1].className = "hh";
       ```

   - 回调接受的参数 **MutationRecord** 数组集合 和 **MutationObserver**

     - 第一个参数**MutationRecord** 的数组集合

       是一个变化的数组，每一次的变化都会产生一个 MutationRecord 对象，会添加到回
       调函数的第一个参数的数组里面

       ```js
       MutationRecord 部分参数说明

       target		被修改影响的目标节点
       type 		字符串，表示变化的类型："attributes"、"characterData"或"childList"
       oldValue 	如果在 MutationObserverInit 对象中启用（attributeOldValue 或characterData OldValue为 true），
       "attributes"或"characterData"的变化事件会设置这个属性为被替代的值"childList"类型的变化始终将这个属性设置为 null

       attributeName 		对于"attributes"类型的变化，这里保存被修改属性的名字其他变化事件会将					这个属性设置为 null

       attributeNamespace 	对于使用了命名空间的"attributes"类型的变化，这里保存被修改属性的名字
       					其他变化事件会将这个属性设置为 null

       addedNodes 			对于"childList"类型的变化，返回包含变化中添加节点的 NodeList
       					默认为空 NodeList

       removedNodes 		对于"childList"类型的变化，返回包含变化中删除节点的 NodeList
       					默认为空 NodeList

       previousSibling 	对于"childList"类型的变化，返回变化节点的前一个同胞 Node
       					默认为 null

       nextSibling 		对于"childList"类型的变化，返回变化节点的后一个同胞 Node
       					默认为 null
       ```

   - **disconnect** 停止监听

     如果不主动去销毁监听，那么它将会一直监听，影响性能，但是`disconnect`并不是直接按顺序执行，
     如果调用了这个方法，那么所有的回调都会被组织掉，所以只能异步的去关闭监听，不然就获取不到任
     何回调了。最简单的方式就是通过 setTimeout 去停止监听

     ```js
     setTimeout(() => {
       mb.disconnect();
     }, 0);
     ```

   - **takeRecords**

     获取被 disconnect 丢弃的回调，正常情况下，如果调用 disconnect 那么回调函数里面将获取不到
     任何回调了，因为他们都被丢弃了，稀释就可以通过 takeRecords() 获取被丢弃的回调

     ```js
     在丢弃之前调用即可拿到被丢弃的回调;
     mb.takeRecords(); // [MutationRecord, MutationRecord]
     mb.disconnect();
     ```
