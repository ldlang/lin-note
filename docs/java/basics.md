---
sidebar: auto
---

# 基础知识

## 1、Java三大版本

1. JavaSE：标准版（桌面程序，控制台开发...）
2. JavaME：嵌入式开发（手机，小家电...） 几乎已淘汰
3. JavaEE：E企业级开发（web端，服务器开发...）

## 2、注释

1. 单行注释，双斜线

   ```java
   //
   ```

2. 多行注释，`/* */`

   ```java
   /*
   我是注释
   */
   ```

3. javaDoc

   ```java
   /**
   * @Description 描述
   */
   ```

## 3、标识符（变量名）命名规范

1. 所有的标识符都应该以**字符**，**美元符**或**下划线**开始。
2. 首字符之后可以是字母、美元符、下划线或数字的任何字符组合。
3. **不能使用关键字作为变量名或者方法。**
4. 标识符是大小写敏感的。
5. 标识符也可以使用中文或者拼音，但不建议使用。

例：

```java
// 以下都是合法的变量名
String name = "张三";
String Name = "张三";
String $name = "张三";
String _name = "张三";
String _1name = "张三";
```

## 4、数据类型

![java数据类型](/java/java-dataType.png)

### 4.1、基本数据类型

1. 整数类型

   * **byte**：占1个字节 ，范围 -128 到 127

     ```java
     byte num1 = 11;
     ```

   * **short**：占2个字节 ，范围-32768到32767

     ```java
     short num2 = 10;
     ```

   * **int**：（**最常用**）占4个字节，范围-2147483648到2147483647。

     ```java
     int num = 1; // 最常用
     ```

   * **long**：占8个字节，**long类型要在数字后面加个L**，范围-9223372036854775808到9223372036854775807。

     ```java
     long num3 = 10L; // long类型要在数字后面加个L
     ```

2. 小数类型

   **最好完全避免使用小数类型的值进行比较，因为存在精度问题**

   * **float**：占4个字节，**float 类型要在后面加个F**。

     ```java
     float num4 = 10.12F; // float 类型要在后面加个F
     ```

   * **double**：占8个字节

     ```java
     double num5 = 10.1231;
     ```

3. 字符类型

   * **char**：占2个字节，里面只能有一个字符，并且只能使用单引号。

     ```java
     char aChar = 'a';
     char aChar = '哈';
     // 错误，只放一个字符
     char bChar = 'basd';
     // 错误，只能使用单引号
     char cChar = "c";
     ```

4. 布尔类型

   * **boolean**：占1位。

     ```java
     boolean flag = false;
     ```

## 5、类型转换

运算中不同类型的数据先转换为同一类型的数据才开始进行计算。数据类型容量排序，由低到高。`byte`，`short`，`char`之间不会相互转换，他们在计算时首先会转换为int类型。

```java
byte,short,char -> int -> long -> float -> double
```

**注意：**

1. 布尔值不能进行数据类型转换
2. 不能把对象数据类型转换为不相干的类型
3. 在把高容量转换到低容量时，要进行强制转换。
4. 转换的时候肯存在内存溢出，或者精度问题。

> 补充：jdk7中数字之间可以用 _ 连接，并且不会影响到数字真正的值。
>
> ```java
> System.out.println(10000 == 1_0000); // true
> ```

### 5.1、自动类型转换

数据类型按上面的**由低到高**就会**自动转换类型**。

```java
short num2 = 5;
int num3 = 1 + num2;
System.out.println(num3); // 6

char cha = 'a';
int num4 = cha + 1;
System.out.println(num4); // b
```

### 5.2、强制类型转换

数据类型按上面的**由高到低**就需要**强制转换类型**。

1. **语法:**

    * (类型)变量名

      ```java
      int num5 = 97;
      char cha1 = (char) num5;
      System.out.println(cha1); // a
      ```

    * (类型)(表达式)

      ```java
      int num5 = 97;
      char cha2 = (char) (num5 + 1);
      System.out.println(cha2); // b
      ```
    
2. 高转低可能会出现内存溢出，或者精度问题，得到的结果就无法预料。

    * 内存溢出

        ```java
        int num6 = 9999;
        byte num7 = (byte) num6;
        System.out.println(num7); // 15
        
        int num10 = 10_0000_0000;
        int num11 = 30;
        // 已经超过了int能承载的最大值，导致了内存溢出。
        int num12 = num10 * num11; 
        System.out.println(num12); // -64771072
        
        // 在进行乘之前需要转换为 long 类型
        long num13 = num10 * (long) num11;
        // 或者
        long num13 = (long) num10 * (long) num11;
        System.out.println(num13); // 30000000000
        ```
        
    * 精度问题
    
        ```java
        float num8 = 3.14f;
        int num9 = (int) num8;
        System.out.println(num9); // 3
        ```
    

## 6、变量、产量、作用域



