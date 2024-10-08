---
sidebar: auto
---

# 基础知识

## 1、Java 三大版本

1. JavaSE：标准版（桌面程序，控制台开发...）
2. JavaME：嵌入式开发（手机，小家电...） 几乎已淘汰
3. JavaEE：E 企业级开发（web 端，服务器开发...）

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

   - **byte**：占 1 个字节 ，范围 -128 到 127

     ```java
     byte num1 = 11;
     ```

   - **short**：占 2 个字节 ，范围-32768 到 32767

     ```java
     short num2 = 10;
     ```

   - **int**：（**最常用**）占 4 个字节，范围-2147483648 到 2147483647。

     ```java
     int num = 1; // 最常用
     ```

   - **long**：占 8 个字节，**long 类型要在数字后面加个 L**，范围-9223372036854775808 到 9223372036854775807。

     ```java
     long num3 = 10L; // long类型要在数字后面加个L
     ```

2. 小数类型

   **最好完全避免使用小数类型的值进行比较，因为存在精度问题**

   - **float**：占 4 个字节，**float 类型要在后面加个 F**。

     ```java
     float num4 = 10.12F; // float 类型要在后面加个F
     ```

   - **double**：占 8 个字节

     ```java
     double num5 = 10.1231;
     ```

3. 字符类型

   - **char**：占 2 个字节，里面只能有一个字符，并且只能使用单引号。

     ```java
     char aChar = 'a';
     char aChar = '哈';
     // 错误，只放一个字符
     char bChar = 'basd';
     // 错误，只能使用单引号
     char cChar = "c";
     ```

4. 布尔类型

   - **boolean**：占 1 位。

     ```java
     boolean flag = false;
     ```

## 5、类型转换

运算中不同类型的数据先转换为同一类型的数据才开始进行计算。数据类型容量排序，由低到高。`byte`，`short`，`char`之间不会相互转换，他们在计算时首先会转换为 int 类型。

```java
byte,short,char -> int -> long -> float -> double
```

**注意：**

1. 布尔值不能进行数据类型转换
2. 不能把对象数据类型转换为不相干的类型
3. 在把高容量转换到低容量时，要进行强制转换。
4. 转换的时候肯存在内存溢出，或者精度问题。

> 补充：jdk7 中数字之间可以用 \_ 连接，并且不会影响到数字真正的值。
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

   - (类型)变量名

     ```java
     int num5 = 97;
     char cha1 = (char) num5;
     System.out.println(cha1); // a
     ```

   - (类型)(表达式)

     ```java
     int num5 = 97;
     char cha2 = (char) (num5 + 1);
     System.out.println(cha2); // b
     ```

2. 高转低可能会出现内存溢出，或者精度问题，得到的结果就无法预料。

   - 内存溢出

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

   - 精度问题

     ```java
     float num8 = 3.14f;
     int num9 = (int) num8;
     System.out.println(num9); // 3
     ```

## 6、变量、常量、作用域

### 6.1、变量

**注意事项：**

1. java 是强类型语言，所以每个变量都必须有类型。
2. 创建变量的语法：**类型 变量名 = 值;**

**变量可分为：**

1. 类变量

   通过`static`关键字在类下面定义的变量。

   ```java
   public class LetClass {
       // 类变量
       static int money = 10000;

       public static void main(String[] args) {
           System.out.println(money); // 10000
       }
   }

   ```

2. 实例变量

   类实例化后才能使用的变量，也就是类下面没有`static`关键字的变量。

   ```java
   public class LetClass {
       // 实例变量
       String name = "张三";

       public static void main(String[] args) {
           // 需要通过 new 类 名后才能使用
           LetClass letClass = new LetClass();
           System.out.println(letClass.name);
       }
   }
   ```

3. 局部变量

   在方法内部定义的变量，只能在这个方法里面使用。

   ```java
   public class LetClass {
       public static void main(String[] args) {
           // 局部变量，只能在 main 这个方法里面使用
           int i = 10;
           System.out.println(i);
       }
   }
   ```

**变量默认值**

| 类型     | 默认值   |
| -------- | -------- |
| 数字     | 0 或 0.0 |
| 布尔值   | false    |
| 引用类型 | null     |

### 6.2、常量（final）

不会变化的量，使用关键字`final`定义，并且常量名一般用全大写字母表示。

```java
public class FinalClass {
    // 定义一个常量 WIDTH
    static final int WIDTH = 80;

    public static void main(String[] args) {
        System.out.println(WIDTH);
    }
}
```

## 7、运算符

| 运算符类型           | 运算符                           |
| -------------------- | -------------------------------- |
| 算术运算符           | +，-，\*，/，%，++，--           |
| 赋值运算符           | =                                |
| 关系元素符           | <，>，>=，<=，==，!=，instanceof |
| 逻辑运算符           | &&，\|\|，!                      |
| 位运算符（了解即可） | &，\|，^，~，>>，<<，>>>         |
| 三元运算符           | ? ... :                          |
| 扩展赋值元素符       | +=，-=，\*=，/=                  |

**注意：** java 中有类型的存在

```java
byte,short -> int -> long -> float -> double
```

1. 如果两个`int`类型的数**相除**得到是小数，如果没有将其中一个的类型转为`flaot`或者`double`那么得到永远是**舍去小数位**的整数。
2. 小于`int`或者包含`int`的任意两个类型的值相加得到的都是`int`类型的值。
3. 大于任意类型的值与`int`或者大于`int`类型的值相加，得到的值都是最大那个类型的值。

> 如何验证：
>
> ```java
> int e = 1;
> long f = 1;
> // 转为不能转的类型的时候，就会报错(Inconvertible types; cannot cast 'long' to 'java.lang.String'),以此来证明相加后的类型。
> System.out.println((String) (e + f));
> ```

## 8、包机制

1. java 中有包机制，用于区别类名的命名空间。
   **语法：**

   ```java
   package pkg1[.pag2[.pkg3...]]
   ```

   **例：** 有这样一个目录结构 `src/com/ldlang/Pack.java`

   ```java
   // 在这个(src/com/ldlang)目录下的所有java文件的顶层都要加入以下代码
   package com.ldlang;
   ```

   > 注意：一般利用公司域名倒置作为包名; com.ldlang.www

2. 为了能够在一个包中能够使用另一个包的成员，可以使用`import`来导入。

   **例：** 在`src/top/ldlang/PackTop.java`中使用`src/com/ldlang/Pack.java`这个文件。

   ```java
   // Pack.java 文件
   package com.ldlang;

   public class Pack {

       public void main() {
           System.out.println("main");
       }
   }
   ```

   ```java
   // PackTop.java 文件
   package top.ldlang;
   import com.ldlang.Pack; // import 语句必须放在 package 之后

   public class PackTop {
       public static void main(String[] args) {
           Pack pack = new Pack();
           pack.main(); // main
       }
   }
   ```

3. 同时同一文件夹下的所有包

   ```java
   import com.ldlang.*;
   ```

## 9、javaDoc

```java
/**
 * @param 参数名
 * @return 返回值
 * @throws 异常抛出情况
 * @author 作者名
 * @version 版本号
 * @since 指明最早使用的jdk版本
 */
```
