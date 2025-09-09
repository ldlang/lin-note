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

- 通常，应禁止直接访问一个对象中数据的实际表示，而应通过操作接口来访问，这称为信息隐藏。

  > 通过 private 关键字定义的属性只能在类里面进行访问，如果外部要使用就要使用 get/set 方法

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

   - 能够继承父类的所有属性和方法，除了私有的属性及方法；

   - 使用`extends`关键字；

   - `java`只有单继承，也就是一个子类只能继承一个父类，但是一个父类能被多个子类继承；

   - 所有的类都直接或间接的继承了`Object`；

   - 一般属性都是私有的；

   - 属性关键字

     > public 公共的，能够被继承，new 完后也能直接使用
     >
     > protected 受保护的，能够被继承，new 完后也能直接使用
     >
     > default 默认的，不写就是 default，能够被继承，new 完后也能直接使用
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

   - super 只能在子类中出现，super 中包含父类中所有的属性和方法，除了私有的；

   - super 调用父类的构造方法，必须在构造方法的第一行；

   - super 和 this 不能同时调用构造方法；

   - super 当方法使用的时候，如果传参，那就是调用父类的有参构造器；

     > super 如果当方法使用那就是调用父类的构造器，如果当对象使用那就能调用父类中的除了私有的所有的方法和属性，this 也是一样，只是 this 代表的是当前这个类。

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

   - 需要有继承关系才能有方法的重写，子类重写父类的方法；

   - 方法名必须相同；

   - 方法的参数列表页必须相同；

   - 修饰符范围可以扩大但不能缩小；

     > public > protected > default > private

   - 抛出的异常：范围可以被缩小，但不能扩大

   - 方法体可以不同

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

什么是多态：一个对象的实际类型是确定的，但可以指向对象的引用的类型有很多。

1. 多态存在的条件

   - 有继承关系；
   - 子类重写了父类的方法
   - 父类引用指向子类对象

2. 注意事项

   - 多态是方法的多态，属性没有多态
   - 父类和子类直接有联系才能转换，不然就会类型转换异常

3. 总结

   - 一个 new 出来的对象里面有那些方法主要看看左边的类型，和右边的关系不大。

   - 如果子类重写了父类的方法，无论类型指向哪里，都只能调到子类的方法。

   - 父类型，可以指向子类但是不能调用子类独有的方法

   - 子类型，可以调到父类和自己的方法

     > 不能被重写的方法
     >
     > 1. static 他属于类不属于实例
     > 2. final 常量方法
     > 3. private 私有方法

   例：

   ```java
   public class A {
       public void say1(){
           System.out.println("A");
       }
   }

   public class B extends A {}

   B b = new B();
   A a = new B();

   b.say1(); // A
   a.say1(); // A

   // B 重写了say1方法
   public class B extends A {
       @Override
       public void say1() {
           System.out.println("son");
       }
   }
   // b 能调用的方法都是自己的或者继承来的
   B b = new B();
   // A 父类型，可以指向子类但是不能调用子类独有的方法
   A a = new B();

   // 对象能执行那些方法主要看左边的类型，和右边的关系不大
   b.say1(); // 如果子类重写了父类的方法，那么就只能调到子类的方法
   a.say1();
   ```

## 4、instanceof

看一个对象某个类型

```java
public class A {}

public class B extends A {}
```

- 子类 new 出来的对象是当前对象的类型，也是其父类的类型

  ```java
  B b = new B();
  System.out.println(b instanceof A); // true
  System.out.println(b instanceof B); // true
  System.out.println(b instanceof Object); //true
  ```

- 子类 new 出来的对象，类型指向父类，那么这个对象既是当前对象的类型，也是其父类的类型

  ```java
  A a = new B();
  System.out.println(a instanceof B); // true
  System.out.println(a instanceof A); // true
  ```

- 父类 new 出来的对象，类型只能指向父类，这个对象也只能是父类的类型

  ```java
  A a = new A();
  System.out.println(a instanceof A); // true
  System.out.println(a instanceof B); // false
  ```

## 5、类型转换

```java
public class A {
    public void say(){
        System.out.println("A");
    }
}

public class B extends A {
    public void say1() {
        System.out.println("B");
    }
}
```

1. 高类型转低类型只能强制转换

   ```java
   A a = new B();
   ((B) a).say1(); // 类型转换后才能调用B类的方法
   ```

2. 低类型转高类型可以直接转换

   ```java
   B b = new B();
   A a = b;
   a.say();
   ```

## 6、static

1. 静态属性能够直接通过类调用，非静态属性只能实例化后再调用

   ```java
   public class StaticTest {
       private static String name = "张三";
       private int age = 15;

       public static void main(String[] args) {
           System.out.println(StaticTest.name);

           StaticTest sta = new StaticTest();
           System.out.println(sta.age);
       }
   }
   ```

2. 静态方法也能直接调用，而非静态方法需要实例化后才能调用

   ```java
   public class StaticTest {
       public void run(){
           System.out.println("run");
       }

       public static void go(){
           System.out.println("go");
       }

       public static void main(String[] args) {
           StaticTest.go();

           StaticTest sta = new StaticTest();
           sta.run();
       }
   }
   ```

3. 类中执行的顺序

   ```java
   public class StaticTest {

       // 初始化一些值
       {
           System.out.println("匿名代码块");
       }

       // 只有在第一次实例化的时候才会执行
       static {
           System.out.println("静态代码块");
       }

       public StaticTest(){
           System.out.println("构造器");
       }

       public static void main(String[] args) {
           StaticTest sta = new StaticTest();
           // 静态代码块
           // 匿名代码块
           // 构造器
           StaticTest st = new StaticTest();
           // 匿名代码块
           // 构造器
       }
   }
   ```

## 7、abstract 抽象类

加入 abstract 的类就是抽象类，其实他就是一个子类的约束，约束子类的行为；

```java
public abstract class Aciton {
    // 抽象方法不能有方法体
    public abstract void doSomeThing();
}
```

1. 抽象类不能被实例化
2. 抽象类中可以有抽象方法，也可以有普通方法，但是抽象方法只能在抽象类里面，并且不能有函数体
3. 如果有抽象方法，那么在子类中，抽象方法必须被实现，否则该子类要是一个抽象类

## 8、interface 接口

接口也一种约束，约束类的行为，但是一个类，能够同时被多个接口约束，被约束的类必须实现接口的中的方法；

```java
public interface IPeople {
    // 接口中的所有变量都是 public static final , 几乎不会在接口中声明常量
    int age = 15;

    // 接口中所有定义的方法都是 public abstract
    void drink(String name);
}

public interface IPerson {
    void run(String name);
}

public class UseInterface implements IPeople, IPerson{
    @Override
    public void drink(String name) {}

    @Override
    public void run(String name) {}
}
```

1. 接口就是约束类的，类通过 implements 来使用接口
2. 在接口中定义一些方法，这些方法必须被类实现
3. 接口中所有的方法都是接口中所有定义的方法都是 `public abstract`
4. 接口中所有的变量都是 `public static final`，几乎不会在接口中声明常量
5. 接口不能被实例化，也没有构造方法

## 9、内部类

1. 成员内部类

   - 内部类能调用外部类的所有方法和属性
   - 当内部类和外部类存在重名时，会优先访问内部类属性

   ```java
   public class Outer {
       private int age = 12;
       public void say(){
           System.out.println("外部类 say");
       }

       public class Inner {
           private int age = 1;
           public void in(){
               say();
               // 访问内部类的age
               System.out.println(age);
               // 访问外部类的age
               System.out.println(Outer.this.age);
           }
       }
   }

   // 实例化
   public class Application {
       public static void main(String[] args) {
           Outer outer = new Outer();
           outer.say();

           // 实例化内部类
           Outer.Inner inner = outer.new Inner();
           inner.in();
       }
   }
   ```

2. 静态内部类

   - 静态内部类只能调用静态的属性和方法，因为静态类加载的较早

   ```java
   public class Outer {
       private int age = 12;
       public static void say(){
           System.out.println("外部类 say");
       }

       public static class Inner {
           public static void in(){
               say();
           }

           public void show(){
               // 访问外部类的非静态属性
               Outer outer = new Outer();
               System.out.println(outer.age);
           }
       }
   }

   Outer outer = new Outer();
   Outer.Inner.in();
   ```

3. 局部内部类

   - 方法里面实现类，类前面不能加任何修饰符

   ```java
   public class Outer {
       public void fun() {
           class Fun {

           }
       }
   }
   ```

4. 匿名内部类

   - 一个 java 文件中可以有多个类，但是只有一个类能写 public

   ```java
   public interface Usb {
       public void servive();
   }

   public class Application {
    public static void main(String[] args) {
           // 接口不能实例化，但使用匿名内部类，就相当于创建了一个局部内部类
           Usb usb = new Usb() {
               @Override
               public void servive() {
                   System.out.println("使用了usb");
               }
           };
           usb.servive();
       }
   }
   ```

## 10、enum

`jdk1.5`出现，表示一种特殊的类，用于表示一组固定的常量

1. 基础使用

```java
// 枚举类
public enum DayEnum {
    MONDAY,
    TUESDAY;
}

// 使用枚举类
public class EnumStu {
    public static void printDay(DayEnum day) {
        switch (day) {
            case MONDAY:
                System.out.println("周一");
                break;
            case TUESDAY:
                System.out.println("周二");
                break;
            default:
                System.out.println("未匹配");
        }
    }

    public static void main(String[] args) {
        // 这里只能传递枚举值
        printDay(DayEnum.MONDAY);
    }
}

```

2.枚举带参数

```java
public enum DayEnum {
    MONDAY("星期一"),
    TUESDAY("星期二");

    private final String desc;

    DayEnum(String s) {
        this.desc = s;
    }

    public String getDesc() {
        return desc;
    }
}

// 使用
public class EnumStu {
    public static void printDay(DayEnum day) {
        switch (day) {
            case MONDAY:
                System.out.println(DayEnum.MONDAY.getDesc());
                break;
            case TUESDAY:
                System.out.println(DayEnum.TUESDAY.getDesc());
                break;
            default:
                System.out.println("未匹配");
        }
    }

    public static void main(String[] args) {
        printDay(DayEnum.MONDAY);

        // 直接打印值
        System.out.println(DayEnum.MONDAY.getDesc());

        // 去到值的数组
        DayEnum[] dayEnums = DayEnum.values();
        for (DayEnum day : dayEnums) {
            System.out.println(day + "：" + day.getDesc());
        }
    }
}


```
