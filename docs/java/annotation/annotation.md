---
sidebar: auto
---

# 注解和反射

## 1、注解

- Annotation 是从`JDK5.0`开始引入的新技术

- Annotation 的作用

  - 不是程序本身，可以对程序做出解释
  - 可以被其他程序（比如编译器）读取

- Annotation 的格式

  - 注解是以`@注释名`在代码中存在的，还可以添加一些参数

    > @SuppressWarnings(value="unchecked")

- Annotation 可以在 package、class、methods、field 上面使用，相当于给他们添加了额外的辅助信息，可以通过反射机制编程实现对这些元数据的访问

### 内置注解

- @Override：定义在`java.lang.Override`中，只能修饰方法，表示一个方法打算重写超类中的另一个方法声明

- @Deprecated：定义在`java.lang.Deprecated`中，可以用于方法、属性、类，表示这个不推荐使用，或者有更好的选择

- @SuppressWarnings：定义在`java.lang.SuppressWarnings`中，用了抑制编译时的警告信息，必须传入一个参数才能正确使用

  > - @SuppressWarnings(value="unchecked")
  > - @SuppressWarnings("all")

```java
package com.ldlang.annotation;

// 可以抑制编译时当前类里面的所有警告信息
@SuppressWarnings("all")
public class OverrideStu {
    // 让test方法变成弃用方法，但只是一个警告
    @Deprecated
    public static void test() {
        int a = 1;
    }

    public static void main(String[] args) {
        test();
    }
}

```

### 元注解

元注解的作用就是负责注解其他注解，比如自定义的注解，java 中有 4 个标准注解的`meta-annotation`，他们被用来提供对其他`annotation`类型说明

- @Target

  > @Target 表示我的定义的注解能够用到哪些地方，如用到方法上 `ElementType.METHOD`，用到类上 `ElementType.TYPE`等

- @Retention

  > @Retention 表示我们在什么时候生效，运行时还是源码时等
  > runtime > class > sources

- @Documented

  > 表示是否将我的注解生产在 JAVAdoc 中

- @Inherited

  > 子类是否可以继承父类的注解

```java
import java.lang.annotation.*;

@MyAnnotation
public class customAnn {

}

// 定义一个注解
// @Target 表示我的定义的注解能够用到哪些地方，如用到方法上 `ElementType.METHOD`，用到类上 `ElementType.TYPE`等
@Target(value = {ElementType.METHOD, ElementType.TYPE})

// @Retention 表示我们在什么时候生效，运行时还是源码时等
// runtime > class > sources
@Retention(value = RetentionPolicy.RUNTIME)

// 表示是否将我的注解生产在JAVAdoc中
@Documented

// 子类是否可以继承父类的注解
@Inherited
@interface MyAnnotation {

}
```

### 自定义注解

- @interface 用来声明一个注解
- 其中每一个方法实际上是声明了一个配置参数
- 方法的名称就是参数的名称
- 返回值类型就是参数的类型 （返回值只能是基本类型、class、String、enum）
- 可以通过 default 来声明参数的默认值
- 只有一个参数成员，推荐使用 value
- 注解元素必须要有默认值，我们定义注解元素使，经常使用空字符串或者 0 作为默认值

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

public class customAnn1 {
    @MyAnnotation1(name = "张三")
    public void test1() {
    }

    @MyAnnotation2("张三")
    public void test2() {
    }
}

// 多个参数
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation1 {
    String name();

    // 设置默认值则
    int age() default 1;

    // 如果默认值是-1，代表不存在
    int id() default -1;

    String[] schools() default {"a", "b"};
}

// 单个参数推荐使用value，这样在使用的时候就可以省略key
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation2 {
    String value();
}
```

## 2、反射

- Reflection 是 java 背视为动态语言的关键，反射机制允许程序在执行期借助 Reflection API 取得任何类的内部信息，并能直接操作任意对象的内部属性及方法

- 加载完类之后，在堆内存的方法区中就产生了一个 Class 类型的对象（一个类只有一个 Class 对象），这个对象就包含了类的完整的类的结构信息，可以通过这个对象看到类的结构，这个对象就像一面镜子，透过这个镜子看到类的结构，所以称为反射

  > 正常方式：引入需要的包类名称 ==> 通过 new 实例化 ==> 取得实例化对象
  >
  > 反射方式：实例化对象 ==> getClass 方法 ==> 取得完整的包类名称

- 使用 Class 类来管理反射

  > Class c = Class.forName("java.lang.String")

- 优缺点

  - 优点：可以实现动态创建对象和编译，灵活性强
  - 缺点：对象性能影响，使用反射基本上是一种解释操作，告诉 JVM 我们希望做什么并且它满足我们的要求，这类操作总是慢于直接执行相同的操作

- 一个类在内存中只有一个 class 对象，被加载后整个结构都会被封装在 class 对象中

```java
// 反射
public class ReflectionStu {
    public static void main(String[] args) throws ClassNotFoundException {
        // 通过反射获取类的class对象
        Class c = Class.forName("com.ldlang.annotation.User");
        System.out.println(c);
    }
}

class User {
    private String name;
    public User(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                '}';
    }
}
```

### Class 类

对象照镜子后可以得到的信息:某个类的属性、方法和构造器、某个类到底实现了哪些接口对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。-个 Class 对象包含了特定某个结构(class/interface/enum/annotation/primitive type/void/)的有关信息。

- Class 本身也是一个类
- Class 对象只能由系统建立对象
- 一个加载的类在 JVM 中只会有一个 Class 实例
- 一个 Class 对象对应的是一个加载到 JVM 中的一个.class 文件
- 每个类的实例都会记得自己是由哪个 Class 实例所生成
- 通过 Class 可以完整地得到一个类中的所有被加载的结构
- Class 类是 Reflection 的根源，针对任何你想动态加载、运行的类，唯有先获得相应的 Class 对象

```java
public class ReflectionStu1 {
    public static void main(String[] args) throws ClassNotFoundException {
        Person student = new Student1();
        System.out.println(student.name);

        // 获取Class
        // 1.通过对象获得
        Class c1 = student.getClass();
        System.out.println(c1.hashCode());

        // 2.通过包名获取
        Class c2 = Class.forName("com.ldlang.annotation.Student1");
        System.out.println(c2.hashCode());

        // 3.通过类名.class获得
        Class c3 = Student1.class;
        System.out.println(c3.hashCode());

        // 4.基本内置类型的包装类都有一个type
        Class<Integer> type = Integer.TYPE;
        System.out.println(type);

        // 5.获得父类类型
        Class c5 = c1.getSuperclass();
        System.out.println(c5);
    }
}

class Person {
    public String name;

    public Person(String name) {
        this.name = name;
    }
}

class Student1 extends Person {
    public Student1() {
        super("学生");
    }
}

class Teacher extends Person {
    public Teacher() {
        super("老师");
    }
}
```

### 有 Class 对象的类型

- class：外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类，

- interface：接囗

- []：数组

- enum：枚举

- annotation：注解@interface

- primitive type：基本数据类型

- void

  ```java
  package com.ldlang.annotation;

  import java.lang.annotation.ElementType;

  public class ReflectionStu2 {
      public static void main(String[] args) {
          Class c1 = Object.class; // 类
          Class c2 = Comparable.class; // 接口
          Class c3 = String[].class; // 一维数组
          Class c4 = int[][].class; // 二维数组
          Class c5 = Override.class; // 注解
          Class c6 = ElementType.class; // 枚举
          Class c7 = Integer.class; // 基本数据类型
          Class c8 = void.class; // void
          Class c9 = Class.class; // Class

          System.out.println(c1);
          System.out.println(c2);
          System.out.println(c3);
          System.out.println(c4);
          System.out.println(c5);
          System.out.println(c6);
          System.out.println(c7);
          System.out.println(c8);
          System.out.println(c9);

          int[] a = new int[12];
          int[] b = new int[1];
          // 只要元素类型与维度一样，就是同一个Class
          System.out.println(a.getClass().hashCode() == b.getClass().hashCode());// true
      }
  }

  ```

### 发生类初始化的时候

- 类的主动引用（一定会发生类的初始化）
  - 当虚拟机启动，先初始化 main 方法所在的类
  - new 一个类的对象
  - 调用类的静态成员(除了 final 常量)和静态方法
  - 使用 java.lang.reflect 包的方法对类进行反射调用
  - 当初始化一个类，如果其父类没有被初始化，则先会初始化它的父类
- 类的被动引用（不会发生类的初始化）
  - 当访问一个静态域时，只有真正声明这个域的类才会被初始化。如:当通过子类引用父类的静态变量，不会导致子类初始化
  - 通过数组定义类引用，不会触发此类的初始化
  - 引用常量不会触发此类的初始化（常量在链接阶段就存入调用类的常量池中了

```java
public class ReflectionStu3 {
    static {
        System.out.println("Main加载");
    }

    public static void main(String[] args) throws ClassNotFoundException {
        // 发生类的初始化
        // 1.实例化类
        // Son son = new Son();

        // 2.调用静态成员
        // System.out.println(Son.b);

        // 3.反射调用
        // Class c1 = Class.forName("com.ldlang.annotation.Son");

        // 不会发生初始化
        //  调用常量
        // System.out.println(Son.M);

        // 使用数组定义类引用
        Son[] sons = new Son[10];
    }
}

class Father {
    static int a = 1;

    static {
        System.out.println("父类加载");
    }
}

class Son extends Father {
    static final int M = 1;
    static int b = 1;

    static {
        System.out.println("子类被加载");
    }
}
```

### 获取类的运行时结构

```java
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;

public class ReflectionStu5 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException {
        Class c1 = Class.forName("com.ldlang.annotation.Animal");

        // 获取类的名字
        System.out.println(c1.getName()); // 获取包名 + 类名
        System.out.println(c1.getSimpleName()); // 类名

        // 获取类的属性
        // 只能获得public的所有属性
        Field[] fields = c1.getFields();
        System.out.println(Arrays.toString(fields));
        // 获取所有的属性
        fields = c1.getDeclaredFields();
        System.out.println(Arrays.toString(fields));
        // 获取指定属性
        System.out.println(c1.getDeclaredField("age"));
        // 获取指定的public属性
        System.out.println(c1.getField("name"));

        // 获得类的方法
        // public的以及父类的
        Method[] methods = c1.getMethods();
        System.out.println(Arrays.toString(methods));
        // 当前类的所有方法
        methods = c1.getDeclaredMethods();
        System.out.println(Arrays.toString(methods));

        // 获得指定的方法
        Method getName = c1.getMethod("getName", null);
        System.out.println(getName);
        Method setName = c1.getMethod("setName", String.class);
        System.out.println(setName);

        // 获得构造器
        // 公有构造器
        Constructor[] constructors = c1.getConstructors();
        System.out.println(Arrays.toString(constructors));
        // 所有构造器
        constructors = c1.getDeclaredConstructors();
        System.out.println(Arrays.toString(constructors));

        // 指定构造器
        Constructor constructor = c1.getDeclaredConstructor(String.class, int.class);
        System.out.println(constructor);
    }
}

class Animal {
    public String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void fun() {

    }

    private void a() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

### 通过反射创建对象，并使用对象里面的方法属性

```java
import java.lang.reflect.Field;

public class ReflectionStu6 {
    public static void main(String[] args) throws Exception {
        Class c = Class.forName("com.ldlang.annotation.Admin");

        // 创建一个对象
        // Admin admin = (Admin) c.newInstance(); // 本质是调用无参构造
        // System.out.println(admin);

        // 通过构造器创建对象
        // Constructor<Admin> constructor = c.getDeclaredConstructor(String.class, String.class);
        // Admin admin = constructor.newInstance("密码", "账号");
        // System.out.println(admin);

        // 通过反射调用方法
        Admin admin = (Admin) c.newInstance(); // 本质是调用无参构造
        // Method setUserName = c.getDeclaredMethod("setUserName", String.class);
        // setUserName.invoke(admin, "账号"); // 激活方法，传递需要激活的对象，在方法、字段、构造器中都能使用
        // System.out.println(admin.getUserName()); // 账号

        // 通过反射操作属性
        Field userName = c.getDeclaredField("userName");
        userName.setAccessible(true); // 关闭安全检查，也就是让其能操作私有属性
        userName.set(admin, "账号");  // 传递需要设置的对象
        System.out.println(admin.getUserName());
    }
}

class Admin {
    private String password;
    private String userName;

    public Admin(String password, String userName) {
        this.password = password;
        this.userName = userName;
    }

    public Admin() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "password='" + password + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
```

### 反射操作泛型

- Java 采用泛型擦除的机制来引入泛型,Java 中的泛型仅仅是给编译器 javac 使用的,确保数据的安全性和免去强制类型转换问题，但是，一旦编译完成，所有和泛型有关的类型全部擦除
- 为了通过反射操作这些类型，Java 新增了 ParameterizedType,GenericArrayTypeTypeVariable 和 WildcardType 几种类型来代表不能被归一到 Class 类中的类型但是又和原始类型齐名的类型.
  - ParameterizedType:表示一种参数化类型,比如 Collection<String>
  - GenericArrayType:表示一种元素类型是参数化类型或者类型变量的数组类型
  - TypeVariable:是各种类型变量的公共父接口
  - WildcardType:代表一种通配符类型表达式

```java
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

public class ReflectionStu7 {
    public void params(Map<String, User> map, List<User> list) {

    }

    public Map<String, Admin> returnType() {
        return null;
    }

    public static void main(String[] args) throws NoSuchMethodException {
        Method method = ReflectionStu7.class.getMethod("params", Map.class, List.class);
        // 获取泛型的参数类型
        Type[] getGenericParameterTypes = method.getGenericParameterTypes();
        for (Type getGenericParameterType : getGenericParameterTypes) {
            System.out.println("getGenericParameterType============" + getGenericParameterType);
            // 是否是一个结构化参数类型
            if (getGenericParameterType instanceof ParameterizedType) {
                // 获取真实的参数类型
                Type[] actualTypeArguments = ((ParameterizedType) getGenericParameterType).getActualTypeArguments();
                for (Type actualTypeArgument : actualTypeArguments) {
                    System.out.println("actualTypeArgument---------" + actualTypeArgument);
                }
            }
        }

        // 获取返回值类型
        method = ReflectionStu7.class.getMethod("returnType", null);
        Type genericReturnType = method.getGenericReturnType();
        System.out.println("-------------" + genericReturnType);
        if (genericReturnType instanceof ParameterizedType) {
            Type[] actualTypeArguments = ((ParameterizedType) genericReturnType).getActualTypeArguments();
            for (Type actualTypeArgument : actualTypeArguments) {
                System.out.println("000000000000" + actualTypeArgument);
            }
        }
    }
}
```

### 通过反射获取注解信息

```java
import java.lang.annotation.*;
import java.lang.reflect.Field;
import java.util.Arrays;

public class ReflectionStu8 {
    public static void main(String[] args) throws NoSuchFieldException {
        Class<Inner> c = Inner.class;

        // 通过反射获取类的注解
        Annotation[] annotations = c.getAnnotations();
        // [@com.ldlang.annotation.InnerClassAnn("db_table")]
        System.out.println(Arrays.toString(annotations));

        // 通过反射获取类的注解的值
        InnerClassAnn innerClassAnn = c.getAnnotation(InnerClassAnn.class);
        String value = innerClassAnn.value();
        // db_table
        System.out.println(value);

        // 获取字段上的注解
        Field field = c.getDeclaredField("name");
        // public java.lang.String com.ldlang.annotation.Inner.name
        System.out.println(field);
        InnerFiledAnn annotation = field.getAnnotation(InnerFiledAnn.class);
        System.out.println(annotation.columnName()); // db_id
        System.out.println(annotation.type()); // varchar
        System.out.println(annotation.length()); // 10
    }
}

@InnerClassAnn("db_table")
class Inner {
    @InnerFiledAnn(columnName ="db_id",type = "varchar", length = 10)
    public String name;

    public Inner(String name) {
        this.name = name;
    }
}

// 定义一个类注解
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface InnerClassAnn{
    String value();
}

// 定义字段注解
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@interface InnerFiledAnn{
    String columnName();
    String type();
    int length();
}
```
