---
sidebar: auto
---

# Web Socket

Web Socket 使用的专有的协议，因此不能再使用 http:// 或者 https://，而要使用 ws:// 和 wss://。

## API

新建一个 web socket 的时候，需要调用 web socket 的构造函数，并传入一个 URL。同源策略不适用于 Web Socket，因此可以打开到任意站点的连接。至于是否与来自特定源的页面通信，则完全取决于服务器。web Socket 也有一个 readyState 的属性表示当前的状态。

- WebSocket.OPENING（0）：连接正在建立。
- WebSocket.OPEN（1）：连接已经建立。
- WebSocket.CLOSING（2）：连接正在关闭。
- WebSocket.CLOSE（3）：连接已经关闭。

```js
const socket = new WebSocket("ws://localhost:8080");

console.log(socket.readyState); // 输出：WebSocket.OPENING (0)

socket.onopen = function (event) {
  console.log(socket.readyState); // 输出：WebSocket.OPEN (1)
};

socket.onclose = function (event) {
  console.log(socket.readyState); // 输出：WebSocket.CLOSE (3)
};
```

## 发送和接收数据

在 web socket 成功连接以后，可以通过 send 方法向服务端发送消息，只能发送字符串，ArrayBuffer 和 Blob 的数据。接收数据通过监听 socket 实例身上的 message 事件，就能得到服务端发送过来的信息。

```js
// 建立连接
const socket = new WebSocket("ws://127.0.0.1:8888");

// 监听连接成功
socket.onopen = function () {
  console.log("连接成功");
};
// 监听消息
socket.onmessage = function (event) {
  let data = event.data;
  // console.log('接收到的消息', data);
};
// 向服务端发送消息
socket.send(
  JSON.stringify({
    user: "a",
    message,
  })
);

// 监听连接关闭
socket.onclose = function () {
  console.log("连接关闭");
};

// 监听连接错误
socket.onerror = function () {
  console.log("连接错误");
};

// 关闭连接
socket.close();
```
