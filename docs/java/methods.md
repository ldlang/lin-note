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

   * 方法名必须相同
   * 参数必须不通（个数不通，或类型不同，或者参数排列顺序不同）
   * 方法的返回类型可同可不同
   * 仅仅返回类型不同，不足以成为方法的重载

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

## 3、可变参数（js中的剩余参数）

1. 什么是可变参数

   * JDK 1.5 开始，Java支持传递同类型的可变参数给一个方法。
   * 在方法声明中，在指定参数类型后加一个省略号(...)
   * 一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数必须在它之前声明。

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

   * 自己调用自己
   * 自己调用自己的时候必须要有条件控制，不然就是死循环

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

   