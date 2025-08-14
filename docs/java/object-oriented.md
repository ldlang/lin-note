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

### 1、封装（数据的隐藏）

* 通常，应禁止直接访问一个对象中数据的实际表示，而应通过操作接口来访问，这称为信息隐藏。

  > 通过private关键字定义的属性只能在类里面进行访问，如果外部要使用就要使用get/set方法

  ```java
  public class PriStudent {
      private String name;
      private int age;
  
      public String getName() {
          return this.name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  }
  ```

### 2、继承

1. 什么是继承

    * 能够继承父类的所有属性和方法，除了私有的属性及方法；

    * 使用`extends`关键字；

    * `java`只有单继承，也就是一个子类只能继承一个父类，但是一个父类能被多个子类继承；

    * 所有的类都直接或间接的继承了`Object`；

    * 一般属性都是私有的；

    * 属性关键字

      > public 公共的，能够被继承，new完后也能直接使用
      >
      > protected 受保护的，能够被继承，new完后也能直接使用
      >
      > default 默认的，不写就是default，能够被继承，new完后也能直接使用
      >
      > private 私有的，不能被继承，只能在当前类里面使用

      例：

      ```java
      // 父类
      public class Pet {
          String cat = "猫";
          private String dog = "狗";
          protected String pig = "猪";
          public String horse = "马";

          public String getHorse() {
              return this.horse;
          }

          public void setHorse(String horse) {
              this.horse = horse;
          }
      }

      // 子类 继承了 Pet这个父类
      public class Animal extends Pet {
      }

      // Animal中除了父类的dog其他的都被其继承了
      public class Application {
          public static void main(String[] args) {
              Animal animal = new Animal();
              System.out.println(animal.cat);
              System.out.println(animal.horse);
              System.out.println(animal.pig);
              System.out.println(animal.getHorse());
          }
      }
      ```
    
2. super

    * super只能在子类中出现，super中包含父类中所有的属性和方法，除了私有的；

    * super调用父类的构造方法，必须在构造方法的第一行；

    * super和this不能同时调用构造方法；

    * super当方法使用的时候，如果传参，那就是调用父类的有参构造器；

      > super如果当方法使用那就是调用父类的构造器，如果当对象使用那就能调用父类中的除了私有的所有的方法和属性，this也是一样，只是this代表的是当前这个类。

    例：

    ```java
    public class Animal extends Pet {
        // 在构造器中使用
        public Animal(){
            super(); // 直接调用父类的构造器
            System.out.println(super.getHorse()); // 调用父类的方法
            System.out.println(super.horse); // 调用父类的属性
        }
    
        public void sayPig() {
            super.pig = "Res"; // 修改父类中的属性
            System.out.println(super.pig);
        }
    }
    ```

3. 方法重写

    * 需要有继承关系才能有方法的重写，子类重写父类的方法；

    * 方法名必须相同；

    * 方法的参数列表页必须相同；

    * 修饰符范围可以扩大但不能缩小； 

      > public > protected > default > private

    * 抛出的异常：范围可以被缩小，但不能扩大

    * 方法体可以不同

    ```java
    // A类
    public class A {
        public static void say(){
            System.out.println("A");
        }
    
        public void say1(){
            System.out.println("A");
        }
    }
    
    // B类
    public class B extends A {
        public static void say() {
            System.out.println("B");
        }
    
        @Override // 重写注解
        public void say1(){
            System.out.println("B");
        }
    }
    
    // 使用
    public class Application {
        public static void main(String[] args) {
            B b = new B();
            b.say(); // B
            b.say1(); // B
    
            A a = new B();
            // 虽然是 new 的 B 但是 say 在 A中是一个静态方法，new出来的类型如果是A那么调到的就是A类中的方法
            a.say(); // A
            a.say1(); // B
        }
    }
    ```

### 3、多态





