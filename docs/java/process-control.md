---
sidebar: auto
---

# 流程控制

## 1、Scanner 对象

用来获取用户输入的对象。

1. 基本语法

   ```java
   Scanner s = new Scanner(System.in);
   ```

2. 获取输入

   ```java
   if (scanner.hasNext()) {
       String sca = scanner.next();
       System.out.println("我是next的输出：" + sca);
   }

   // 常用
   if (scanner.hasNextLine()) {
       String s = scanner.nextLine();
       System.out.println("我是nextLine的输出：" + s);
   }
   ```

   > next 和 nextLine 的区别，next 只能获取空格之前的字符，也就是说 next 的输入遇到空格就会被结束，而 nextLine 只有遇到回车才会结束，所以能接受空格

3. 输入检查

   `hasNext()` 用于检查 `Scanner` 对象是否还有下一个输入项可以读取，返回一个布尔值；

   ```java
   if (scanner.hasNext()) {
       String sca = scanner.next();
       System.out.println("我是next的输出：" + sca);
   }
   ```

4. 其余的 next

   `Scanner`上除了有上面的 4 个方法，还有`nextFloat`、`hasNextFloat`、`nextInt`、`hasNextInt`等的各种类型的方法，`has`的方法用于判断得到是不是对应类型的值，`next`的方法则是用于获取输入的值；

5. 关闭`Scanner`

   每次调用完`Scanner`都要进行关闭

   ```java
   scanner.close();
   ```

## 以下的内容和 js 一样，待续补充

## 2、if

## 3、switch

## 4、while

## 5、do...while

## 6、for
