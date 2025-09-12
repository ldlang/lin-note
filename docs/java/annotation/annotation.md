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
