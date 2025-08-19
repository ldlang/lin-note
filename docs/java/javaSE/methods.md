---
sidebar: auto
---

# 方法

## 1、什么是方法？

方法是封装了代码块的函数，方法可以有返回值，也可以没有返回值。

1. 语法：

   `void`代表没有返回值

   ```java
   // 修饰符 返回值类型 方法名(参数列表) {
   //   方法体;
   //   return 返回值;
   // }

   // public static 是修饰符
   // int 是返回值类型
   // add 是方法名，括号里面的是方法的参数
   public static int add(int a, int b) {
       return a + b;
   }

   // 方法的调用
   add(5,10)
   ```

## 2、方法的重载

1. 什么是重载

   - 方法名必须相同
   - 参数必须不通（个数不通，或类型不同，或者参数排列顺序不同）
   - 方法的返回类型可同可不同
   - 仅仅返回类型不同，不足以成为方法的重载

2. 例

   ```java
   public static void main(String[] args) {
       int a = max(10,9,11);
       System.out.println(a);
   }

   // 重载1
   public static int max(int a, int b,int c) {
       if (a == b ) return 0;
       return Math.max(a,Math.max(b,c));
   }

   // 重载2
   public static double max(double a, double b) {
       if (a == b ) return 0;
       return Math.max(a, b);
   }

   // 重载3
   public static int max(int a, int b) {
       if (a == b ) return 0;
       return Math.max(a, b);
   }

   // 参数相同，返回类型不同，不是重载
   public static double max(int a, int b) {
       if (a == b ) return 0;
       return (double)a / b;
   }
   ```

## 3、可变参数（js 中的剩余参数）

1. 什么是可变参数

   - JDK 1.5 开始，Java 支持传递同类型的可变参数给一个方法。
   - 在方法声明中，在指定参数类型后加一个省略号(...)
   - 一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数必须在它之前声明。

2. 例子

   ```java
   public static void main(String[] args) {
       int max = maxVal(9,4,62,34,123,4,1);
       System.out.println(max);
   }

   // 找寻最大数字
   public static int maxVal(int... num) {
       int max = 0;
       for (int i = 0; i < num.length; i++) {
           if (num[i] > max) {
               max = num[i];
           }
       }
       return max;
   }
   ```

## 4、递归

1. 什么是递归

   - 自己调用自己
   - 自己调用自己的时候必须要有条件控制，不然就是死循环

2. 例子

   ```java
   public static void main(String[] args) {
       System.out.println(max(10));
   }

   public static int max(int n) {
       if (n <= 1)  return n;
       // 这里自己调用自己
       return n *  max(n - 1);
   }
   ```

## 5、静态方法

1. 有 `static` 的方法就是静态方法，静态方法不用实例化对象就可以调用。
   **同一个包下面不需要导入类**

```java
// Main.java
package methods.ldlang;

public class Main {
    public static void main(String[] args) {
        // 不需要实例化就能调用静态方法
        Student.say();
    }
}

// Student.java
package methods.ldlang;

public class Student {
    public static void say (){
        System.out.println("我是学生说话");
    }
}
```

## 6、非静态方法

1. 非静态方法必须实例化对象才能调用

```java
// Main.java
package methods.ldlang;

public class Main {
    public static void main(String[] args) {
        // 对象类型 对象名 = 对象值
        Student student = new Student();
        student.say();
    }
}

// Student.java
package methods.ldlang;

public class Student {
    public void say (){
        System.out.println("我是学生说话");
    }
}

```

## 7、不同方法之间的调用

1. 在同一个类里面静态方法能直接调用静态方法，**非**静态静态方法也能直接调用**非**静态方法，但是静态方法却不能调用非静态方法，非静态方法却能调用静态方法

   > 原因是：静态方法是和类一起加载的，存在的时间较早，而非静态方法则需要实例化对象后才能调用，实例化对象需要时间更长，所以静态方法不能调用非静态方法，非静态方法可以调用静态方法

## 8、值传递和引用传递

1. 普通数据类型在传递给函数就是值传递，修改后不会影响原数据

   ```java
    public static void main(String[] args) {
        int a = 1;
        System.out.println(a);

        change(a);
        System.out.println(a);
    }

   public static void change(int a) {
       a = 2;
   }
   ```

2. 对象给函数传递就是引用传递，修改后会改变原数据

   ```java
   public class Demo05 {
       public static void main(String[] args) {
           Person person = new Person();
           System.out.println(person.name); // null

           change(person);
           System.out.println(person.name); // 张三
       }

       public static void change(Person person) {
           person.name = "张三";
       }
   }

   class Person {
       String name;
   };
   ```
