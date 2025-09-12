---
sidebar: auto
---

# 网络编程

## 1、基础知识

### ip：InetAddress

- 唯一定位一台网络上的计算机

- 127.0.0.1 或 localhost

- ip 地址的分类

  - Ipv4

    - 四个字节组成，每个字节都是在 0~255 之间

  - ipv6

    - 8 个由冒号隔开的 16 位字段，每个字段由 4 个十六进制数构成

      > AA22:BB11:1122:CDEF:1234:AA99:7654:7410

  - 公网和局域网

    - ABCD 类地址

```java
有不用InetAddress inetAddress = InetAddress.getByName("127.0.0.1");
System.out.println(InetAddress.getByName("127.0.0.1")); //  /127.0.0.1
System.out.println(InetAddress.getLocalHost()); // whjy/192.168.0.210
System.out.println(inetAddress.getCanonicalHostName()); // 127.0.0.1
System.out.println(inetAddress.getHostName()); // 127.0.0.1
```

### 端口

端口表示计算机上的一个程序的进程

- 不同的进程有不同的端口，用来区分软件
- 端口号区间为：0~65535
- TCP 和 UDP 的端口区间都是：0~65535，所以一台电脑最多有 65535\*2 的端口
- 端口分类
  - 公有端口
    - HTTP：80
    - HTTPS：443
    - FTP：21
    - Telent：23
  - 程序注册端口号：1023~49151，分配用户或者程序

### 通信协议

TCP/IP 协议簇

- TCP：用户传输协议
  - 相当于打电话，连接、稳定
  - **三次握手（两端进行连接）**、**四次挥手（两端断开连接）**
  - 客户端、服务端
  - 传输完成释放连接，效率低
- UDP：用户数据报协议
  - 相当于发消息，不连接，不稳定
  - 没有明确的界限：客户端/服务端
  - 不管对方有没有准备好，只管发
  - DDOS 攻击
- IP：网络互连协议

## 2、TCP

### 发送接收消息

```java
// 客户端发送消息
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class ClientTcp {
    public static void main(String[] args) throws IOException {
        InetAddress inetAddress = null;
        Socket socket = null;
        OutputStream os = null;
        try {
            // 1.服务器的地址和ip
            inetAddress = InetAddress.getByName("127.0.0.1");
            int port = 3200;
            // 2.创建socket连接
            socket = new Socket(inetAddress, port);
            // 3.发送消息
            os = socket.getOutputStream();
            os.write("你好".getBytes());
            os.flush(); // 确保数据发送
            socket.shutdownOutput();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (socket != null) socket.close();
            if (os != null) os.close();
        }
    }
}

// 服务端解释消息
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerTcp {
    public static void main(String[] args) throws IOException {
        ServerSocket socket = null;
        Socket socket1 = null;
        InputStream is = null;
        ByteArrayOutputStream baos = null;
        try {
            // 1.创建一个端口号的连接
            socket = new ServerSocket(3200);
            // 2.等待连接
            while (true) {
                socket1 = socket.accept();
                // 3.读取客户端消息
                is = socket1.getInputStream();
                baos = new ByteArrayOutputStream();
                byte[] buf = new byte[1024];
                int len;
                while ((len = is.read(buf)) != -1) {
                    baos.write(buf, 0, len);
                }
                System.out.println(baos.toString());
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        } finally {
            // 确保资源释放
            if (baos != null) baos.close();
            if (is != null) is.close();
            if (socket1 != null) socket1.close();
            if (socket != null) socket.close();
        }
    }
}
```

### 文件上传

- 接收文件

  ```java
  import java.io.FileOutputStream;
  import java.io.InputStream;
  import java.io.OutputStream;
  import java.net.ServerSocket;
  import java.net.Socket;

  // 接收文件
  public class FileSever {
      public static void main(String[] args) throws Exception {
          // 1.创建连接
          ServerSocket serverSocket = new ServerSocket(5000);
          // 2.监听客户端连接
          Socket socket = serverSocket.accept();
          // 3.获取输入流
          InputStream is = socket.getInputStream();
          // 4.得到文件并输出
          FileOutputStream fos = new FileOutputStream("avatar.jpg");
          byte[] buf = new byte[1024];
          int len;
          while ((len = is.read(buf)) != -1) {
              fos.write(buf, 0, len);
          }
          // 5.通知客户端我已经接收完了
          OutputStream os = socket.getOutputStream();
          os.write("我已经接收完了".getBytes());
          // 6.关闭
          fos.close();
          is.close();
          socket.close();
          serverSocket.close();
      }
  }
  ```

- 传输文件

  ```java
  import java.io.ByteArrayOutputStream;
  import java.io.FileInputStream;
  import java.io.InputStream;
  import java.io.OutputStream;
  import java.net.InetAddress;
  import java.net.Socket;

  // 上传文件
  public class FileClient {
      public static void main(String[] args) throws Exception {
          // 1.创建连接地址
          Socket socket = new Socket(InetAddress.getByName("127.0.0.1"), 5000);
          // 2.读取文件
          OutputStream os = socket.getOutputStream();
          FileInputStream fis = new FileInputStream("2.jpg");
          byte[] buf = new byte[1024];
          int len = 0;
          while ((len = fis.read(buf)) != -1) {
              // 3.传输文件
              os.write(buf, 0, len);
          }
          // 4.传输结束通知服务端
          socket.shutdownOutput();
          // 5.接收服务端传递过来的消息
          InputStream is = socket.getInputStream();
          ByteArrayOutputStream baos = new ByteArrayOutputStream();
          byte[] buf1 = new byte[1024];
          int len1;
          while ((len1 = is.read(buf1)) != -1) {
              baos.write(buf1, 0, len1);
          }
          System.out.println(baos.toString());

          // 6.关闭
          fis.close();
          os.close();
          socket.close();
      }
  }
  ```

## 3、UDP

### 发送消息

任意一方都可以是发送方，也可以是接受方

```java
// 发送方
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetSocketAddress;

public class UdpSender {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket(8888);
        // 从控制台读取数据
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        while (true) {
            String data = reader.readLine();
            byte[] data1 = data.getBytes();
            DatagramPacket packet = new DatagramPacket(data1,0,data1.length,new InetSocketAddress("127.0.0.1",6666));
            // 发送消息
            socket.send(packet);
            if (data.equals("bye")) break;
        }
        socket.close();
    }
}

// 接收方
package com.ldlang.network;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.util.Arrays;

public class UpdReceive {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket(6666);
        while (true){
            byte[] container = new byte[1024];
            DatagramPacket packet = new DatagramPacket(container,0,container.length);
            socket.receive(packet); // 阻塞式的接受包

            // 断开连接
            byte[] data = packet.getData();
            String str = new String(data);
            System.out.println(Arrays.toString(packet.getData()));

            System.out.println(str);
            if (str.equals("bye")) break;
        }
        socket.close();
    }
}
```

## 4、URL

下载文件

```java
package com.ldlang.network;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class URLStu {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://ldlang.github.io/lin-note/avatar.jpg");

        HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

        InputStream is = urlConnection.getInputStream();
        FileOutputStream fos = new FileOutputStream("avatar.jpg");

        byte[] buf = new byte[1024];
        int len;
        while ((len = is.read(buf)) != -1) {
            fos.write(buf, 0, len);
        }
        fos.close();
        is.close();
        urlConnection.disconnect();
    }
}
```
