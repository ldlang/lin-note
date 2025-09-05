---
sidebar: auto
---

# 多线程

## 1、线程创建方式

- Thread class：继承 Thread 类
- Runnable：实现 Runnable 接口
- Callable：实现 Callable 接口

### 继承 Thread 类

- 说明

  - 子类继承 Thread 类具备多线程能力
  - 启动线程：子类对象.start()
  - **不推荐使用：避免 OPP 单继承局限性**

- 使用方式
  - 创建一个类去继承`Thread`类，并重写`run`方法，在`run`写逻辑
  - 实例化继承`Thread`类的类，并调用`start`方法开启线程
  - 线程不一定立即执行，有`cpu`执行调度

```java
// 创建线程方式一：直接继承Thread类，重写run方法,调佣start开启线程
public class ThreadStu extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 200; i++) {
            System.out.println("--------我是run" + i);
        }
    }

    public static void main(String[] args) {
        ThreadStu threadStu = new ThreadStu();

        // 调用 strat 开启线程
        threadStu.start();

        for (int i = 0; i < 1000; i++) {
            System.out.println("我是主进程-------" + i);
        }
        // 打印结果是 run方法里面的打印会穿插在主进程里面
    }
}
```

例：

```java
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;
import java.net.URL;

public class ThreadTest extends Thread {
    private String url;
    private String name;

    public ThreadTest(String url, String name) {
        this.url = url;
        this.name = name;
    }

    @Override
    public void run() {
        WebDownloader webDownloader = new WebDownloader();
        webDownloader.downloader(url, name);
        System.out.println("下载了文件名为：" + name);
    }

    public static void main(String[] args) {
        ThreadTest t1 = new ThreadTest("https://ldlang.github.io/lin-note/red-book/offset.png", "1.jpg");
        ThreadTest t2 = new ThreadTest("https://ldlang.github.io/lin-note/avatar.jpg", "2.jpg");
        ThreadTest t3 = new ThreadTest("https://ldlang.github.io/lin-note/red-book/getBoundingClientRect.png", "3.jpg");

        t1.start();
        t2.start();
        t3.start();
    }
}

// 第三方的下载包 commons IO
class WebDownloader {
    public void downloader(String url, String name) {
        try {
            FileUtils.copyURLToFile(new URL(url), new File(name));
        } catch (IOException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        }
    }
}
```

因为是多线程的原因，最后不一定是按代码顺序下砸的，那个下载的快就先显示那个

![下载顺序](/java/Thread.png)

### 实现 Runnable 接口

- 实现接口 Runnable 具有多线程能力
- 启动线程：传入目标对象 + `Thread.start()`
- **推荐使用：避免单继承局限性，灵活方便，方便同一个对象被多和线程使用**

```java
package com.ldlang.thread;

public class RunnableStu implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 200; i++) {
            System.out.println("我是线程的：" + 1);
        }
    }

    public static void main(String[] args) {
        RunnableStu runnableStu = new RunnableStu();
        // 传入runnableStu实现类
        Thread thread = new Thread(runnableStu);
        thread.start();

        for (int i = 0; i < 1000; i++) {
            System.out.println("我是主进程----------" + i);
        }
    }
}

```
