---
sidebar: auto
---

# I/O 框架

## 1、流的分类

流：内存与存储设备之间传输数据的通道

### 按方向分类

- 输入流：将硬盘中的数据读入到程序中
- 输出流：将程序中的数据输出到硬盘中

### 按单位分类

- 字节流：以字节为单位，可以读写所有数据
- 字符流：以字符为单位，只能读写文本数据

### 按功能

- 节点流：具有实际传输数据的读写功能
- 过滤流：在节点流的基础之上增强功能

## 2、字节流抽象类

- `InputStream`

  - read()

  - read(byte[] b)

  - read(byte[] b, int off, int len)

    > byte[] b 目标字节数组，用于存储从输入流读取的数据
    >
    > int off 从数组 `b` 的哪个位置（索引）开始存储读取的数据
    >
    > int len 最多读取的字节数（即尝试读取 `len` 个字节，但实际可能少于 `len`）

- `OutputStream`

  - write(int n)

  - write(byte[] b)

  - write(byte[] b, int off, int len)

    > byte[] b 要写入的字节数组（数据来源）
    >
    > int off 从字节数组 `b` 的哪个位置（索引）开始读取数据。
    >
    > int len 指定从 `off` 开始连续写入的字节数

### FileInputStream

- `public int read(byte[] b)`

  > 从流中读取多个字节，将读到的内容存入 b 数组，返回实际读到的字节数，如果达到文件的尾部，则返回-1

  ```java
  import java.io.FileInputStream;
  import java.io.IOException;

  public class FileInput {
      public static void main(String[] args) throws IOException {
          // 读取电脑 D 盘中 a.txt 文件中的内容
          FileInputStream fis = new FileInputStream("d:\\a.txt");
          // 单字节方式读取
          fis.read();
          int data = 0;
          while ((data = fis.read()) != -1) {
              System.out.println((char) data);
          }
          // 关闭
          fis.close();

          // 多字节读取方式
          byte[] buf = new byte[1024];
          FileInputStream fis1 = new FileInputStream("d:\\a.txt");
          int count = 0;
          while ((count = fis1.read(buf)) != -1) {
              System.out.println(new String(buf, 0, count));
          }
          // 关闭
          fis1.close();
      }
  }

  ```

### FileOutputStream

- `public int write(byte[] b)`

  > 一次写多个字节，将 b 数组中所有字节，写入输出流

  ```java
  import java.io.FileOutputStream;
  import java.io.IOException;

  public class FileOutput {
      public static void main(String[] args) throws IOException {
          // 往电脑 D 盘中写入 c.txt文件
          FileOutputStream fos = new FileOutputStream("d:\\c.txt");
          // 单字节写入
          fos.write(97); // 97 是 a Ascll编码
          fos.write('b');
          fos.write('c');
          fos.close();

          // 往电脑 D 盘中写入 d.txt文件，文件内容是 asdfgh
          // 多字节写入
          FileOutputStream fos1 = new FileOutputStream("d:\\d.txt");
          String str = "asdfgh";
          fos1.write(str.getBytes());
          fos1.close();
      }
  }
  ```

例：复制文件

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyFile {
    public static void main(String[] args) throws IOException {
        // 读取文件
        FileInputStream fis = new FileInputStream("d:\\1.jpeg");
        // 写入文件
        FileOutputStream fos = new FileOutputStream("d:\\2.jpeg");

        byte[] b = new byte[1024];
        int len = 0;
        // fis.read(b) 读取1.jpeg的文件，写入到b变量中
        while ((len = fis.read(b)) != -1) {
            fos.write(b, 0, len);
        }
        fis.close();
        fos.close();
    }
}
```

## 3、字节缓冲流

缓冲流：`BufferedInputStream`和`BufferedOutputStream`

- 提高 IO 效率，减少访问磁盘的次数
- 数据存储在缓冲区中，flush 是件缓存区的内容写入文件夹中，也可以直接 close

### BufferedInputStream

读取文件

```java
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class BufferInput {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("d:\\d.txt");
        // 给缓冲流传入读取到的流
        BufferedInputStream bis = new BufferedInputStream(fis);

        int count = 0;
        while ((count = bis.read()) != -1) {
            System.out.print((char) count);
        }
    }
}
```

### BufferedOutputStream

写入文件

```java
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferOutput {
    public static void main(String[] args) throws IOException {
        // 1. 创建字节缓冲流
        FileOutputStream fos = new FileOutputStream("d:\\m.txt");
        BufferedOutputStream bos = new BufferedOutputStream(fos);
        // 2. 写入文件
        for (int i = 0; i < 10; i++) {
            bos.write("hello world".getBytes()); // 写入8k缓冲区
            bos.flush(); // 刷新到硬盘
        }
        bos.close(); // 只需要关闭缓冲区，另一个就会被关闭了
    }
}
```

## 4、对象流（也属于字节流）

对象流：`ObjectInputStream`和`ObjectOutputStream`

- 增强了缓冲区功能
- 增强了读写 8 中基本数据类型和字符串功能
- 增强了读写对象的功能：
  - `readObject`从流中读取对象（反序列化）
  - `writeObject(Object obj)`向六中写入一个对象（序列化）

> 1. 序列化的类必须要实现 Serializable 接口
> 2. 序列化类中对象属性要求实现 Serializable 接口
> 3. 序列化版本号 Id，保证序列化的类和反序列化的类是同一个类，否则反序列化会报错
> 4. 使用 transient（瞬间的） 修饰符的属性，就不能被序列化
> 5. 静态属性不能被序列化
> 6. 要想序列化多个对象，可以借助集合来实现

### ObjectOutputStream（序列化）

向文件中写入对象

```java
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class ObjectOutput {
    public static void main(String[] args) throws Exception {
        FileOutputStream fos = new FileOutputStream("d:\\h.txt");
        ObjectOutputStream oos = new ObjectOutputStream(fos);

        Student student = new Student(19, "张三");
        // 将对象写入文件中
        oos.writeObject(student);
        oos.close();
    }
}

import java.io.Serializable;
// 使用流的类必须要继承 Serializable 接口
public class Student implements Serializable {
    private int age;
    private String name;
    // 加入序列化id
    private static final long serialVersionUID = 100L;

    public Student(int age, String name) {
        this.age = age;
        this.name = name;
    }
}
```

### ObjectInputStream （反序列化）

读取文件中的对象

```java
import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class ObjectIput {
    public static void main(String[] args) throws Exception {
        FileInputStream fis = new FileInputStream("d:\\h.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);

        Student student = (Student) ois.readObject();
        ois.close();
        System.out.println(student); // Student{age=19, name='张三'}
    }
}
```

## 5、字符流

常见的字符编码

- IS0-8859-1：收录除 ASCII 外，还包括西欧、希腊语、泰语、阿拉伯语、希伯来语对应的文字符号。
- UTF-8： 针对 Unicode 码表的可变长度字符编码
- GB2312：简体中文
- GBK：简体中文、扩充（GB2312 的升级）
- BIG5 台湾： 繁体中文，
