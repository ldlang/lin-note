---
sidebar: auto
---

# JavaScript API

## 跨上下文消息 => 多标签页之间通讯

### postMessage

postMessage 接收三个参数，第一个是发送的消息，第二个是目标地址，如果是`*`则代表不想限制接收目标。第三个参数是发送消息的文档中 window 对象的代理。这个代理对象主要用于在发送上一条消息的窗口中执行 postMessage()方法。如果发送窗口有相同的源，那么这个对象应该就是 window 对象。

安全性问题，可以通过判断发送者的地址来确定是不是有自己发送过来的。

```js
window.addEventListener("message", (e) => {
  // 如果消息来源不是http://127.0.0.1:5500 则不进行任何处理
  if (e.origin != "http://127.0.0.1:5500") return;
  console.log(e.origin);
  console.log(e.data);
  e.source.postMessage("返回给他消息", e.origin);
});
```

实现两个标签页之间通讯

- 发送页

  ```js
  const opener = window.open("http://127.0.0.1:5500/new.html");
  title.addEventListener("click", function () {
    // 必须是指定打开页面的对象，才能向他发送消息
    opener.postMessage(["我是消息"], "*");
  });

  window.addEventListener("message", function (e) {
    console.log("返回来的消息", e.data);
  });
  ```

- 接收页

  ```js
  window.addEventListener("message", (e) => {
    console.log(e.origin);
    console.log(e.data);
    // 返回给对方消息
    e.source.postMessage("返回给他消息", e.origin);
  });
  ```

## File API 和 Blob API

### File 类型

访问文件，得到通过 input 选取来的文件信息。

- name：文件在本地系统的文件名
- size：被选中文件的大小，以字节计算
- type：文件的 MIME 类型的字符串
- lastModifiedDate：文件最后修改的事件

通过监听 input 的 change 事件就可以拿到每个文件的信息，得到的是一个 FileList。

```js
const file = document.querySelector('input[type="file"]');
file.addEventListener("change", function (event) {
  console.log(this.files == event.target.files); // true

  // 打印每个文件的文件名
  let i = 0;
  while (i < this.files.length) {
    console.log(this.files[i].name);
    ++i;
  }
});
```

选择文件 input 部分属性说明

```html
文件单选
<input type="file" />

文件多选
<input type="file" multiple />

指定选取png格式的图片
<input type="file" multiple accept="image/png" />

选取所有类型的图片
<input type="file" multiple accept="image/*" />
```

### FileReader 类型

FileReader 类型是一种异步读取文件的机制。得到的文件结果是 base64 格式的，其中有几个读取文件的方法

- readAsText（file，encoding）:从文件中速去纯文本内容，并保存在 result 中，第一个参数是编码类型（可选）。
- readAsDataURL(file)：读取文件并将内容的数据 URI 保存在 result 属性中。
- readAsBinaryString(file)：读取文件并将每个字符的二进制数据保存在 result 属性中。
- readAsArrayBuffer(file)：读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性。

因为 FileReader 是异步的，所以每个 FileReader 的实例上都有三个事件，分别是

- **progress** 上传进度事件，会往 event 上添加三个信息，分别是 lengthComputable（进度信息是否可用）、loaded（当前已完成的大小）和 total（总的大小），每个 50ms 会触发一次。

- **error** 文件加载失败事件，会往 event 上添加一个 error 的错误对象，其中有一个 code，1（未找

  到文件）、2（安全错误）、3（读取被中断）、4（文件不可读）或 5（编码错误。

- **load** 文件加载成功事件

  ```js
  const file = document.querySelector('input[type="file"]');
  file.addEventListener("change", function (event) {
    console.log(this.files == event.target.files); // true

    let i = 0;
    const box = document.querySelector("#box");
    while (i < this.files.length) {
      console.log(this.files[i]);
      const reader = new FileReader();
      reader.readAsDataURL(this.files[i]);

      // 文件读取进度
      reader.addEventListener("progress", function (event) {
        // 检测读取进度是否可用
        if (event.lengthComputable) {
          console.log(event.loaded, event.total);
        }
      });

      // 文件读取完成
      reader.addEventListener("load", function (event) {
        console.log(event.currentTarget.result == reader.result);
        console.log(reader.result); // 图片的base64
        const img = document.createElement("img");
        img.src = reader.result;
        box.appendChild(img);
      });

      // 文件读取失败
      reader.addEventListener("error", function (event) {
        console.log("失败", event.currentTarget.error);
      });
      ++i;
    }
  });
  ```

### FileReaderSync 类型

是 FileReader 的同步版本，和 FileReader 拥有相同的方法，但是他是同步的，上传文件太大，会阻塞代码。

### Blob 与部分读取

1. 通过 File 上的 slice()方法可以的到一个 Blob 的示例，Blob 实际上是 File 的超类。

2. blob 表示一个二进制大对象，是 js 对不可修改二进制数据的封装类型，使用 Blob 构造函数创建一个 Blob 对象可以接收一个配置对象，可以指定 MIME 类型。

   ```js
   new Blob(["hello world"], { type: "text/plain" });
   ```

### 对象 URL 和 blob

对象 URL 有时候也称作 Blob URL，是指引用存储在 File 或 Blob 中数据的 URL。对象 URL 的优 点是不用把文件内容读取到 JavaScript 也可以使用文件。只要在适当位置提供对象 URL 即可。要创建对 象 URL，可以使用 window.URL.createObjectURL() 方法并传入 File 或 Blob 对象。这个函数返回 的值是一个指向内存中地址的字符串。因为这个字符串是 URL，所以可以在 DOM 中直接使用。使用完数据之后最好使用 window.URL.revokeObjectURL() 释放资源的占用。

```js
const file = document.querySelector('input[type="file"]');
file.addEventListener("change", function (event) {
  let i = 0;
  const box = document.querySelector("#box");
  while (i < this.files.length) {
    const url = window.URL.createObjectURL(this.files[i]);
    // blob:http://127.0.0.1:5500/22da7836-1b56-4239-9cde-498986c86fc9
    console.log(url, "url");
    const img = document.createElement("img");
    img.src = url;
    box.appendChild(img);
    // 释放资源的占用
    window.URL.revokeObjectURL(this.files[i]);
    ++i;
  }
});
```

### 读取拖放文件

通过监听任何一个元素的**dragleave**、**dragover** 和 **drop**的事件，**dragover** 事件必须阻止他的默认行为，不然释放鼠标左键时，`drop`事件无法捕获到文件信息。每个事件最好都阻止他们的默认行为，他们都会往 event 上添加一个 `dataTransfer`对象，里面就包含了退拽的文件，存储在`flies`里面。

```js
const drop = document.querySelector('#drop')
drop.addEventListener('dragover', function (event) {
    event.preventDefault()
    console.log("文件进入了目标框");
})

drop.addEventListener('dragleave', function (event) {
    event.preventDefault()
    logger.log("文件离开了目标框");
})

drop.addEventListener('drop', function (event) {
    event.preventDefault()
    console.log("文件被拖拽到目标框，并且释放了鼠标左键");
    console.log('drop', event.dataTransfer);

    if (event.dataTransfer) {
        const reader = new FileReader()
        reader.readAsDataURL(event.dataTransfer.files[0])
        reader.addEventListener('load', () => {
            console.log(reader.result); // 得到拖拽文件的base64
            // 将拖拽的图片放到页面上。
            const img = document.createElement('img')
            img.src = reader.result
            document.querySelector('#box').appendChild(img)
        })
    }
})
```

