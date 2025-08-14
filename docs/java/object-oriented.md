---
sidebar: auto
---

# 面向对象

以类的方式组织代码，以对象的组织（封装）数据；

面向对象的本质就是：以类的方式组织代码，以对象的组织（封装）数据。

## 1、类与对象的创建

1. 创建类

   ```java
   public class Student {
       String name;
       int age;

       public void setName(String name) {
           System.out.println("赋值前的name：" + this.name);
           this.name = name;
           System.out.println("赋值后的name：" + this.name);
       }
   }
   ```

2. 创建对象

   ```java
   public class Application {
       // 一个项目应该只存在一个main方法
       public static void main(String[] args) {
           // 类实例化后会返回一个自己的对象，同一个类可以通过new产生多个不同的对象
           Student student = new Student();
           student.setName("张三");

           // 产生一个小红的对象
           Student xiaoHong = new Student();
           xiaoHong.setName("小红");
       }
   }
   ```

## 2、构造器

1. 构造器

   ```java
   // Person类
   public class Person {
       String name;

       // 无参构造器
       public Person() {
           System.out.println("Person constructor");
       }

   	// 有参构造器
       public Person(String name) {
           this.name = name;
           System.out.println("name：" + name);
       }
   }

   // Application类
   public class Application {
       public static void main(String[] args) {
           // 默认调用无参构造
   		Person person = new Person();

           // 调用有参构造
           Person person = new Person("李四");
       }
   }
   ```

- 构造器是一个和类名相同的方法，并且没有返回值

- 每个类都有一个无参构造器，这个构造器会在实例化的时候自动调用（new 的本质就是在调用构造器）

- 如果类里面同时存在无参和有参构造器，那么在实例化的时候会自动根据参数进行选择构造器

- 类里面有有参构造器，就必须显示的定义一个空的无参构造器

- 有参构造器就是用来初始化对象的值

  > idea 快捷键 => alt + insert 快速创建构造器

## 3、java 的三大特性

### 1、封装
