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
  - 启动线程：子类对象.start()，最后是调用了重写的 run 方法里面的逻辑
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

### 实现 Callable 接口

好处：

- 可以抛出异常
- 可以定义返回值

```java
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableStu implements Callable<Boolean> {
    private String url;
    private String name;

    public CallableStu(String url, String name) {
        this.url = url;
        this.name = name;
    }

    // 下载方法的执行体
    @Override
    public Boolean call() throws Exception {
        WebDownloader webDownloader = new WebDownloader();
        webDownloader.downloader(url, name);
        System.out.println("下载了文件名为：" + name);
        return true;
    }

    public static void main(String[] args) throws Exception {
        CallableStu t1 = new CallableStu("https://ldlang.github.io/lin-note/red-book/offset.png", "1.jpg");
        CallableStu t2 = new CallableStu("https://ldlang.github.io/lin-note/avatar.jpg", "2.jpg");
        CallableStu t3 = new CallableStu("https://ldlang.github.io/lin-note/red-book/getBoundingClientRect.png", "3.jpg");

        // 创建执行服务-线程池
        ExecutorService service = Executors.newFixedThreadPool(3);

        // 提交执行
        Future<Boolean> r1 = service.submit(t1);
        Future<Boolean> r2 = service.submit(t2);
        Future<Boolean> r3 = service.submit(t3);

        // 获取执行结果
        boolean rs1 = r1.get();
        boolean rs2 = r2.get();
        boolean rs3 = r3.get();

        // 关闭
        service.shutdownNow();
    }
}

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

## 2、Lamda 表达式

### 函数式接口

- 任何接口，如果只包含唯一一个抽象方法，那么他就是一个函数式接口。

- 任何函数式接口，我们可以通过 lambda 表达式来创建该接口

  ```java
  /**
   * lambda的演变过程
   */
  public class LambdaStu {

      // 3.静态内部类
      public static class Like1 implements Ilike {
          @Override
          public void sayLambda() {
              System.out.println("我是静态内部类的实现");
          }
      }

      public static void main(String[] args) {
          Ilike like = new like();
          like.sayLambda();

          Ilike like1 = new Like1();
          like1.sayLambda();

          // 4.局部内部类
          class Like2 implements Ilike {
              @Override
              public void sayLambda() {
                  System.out.println("我是局部内部类的实现方法");
              }
          }

          Ilike like2 = new Like2();
          like2.sayLambda();

          // 5.匿名内部类
          Ilike like3 = new Ilike() {
              @Override
              public void sayLambda() {
                  System.out.println("我是匿名内部类");
              }
          };
          like3.sayLambda();

          // 6.lambda 表达式
          Ilike like5 = () -> {
              System.out.println("我是Lambda简化的");
          };
          like5.sayLambda();
      }
  }

  // 1.定义一个函数式接口
  interface Ilike {
      public void sayLambda();
  }

  // 2.实现类
  class like implements Ilike {
      @Override
      public void sayLambda() {
          System.out.println("我是实现方法");
      }
  }
  ```

  lambda 简化

  ```java
  public class LambdaStu1 {
      public static void main(String[] args) {
          // 以下的前置条件: 必须是函数式接口

          // 简化1
          // do ido = (int a) -> {
          //      System.out.println("传入的值是：" + a);
          // };

          // 简化2
          // 前提：参数可以是多个，代码体式一行
          // Ido ido = (int a) -> System.out.println("传入的值是：" + a);

          // 简化3
          // 前提：参数可以是多个，代码体式一行
          // Ido ido = (a, b) -> System.out.println("传入的值1是：" + a + "值2：" + b);

          // 简化4
          // 前提：函数体只有一行，参数只有一个
          Ido ido = a -> System.out.println("传入的值是：" + a);
          ido.doSth(3);
      }
  }

  interface Ido {
      void doSth(int a);
  }
  ```

## 3、线程状态

- 线程状态。线程可以处于以下状态之一：
  - NEW：尚未启动的线程处于此状态。
  - RUNNABLE：在 Java 虚拟机中执行的线程处于此状态。
  - BLOCKED：被阻塞等待监视器锁定的线程处于此状态。
  - WAITING ：正在等待另一个线程执行特定动作的线程处于此状态。
  - TIMED_WAITING：正在等待另一个线程执行动作达到指定等待时间的线程处于此状态。
  - TERMINATED：已退出的线程处于此状态。

![线程状态](/java/thread-status.png)

```java
// 观察线程状态
public class ThreadState {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            System.out.println("线程完毕");
        });

        // 线程未启动时的状态
        Thread.State state = thread.getState();
        System.out.println("线程未启动时的状态" + state);

        thread.start(); // 启动线程
        state = thread.getState();
        System.out.println("线程启动后的状态" + state);

        // 实时监测状态
        // 如果不是已退出状态就一直监测
        while (state != Thread.State.TERMINATED) {
            Thread.sleep(100);
            state = thread.getState();
            System.out.println("实时状态" + state);
        }
    }
}
```

### 停止线程

- 不推荐使用 JDK 提供的`stop()`、`destory()`方法来停止线程

- 推荐线程自己停下来

- 建议使用一个标志位进行终止变量

  > 例：当 flag=false 的时候，则终止线程

  ```java
  public class ThreadStop implements Runnable {
      private boolean flag = true;

      @Override
      public void run() {
          int i = 0;
          while (flag) {
              System.out.println("线程正在执行" + i++);
          }
      }

      // 通过改变标志位去终止线程
      public void stop() {
          this.flag = false;
      }

      public static void main(String[] args) {
          ThreadStop threadStop = new ThreadStop();

          Thread t = new Thread(threadStop);
          t.start();

          for (int i = 0; i < 1000; i++) {
              System.out.println(i);
              if (i == 900) {
                  threadStop.stop();
                  System.out.println("结束线程");
              }
          }
      }
  }
  ```

### 线程休眠（sleep）

- `sleep(时间)`指定当前线程阻塞的毫秒数

- sleep 存在异常`InterruptedException`

- sleep 时间到达后线程进入就绪状态

- sleep 可以模拟网络延时、倒计时等

- 每一个对象都有一个锁，sleep 不会释放锁

  ```java
  public class ThreadSleep {
      public static void main(String[] args) {
          timeDown();
      }

      // 模拟倒计时
      public static void timeDown() {
          int i = 10;
          do {
              try {
                  Thread.sleep(1000);
              } catch (InterruptedException e) {
                  throw new RuntimeException(e);
              }
              i--;
              System.out.println(i);
          } while (i > 0);
      }
  }
  ```

### 线程礼让

- 礼让线程，让当前正在执行的线程暂停，但不阻塞

- 将线程从运行转态转为就绪状态

- 让 cpu 重新调度，礼让不一定成功，看 cup 心情

  ```java
  package com.ldlang.thread;

  public class ThreadYield implements Runnable {
      @Override
      public void run() {
          System.out.println(Thread.currentThread().getName() + "线程开始执行了");
          Thread.yield(); // 线程礼让
          System.out.println(Thread.currentThread().getName() + "线程结束");
      }

      public static void main(String[] args) {
          ThreadYield threadYield = new ThreadYield();

          new Thread(threadYield, "a").start();
          new Thread(threadYield, "b").start();
      }
  }
  ```

### 线程阻塞

join 合并线程，待此线程执行完之后，再执行其他线程，其他线程阻塞

```java
public class ThreadJoin implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 1000; i++) {
            System.out.println("我是线程" + i);
        }
    }

    public static void main(String[] args) {
        ThreadJoin threadJoin = new ThreadJoin();
        Thread thread = new Thread(threadJoin);
        thread.start();

        // 主程序和线程同时执行了，但是主程序执行到100的时候就会被线程强行阻塞，只有等线程执行完，主程序才能继续执行
        for (int i = 0; i < 500; i++) {
            if (i == 100) {
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            System.out.println("main" + i);
        }
    }
}
```

### 线程优先级

- java 提供一个线程调度器来监控程序中启动后进入就绪状态的所有线程，线程调度器暗账优先级决定应该调度那个线程来执行

- 线程的优先级用数字 1-10 表示

  - Thread.MAX_PRIORITY：优先级最大值（10）
  - Thread.NORM_PRIORITY：优先级默认值（5）
  - Thread.MIN_PRIORITY：优先级最小值（1）

- 获取优先级：`getPriority`

- 设置优先级：`setPriority`

- **不一定会按优先级执行，要看 cpu 调度**

  ```java
  public class ThreadPriority {
      public static void main(String[] args) {
          System.out.println(Thread.currentThread().getName() + "主线程：" + Thread.currentThread().getPriority());

          MyThread myThread = new MyThread();

          Thread t1 = new Thread(myThread, "t1");
          t1.start();

          Thread t2 = new Thread(myThread, "t2");
          t2.setPriority(Thread.MAX_PRIORITY);
          t2.start();

          Thread t3 = new Thread(myThread, "t3");
          t3.setPriority(Thread.MIN_PRIORITY);
          t3.start();

          Thread t4 = new Thread(myThread, "t4");
          t4.start();

          Thread t5 = new Thread(myThread, "t5");
          t5.setPriority(8);
          t5.start();
      }
  }

  class MyThread implements Runnable {
      @Override
      public void run() {
          System.out.println(Thread.currentThread().getName() + "优先级为：" + Thread.currentThread().getPriority());
      }
  }
  ```

### 守护线程

- 线程分为**用户线程**和**守护线程**

- 虚拟机必须确保用户线程执行完毕

- 虚拟机不用等待守护线程执行完毕就可退出程序

  > 例如：监控内存，垃圾回收等待

  ```java
  // 只要用户进程结束了，进程就结束了，不会在乎守护进程是否结束
  public class ThreadDaemon {
      public static void main(String[] args) {
          God god = new God();
          You you = new You();

          Thread t1 = new Thread(god);
  		// 改为守护进程
          t1.setDaemon(true); // 默认是false是用户线程
          t1.start();

          Thread t2 = new Thread(you);
          t2.start();
      }
  }

  // 守护进程
  class God implements Runnable {
      @Override
      public void run() {
          while (true) {
              System.out.println("守护线程");
          }
      }
  }

  // 用户进程
  class You implements Runnable {
      @Override
      public void run() {
          for (int i = 0; i < 100; i++) {
              System.out.println("用户线程执行中-----------");
          }
          System.out.println("用户线程执行结束");
      }
  }
  ```

## 4、线程同步机制

- 由于同一进程的多个线程共享同一块存储空间，在带来方便的同时,也带来了访问冲突问题，为了保证数据在方法中被访问时的正确性，在访问时加入锁机制`synchronized`,当一个线程获得对象的排它锁,独占资源,其他线程必须等待使用后释放锁即可.存在以下问题
  - 一个线程持有锁会导致其他所有需要此锁的线程挂起
  - 在多线程竞争下，加锁,释放锁会导致比较多的上下文切换 和 调度延时,弓起性能问题;
  - 如果一个优先级高的线程等待一个优先级低的线程释放锁 会导致优先级倒置，引起性能问题

### 同步方法

- 由于我们可以通过 `private` 关键字来保证数据对象只能被方法访问,所以我们只需要针对方法提出一套机制,这套机制就是 `synchronized` 关键字,它包括两种用法`synchronized` 方法和`synchronized`块

- `synchronized`方法控制对“对象”的访问,每个对象对应一把锁,每个`synchronized`方法都必须获得调用该方法的对象的锁才能执行，否则线程会阻塞方法一旦执行，就独占该锁，直到该方法返回才释放锁,后面被阻塞的线程才能获得这个锁，继续执行

  - 例 1：在方法的加入`synchronized`

    ```java
    public class RunnableStu1 implements Runnable {
        private int tickNum = 100;
        boolean flag = true;

        @Override
        public void run() {
            while (flag) {
                buy();
            }
        }

       	// 加入synchronized将buy方法变成同步的，才能票数实现依次递减
        // synchronized锁的是当前对象也就是RunnableStu1
        public synchronized void buy() {
            if (tickNum <= 0) {
                flag = false;
                return;
            }
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(Thread.currentThread().getName() + "拿到了" + tickNum--);
        }

        public static void main(String[] args) {
            RunnableStu1 tick1 = new RunnableStu1();

            new Thread(tick1, "老李呀").start();
            new Thread(tick1, "张三").start();
            new Thread(tick1, "张").start();
        }
    }
    ```

  - 例 2：`synchronized`锁代码块

    ```java
    public class UnsafeBank {
        public static void main(String[] args) {
            Account account = new Account(100, "公共基金");

            Withdrawal w1 = new Withdrawal(account, 60, "张三");
            Withdrawal w2 = new Withdrawal(account, 70, "李四");

            w1.start();
            w2.start();
        }
    }

    class Account {
        int money; // 账户总存款
        String name;

        public Account(int money, String name) {
            this.money = money;
            this.name = name;
        }
    }

    //模拟银行取款
    class Withdrawal extends Thread {
        Account account; //账户
        int drawingMoney; // 取了多少钱
        int nowMoney; // 剩余多少钱

        public Withdrawal(Account account, int drawingMoney, String name) {
            super(name);
            this.account = account;
            this.drawingMoney = drawingMoney;
        }

        @Override
        public void run() {
            // 使用synchronized代码块修改锁的对象
            synchronized (account) {
                if (account.money - drawingMoney < 0) {
                    System.out.println("钱不够，取不了那么多");
                    return;
                }
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                account.money = account.money - drawingMoney;
                nowMoney = nowMoney + drawingMoney;

                System.out.println(account.name + "的余额是" + account.money);
                System.out.println(this.getName() + "手里的钱是" + nowMoney);
            }
        }
    }
    ```

  - 例 3：`synchronized`锁代码块

    ```java
    import java.util.ArrayList;
    import java.util.List;

    public class UnsafeList {
        public static void main(String[] args) {
            List<String> list = new ArrayList<>();

            for (int i = 0; i < 10000; i++) {
                new Thread(() -> {
                    // 如果不锁对象，那么最后可能得到的就不是1000个，因为List的线程是不安全的
                    synchronized (list) {
                        list.add(Thread.currentThread().getName());
                    }
                }).start();
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(list.size());
        }
    }

    ```
