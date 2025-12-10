---
sidebar: auto
---

# jdk8 新特性

## 1、Lambda 表达式

函数式接口能通过 Lambda 进行简化，**lambda 表达式是一个对象而不是函数，lambda 表达式就是一个函数式接口的实例**

> 函数式接口：在一个接口中只有一个方法的定义（**有且仅有一个抽象方法的接口**）

### 无参数函数

没有参数且函数体只有一行，即可省略大括号

```java
// 完整写法
Runnable runnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("run");
    }
};
runnable.run(); // run

// 函数体只要一行 通过Lambda简化
Runnable lambdaRun = () -> System.out.println("lambdaRun");
lambdaRun.run(); // lambdaRun

// 函数体有多行
Runnable lambdaRun = () -> {
    System.out.println("lambdaRun1");
    System.out.println("lambdaRun2");
};

lambdaRun.run();
```

### 函数有一个参数

```java
// 完整版
Consumer<String> consumer = new Consumer<>() {
    @Override
    public void accept(String s) {
        System.out.println("实现了一个方法传递了值：" + s);
    }
};
consumer.accept("consumer");

// lambda简化，只有一个参数是，参数类型和括号都可以省略
Consumer<String> lambdaConsumer = s -> System.out.println("实现了一个方法传递了值：" + s);
```

### 函数有多个参数

```java
// interface
public interface MathOperation {
    int add(int a, int b);
}

// 完整版接口的实现
MathOperation addition = new MathOperation() {
    @Override
    public int add(int a, int b) {
        return a + b;
    }
};
addition.add(1, 2); // 3

// lambda，可以省略参数类型，rentun也可以省略
MathOperation addition = (a, b) -> a + b;
addition.add(1, 2); // 3
```

### 总结

```java
MathOperation addition = (a, b) -> a + b;
```

- ->左边：
  - 形参的参数类型是可以省略的
  - 只有一个参数小括号也可以省略
  - 没有参数或者多个参数就不能省略小括号
- ->右边：
  - 函数体要有大括号包裹，
  - 函数体只有一行，有没有 return，则大括号都可以可以省略

## 3、接口增强

jdk8 以前的接口，只能放以下两种

```java
public interface 接口名 {
    静态常量
    抽象方法
}
```

jdk8 对接口进行的增强

```java
public interface 接口名 {
    静态常量
    抽象方法
    默认方法
    静态方法
}
```

### 默认方法

默认方法可以有方法体

1. 直接调用默认方法

   ```java
   public class HeightenInterface {
       public static void main(String[] args) {
           B b = new B();
           // 能够直接调用默认方法
           b.test(); // 我是A的默认方法
       }
   }

   interface A {
       // 默认方法可以有方法体
       public default void test() {
           System.out.println("我是A的默认方法");
       }
   }

   class B implements A {}
   ```

2. 重写默认方法再调用

   ```java
   public class HeightenInterface {
       public static void main(String[] args) {
           C c = new C();
           c.test(); // 我重写了默认方法
       }
   }

   interface A {
       public default void test() {
           System.out.println("我是A的默认方法");
       }
   }

   class C implements A {
       @Override
       public void test() {
           System.out.println("我重写了默认方法");
       }
   }
   ```

### 静态方法

静态方法不能被继承，也不能被重写，只能通过接口直接调用

```java
interface AA {
    public static void test() {
        System.out.println("静态方法");
    }
}

public class HeightenInterface {
    public static void main(String[] args) {
        AA.test(); // 静态方法
    }
}
```

## 3、函数式接口

有且只有一个抽象方法的接口就叫函数式接口

```java
// @FunctionalInterface 声明这是一个函数式接口，这个注解可加可不加，只要满足定义即可，但是最好加上
@FunctionalInterface
public interface MathOperation {
    int add(int a, int b);
}
```

## 4、内置的 4 大函数式接口

### Supplier\<T\> 供给型接口

**无参数，返回单个结果**，专注 “提供 / 生成数据”（如创建对象、读取配置、生成随机数）。

| 方法签名  | 作用                              |
| --------- | --------------------------------- |
| `T get()` | 抽象方法：无参数，返回 T 类型结果 |

示例

```java
public class FunInterface {
    public static void main(String[] args) {
        // 1. 提供常量字符串
        Supplier<String> constantSupplier = () -> "默认值";
        System.out.println(constantSupplier.get()); // 输出：默认值

        // 2. 生成随机数
        Supplier<Integer> randomSupplier = () -> new Random().nextInt(100);
        System.out.println("随机数：" + randomSupplier.get()); // 输出：随机数（0-99）

        // 3. 获取最大值
        // 这里执行getMax后只是传递了这个方法体，真正调用方法体式下面的get方法
        getMax(() -> {
            Integer[] arr = {1, 2, 9, 5};
            Arrays.sort(arr);
            return arr[arr.length - 1];
        });
    }

    public static void getMax(Supplier<Integer> supplier) {
        // 这里才是调用方法体
        Integer i = supplier.get();
        System.out.println("i = " + i);
    }
}
```

### Consumer\<T\> 消费型接口

接收单个参数，**无返回值**，专注 “消费” 数据（执行逻辑但不产生结果）。

| 方法签名                                                 | 作用                                                        |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| `void accept(T t)`                                       | 抽象方法：接收 T 类型参数，执行消费逻辑（核心）             |
| `default Consumer<T> andThen(Consumer<? super T> after)` | 默认方法：组合消费逻辑（先执行当前 Consumer，再执行 after） |

```java
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerDemo {
    public static void main(String[] args) {
        // 1. 基础消费：打印字符串
        Consumer<String> printConsumer = s -> System.out.println("消费：" + s);
        printConsumer.accept("Hello Consumer"); // 输出：消费：Hello Consumer

        // 2. 组合消费：先打印，再转大写打印
        Consumer<String> upperConsumer = s -> System.out.println("大写：" + s.toUpperCase()); // 大写：JAVA
        printConsumer.andThen(upperConsumer).accept("java"); // 消费：java

        // 3. 集合遍历（核心场景）
        List<Integer> list = Arrays.asList(1, 2, 3);
        // 非简化写法
        list.forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer integer) {
                System.out.println(integer); // 1 2 3
            }
        });

        // lambda 简化写法
        list.forEach(num -> System.out.println("数字：" + num));
    }
}
```

### Function<T, R> 函数型接口

接收**一个 T 类型参数**，返回**一个 R 类型结果**，专注 “数据转换 / 映射”（如类型转换、数值计算、字段提取）。

| 方法签名                                                                      | 作用                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| `R apply(T t)`                                                                | 抽象方法：接收 T 类型参数，返回 R 类型结果（核心）      |
| `default <V> Function<T, V> andThen(Function<? super R, ? extends V> after)`  | 默认方法：先执行当前 Function，再将结果传给 after 处理  |
| `default <V> Function<V, R> compose(Function<? super V, ? extends T> before)` | 默认方法：先执行 before，再将结果传给当前 Function 处理 |
| `static <T> Function<T, T> identity()`                                        | 静态方法：返回 “输入即输出” 的恒等函数（apply (t) = t） |

```java
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class FunctionDemo {
    public static void main(String[] args) {
        // 1. 字符串转整数
        Function<String, Integer> strToInt = s -> Integer.parseInt(s);
        Integer num = strToInt.apply("123");
        System.out.println("转换结果：" + num); // 输出：123

        // 2. 组合函数：先转整数，再计算平方
        Function<Integer, Integer> square = n -> n * n;
        Integer result = strToInt.andThen(square).apply("10");
        System.out.println("平方结果：" + result); // 输出：100

        // 3. 提取对象字段（User → name）
        Function<User, String> getUserame = user -> user.getName();
        User user = new User("李四", 30);
        System.out.println("用户名：" + getUserame.apply(user)); // 输出：李四

        // 4. Stream map 转换（核心场景）
        List<String> strList = Arrays.asList("1", "2", "3");
        List<Integer> intList = strList.stream()
                .map(strToInt) // 应用 Function 转换
                .toList();
        System.out.println(intList); // 输出：[1, 2, 3]

        // 5. 恒等函数
        Function<String, String> identity = Function.identity();
        System.out.println(identity.apply("测试")); // 输出：测试
    }

    static class User {
        private String name;
        private int age;
        public User(String name, int age) {
            this.name = name;
            this.age = age;
        }
        public String getName() { return name; }
    }
}
```

### Predicate\<T\> 断言型接口

接收**一个 T 类型参数**，返回**布尔值**，专注 “条件判断 / 过滤”（如数据校验、集合过滤）。

| 方法签名                                               | 作用                                                |
| ------------------------------------------------------ | --------------------------------------------------- |
| `boolean test(T t)`                                    | 抽象方法：接收 T 类型参数，返回布尔值（核心）       |
| `default Predicate<T> and(Predicate<? super T> other)` | 默认方法：逻辑与（当前条件 && other 条件）          |
| `default Predicate<T> or(Predicate<? super T> other)`  | 默认方法：逻辑或（当前条件 \|\| other 条件）        |
| `default Predicate<T> negate()`                        | 默认方法：逻辑非（! 当前条件）                      |
| `static <T> Predicate<T> isEqual(Object targetRef)`    | 静态方法：判断参数是否等于 targetRef（基于 equals） |

```java
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateDemo {
    public static void main(String[] args) {
        // 1. 判断字符串非空
        Predicate<String> isNotEmpty = s -> s != null && !s.isEmpty();
        System.out.println(isNotEmpty.test("")); // 输出：false
        System.out.println(isNotEmpty.test("测试")); // 输出：true

        // 2. 组合条件：非空 且 长度>3
        Predicate<String> lengthGt3 = s -> s.length() > 3;
        Predicate<String> condition = isNotEmpty.and(lengthGt3);
        System.out.println(condition.test("Java")); // 输出：true
        System.out.println(condition.test("Hi")); // 输出：false

        // 3. 逻辑非：取反条件
        Predicate<String> isEmpty = isNotEmpty.negate();
        System.out.println(isEmpty.test("")); // 输出：true

        // 4. Stream filter 过滤（核心场景）
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
        Predicate<Integer> isEven = n -> n % 2 == 0;
        List<Integer> evenNums = nums.stream()
                .filter(isEven) // 应用 Predicate 过滤
                .toList();
        System.out.println(evenNums); // 输出：[2, 4, 6]

        // 5. 判断对象相等
        Predicate<String> isEqualTest = Predicate.isEqual("测试");
        System.out.println(isEqualTest.test("测试")); // 输出：true
    }
}
```

## 5、方法引用
