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

通过 lambda 实现的逻辑，如果有其他相同的方案实现，那么就可以使用方法引用

语法：`类名::方法名`

### 常见的使用方式

- `instanceName::methodName`：对象::方法名
- `ClassName::staticMethodName`：类名::静态方法
- `ClassName::methodName`：类名::普通方法
- `ClassName::new`：类名::new 调用的构造器
- `TypeName::new`：String[]::new 调用数组的构造器

> 注意事项：
>
> 1. 被引用的方法，参数要和接口中抽象方法的参数一样
> 2. 当抽象方法有返回值时，被引用的方法也必须有返回值

```java
import java.util.function.Consumer;

public class Quote {
    public static void main(String[] args) {
        getSum((int[] arr)->{
            int i = 0;
            for (int k : arr) {
                i += k;
            }
            System.out.println(i);  // 575
        });

       	// 通过方法引用，等价替换
        // 让这个指定的方法去重写的抽象方法，到时候用接口的抽象方法就是调用传递过去的这个方法
        getSum(Quote::sum); // 575
    }

    public static void sum(int[] arr){
        int i = 0;
        for (int k : arr) {
            i += k;
        }
        System.out.println(i);
    }

    public static void getSum(Consumer<int[]> consumer){
        int[] arr = {1,76,32,421,45};
        consumer.accept(arr);
    }
}
```

### 对象名引用成员方法

对象实例化后使用的方式

```java
import java.util.function.*;

// 对象名引用成员方法
public class Quote {
    public static void main(String[] args) {

        Date date = new Date();

        // 1. 调用Supplier 无参获取时间
        // lambda方式，获取事件
        Supplier<Long> time = ()->date.getTime();

        // 方法引用，获取时间
        Supplier<Long> time = date::getTime;

        System.out.println(time.get());

        // 2. 调用Consumer 有参设置时间
        // lambda设置时间
        // Consumer<Long> consumer = s->{
            // setTime需要一个long类型的参数，且无返回值
            // date.setTime(s);
        // };
        // 方法引用设置时间
        Consumer<Long> consumer = date::setTime;
        consumer.accept(1765676266631L);
        System.out.println("time" + date.getTime()); // 1765676266631L
    }
}
```

### 类名调用静态方法

```java
import java.util.function.*;

// 类名调用静态方法
public class Quote {
    public static void main(String[] args) {
        // 1.lombda方式
        Supplier<Long> time1 = ()->{
            // currentTimeMillis 是个静态方法
            return System.currentTimeMillis();
        };

        // 2.方法引用
        Supplier<Long> time1 = System::currentTimeMillis;

        System.out.println("time1" + time1.get());
    }
}
```

### 类名调用实例方法

类名调用实例方法，实际上是将第一个参数作为方法的调用者，再将其他参数传递给后面调用的方法

```java
import java.util.function.*;

// 类名调用实例方法
public class Quote {
    public static void main(String[] args) {
        // 1.lombda方式
        Function<String, Integer> fun = (s)-> s.length();

        // 2.方法引用
        Function<String, Integer> fun = String::length;

        Integer le = fun.apply("hello");
        System.out.println("le = " + le);

        // 示例2
        Integer[] arr = {22, 11, 66};

        // Comparator<String>：抽象方法 int compare(String a, String b)
        // Integer 的 compareTo 方法：int compareTo(Integer anotherInteger)（实例方法）
        // 此时 a 作为实例，b 作为 compareTo 的参数，签名匹配
        // Arrays.sort(arr, (a, b) -> a.compareTo(b)); // Lambda
		Arrays.sort(arr, String::compareTo); // 类名::实例方法名（简化）

        System.out.println(Arrays.toString(arr)); // 输出：[11, 22, 66]
    }
}
```

### 引用类的构造器

```java
import java.util.function.*;

// // 引用 类的构造器
public class Quote {
    public static void main(String[] args) {
        // 1.调用无参构造
        // lambda
        Supplier<Person> supplier = ()-> new Person();
        // 方法引用
        Supplier<Person> supplier = Person::new;
        System.out.println(supplier.get().toString()); // Person{name='null', age=0}

        // 2.调用有参构造
        // lambda
        BiFunction<String, Integer, Person> personBiFunction = (s,i)-> new Person(s, i);
        // 方法引用
        BiFunction<String, Integer, Person> personBiFunction = Person::new;
        System.out.println(personBiFunction.apply("张三", 1).toString()); // Person{name='张三', age=1}
    }
}
```

### 引用数组构造器

```java
import java.util.function.*;

// // 引用 类的构造器
public class Quote {
    public static void main(String[] args) {
        // 1.调用无参构造
        // lambda
        Function<Integer, int[]> intFun = (i)->new int[i];
        // 方法引用
        Function<Integer, int[]> intFun = int[]::new;
        int[] apply = intFun.apply(10);
        System.out.println(Arrays.toString(apply)); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
}
```

## 6、Steam 流

在 Java 中，**Stream（流）** 是 Java 8 引入的核心新特性之一，它是一种 **处理集合（或数组）数据的抽象概念**—— 本质上是一系列支持 **聚合操作** 的元素序列，专注于 “对数据做什么”，而非 “如何做”，能极大简化集合的遍历、过滤、转换、聚合等操作。

### 使用步骤

使用 `Stream` 通常分为 3 步，缺一不可：

1. **创建 `Stream`**：从数据源（集合、数组等）获取 `Stream`。
2. **中间操作**：对数据进行过滤、转换、排序等（可多个操作链式连接，惰性执行）。
3. **终端操作**：触发 `Stream` 执行（之前的中间操作才会真正运行），返回最终结果（如集合、数值、布尔值等）。

> 注意事项：
>
> 1. 每个 Stream 流只能被使用一次，不能被多次使用
>
>    ```java
>    long count = stream.count();
>    long count2 = stream.count(); // 这里将报错
>    ```
>
> 2. 每次 Stream 调用方法返回的都是新的流

### 常用方法

- 中间操作方法，返回值是`stream流`，可以链式调用其他方法，直至调用了终端方法。

  | 方法名          | 返回值类型   | 功能描述                                                  |
  | --------------- | ------------ | --------------------------------------------------------- |
  | filter          | Stream\<T\>  | 过滤元素，仅保留满足条件的元素                            |
  | map             | Stream\<R\>  | 映射转换，将元素转换为另一种类型或值                      |
  | mapToInt        | IntStream    | 映射为 IntStream（基本类型流），避免装箱开销              |
  | mapToLong       | LongStream   | 映射为 LongStream（基本类型流）                           |
  | mapToDouble     | DoubleStream | 映射为 DoubleStream（基本类型流）                         |
  | flatMap         | Stream\<R\>  | 扁平映射，将元素转换为子流并合并为一个流（解决 “流中流”） |
  | flatMapToInt    | IntStream    | 扁平映射为 IntStream                                      |
  | flatMapToLong   | LongStream   | 扁平映射为 LongStream                                     |
  | flatMapToDouble | DoubleStream | 扁平映射为 DoubleStream                                   |
  | sorted          | Stream\<T\>  | 自然排序（基于元素的 Comparable 接口）                    |
  | sorted          | Stream\<T\>  | 自定义排序（通过 Comparator 指定规则）                    |
  | distinct        | Stream\<T\>  | 去重操作（基于元素的 equals () 和 hashCode ()）           |
  | limit           | Stream\<T\>  | 限制流长度，仅保留前 N 个元素                             |
  | skip            | Stream\<T\>  | 跳过前 N 个元素，返回剩余元素构成的流                     |
  | peek            | Stream\<T\>  | 中间处理 / 调试，对元素执行消费逻辑（不改变元素）         |
  | unordered       | Stream\<T\>  | 标记流为无序，提升并行流性能（串行流无影响）              |

- 终端操作（结束操作）,stream 调用这些方后不能再调用其他的方法

  | 方法名         | 返回值类型       | 功能描述                                         |
  | -------------- | ---------------- | ------------------------------------------------ |
  | collect        | R（目标类型）    | 将流转换为集合（List/Set/Map）或其他数据结构     |
  | collect        | R（目标类型）    | 三参数自定义收集（容器创建、元素累加、并行合并） |
  | toArray        | Object[]         | 将流转换为 Object 数组                           |
  | toArray        | A []（指定类型） | 将流转换为指定类型的数组                         |
  | forEach        | void             | 遍历元素，执行消费逻辑（并行流不保证顺序）       |
  | forEachOrdered | void             | 有序遍历（即使并行流也保证元素顺序）             |
  | count          | long             | 统计流中元素总数量                               |
  | max            | Optional\<T\>    | 基于比较器返回流中最大元素                       |
  | min            | Optional\<T\>    | 基于比较器返回流中最小元素                       |
  | findFirst      | Optional\<T\>    | 返回流中第一个元素（短路操作，保证顺序）         |
  | findAny        | Optional\<T\>    | 返回流中任意一个元素（短路操作，并行流性能更优） |
  | anyMatch       | boolean          | 判断是否至少有一个元素满足条件（短路求值）       |
  | allMatch       | boolean          | 判断是否所有元素都满足条件（短路求值）           |
  | noneMatch      | boolean          | 判断是否所有元素都不满足条件（短路求值）         |
  | reduce         | T                | 带初始值的聚合合并（如求和、乘积）               |
  | reduce         | Optional\<T\>    | 无初始值的聚合合并                               |
  | reduce         | U                | 带类型转换的聚合合并（支持并行流）               |
  | iterator       | Iterator\<T\>    | 将流转换为迭代器（Iterator）                     |
  | spliterator    | Spliterator\<T\> | 返回流的可分割迭代器（支持并行遍历）             |

### 获取方式

1. `Collection`有个默认方法`stream`，也就是说所有`Collection`的子类都能通过`.stream()`直接获取`stream流`（常用）

   ```java
   import java.util.*;
   import java.util.stream.Stream;

   // 通过Collection获取
   public class StreamStu {
       public static void main(String[] args) {
           // list
           Stream<Object> stream = new ArrayList<>().stream();
           // set
           Stream<Object> stream1 = new HashSet<>().stream();;

           // 将map转为Collection也能直接读取流
           HashMap<Object, Object> hashMap = new HashMap<>();
           Stream<Object> stream2 = hashMap.values().stream();
           Stream<Object> stream3 = hashMap.keySet().stream();
           Stream<Map.Entry<Object, Object>> streamed = hashMap.entrySet().stream();
       }
   }
   ```

2. 通过静态方法`Stream.of()`创建

   ```java
   import java.util.*;
   import java.util.stream.Stream;

   public class StreamStu {
       public static void main(String[] args) {

           // 通过静态方法Stream.of() 获取
           Stream<String> stringStream = Stream.of("1", "2", "3");

   		Integer[] arr = {1,3};
           Stream<Integer> arr1 = Stream.of(arr);
       }
   }
   ```

3. 通过`Arrays.stream()`创建

   ```java
   import java.util.*;
   import java.util.stream.Stream;

   //获取流的方式
   public class StreamStu {
       public static void main(String[] args) {

           Integer[] arr = {1, 2, 3};
           Stream<Integer> stream1 = Arrays.stream(arr);
           Stream<Integer> stream2 = Stream.of(1, 2, 3);
       }
   }
   ```

4. 空创建

   - 单个值：`Stream.of(T t)`
   - 空流：`Stream.empty()`（避免 null 指针）

5. 无限流（动态生成元素）

   ```java
   // 生成 5 个随机数（无限流，必须用 limit 终止）
   Stream<Double> randomStream = Stream.generate(Math::random).limit(5);
   // 生成 1,2,3,4,5（迭代流：种子 1，每次 +1）
   Stream<Integer> iterateStream = Stream.iterate(1, n -> n + 1).limit(5);
   ```

### collect 主要终端方法

1. 将`stream`流的收集到集合中

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.stream.Collectors;

   public class StreamCase {
       public static void main(String[] args) {
           List<String> list1 = List.of("王梓轩", "欧阳雨欣", "李诗琪", "司马宇宸", "张诺丹", "王还哈", "赵勇杰");

           // 获取所有名字为3个字的, 并转成 list
           list1.stream().filter(name -> name.length() == 3).collect(Collectors.toList());

           // 获取所有名字为3个字的, 并转成 set
           list1.stream().filter(name -> name.length() == 3).collect(Collectors.toSet());

           // 获取所有名字为3个字的, 并转成 ArrayList 或者 hashList
           ArrayList<String> collect = list1.stream().filter(name -> name.length() == 3).collect(Collectors.toCollection(ArrayList::new));
           for (String s : collect) {
               System.out.println(s);
           }
       }
   }
   ```

2. 转为数组

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.stream.Collectors;

   public class StreamCase {
       public static void main(String[] args) {
           List<String> list1 = List.of("王梓轩", "欧阳雨欣", "李诗琪", "司马宇宸", "张诺丹", "王还哈", "赵勇杰");
           String[] array = list1.stream().toArray((s) -> new String[s]);
           // 方法引用简化
           String[] array = list1.stream().toArray(String[]::new);

           for (String s : array) {
               System.out.println(s);
           }
       }
   }
   ```

3. 聚合计算（求和、平均值、最大 / 最小值）

   ```java
   import java.util.Arrays;
   import java.util.DoubleSummaryStatistics;
   import java.util.List;
   import java.util.stream.Collectors;

   public class CollectAggregation {
       public static void main(String[] args) {
           List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

           // 1. 求和
           int sum = numbers.stream().collect(Collectors.summingInt(Integer::intValue));
           System.out.println("总和：" + sum); // 15

           // 2. 求平均值
           double avg = numbers.stream().collect(Collectors.averagingInt(Integer::intValue));
           System.out.println("平均值：" + avg); // 3.0

           // 3. 求最大值（返回 Optional，避免空指针）
           numbers.stream().collect(Collectors.maxBy(Integer::compare))
                  .ifPresent(max -> System.out.println("最大值：" + max)); // 5

           // 4. 一次性获取多个统计结果（总和、平均值、最大/最小值、数量）
           DoubleSummaryStatistics stats = numbers.stream()
                   .collect(Collectors.summarizingDouble(Integer::doubleValue));
           System.out.println("统计结果：" + stats);
           // 输出：DoubleSummaryStatistics{count=5, sum=15.000000, min=1.000000, average=3.000000, max=5.000000}
       }
   }
   ```

4. 分组（groupingBy）

   把元素按指定规则分组，返回 `Map<分组键, 分组元素集合>`，

   ```java
   import java.util.Arrays;
   import java.util.List;
   import java.util.Map;
   import java.util.stream.Collectors;

   public class CollectGrouping {
       public static void main(String[] args) {
           // 定义实体类
           record Student(String name, String className, int score) {}

           // 模拟数据
           List<Student> students = Arrays.asList(
                   new Student("张三", "一班", 90),
                   new Student("李四", "二班", 85),
                   new Student("王五", "一班", 95),
                   new Student("赵六", "二班", 80)
           );

           // 1. 按班级分组（默认值为 List）
           Map<String, List<Student>> groupByClass = students.stream()
                   .collect(Collectors.groupingBy(Student::className));
           System.out.println("按班级分组：" + groupByClass);
           // 输出：{一班=[Student[name=张三, className=一班, score=90], Student[name=王五, className=一班, score=95]], 二班=[...]}

           // 2. 按班级分组，且每组只保留学生姓名（映射值）
           Map<String, List<String>> groupByClassWithName = students.stream()
                   .collect(Collectors.groupingBy(
                           Student::className, // 分组键：班级
                           Collectors.mapping(Student::name, Collectors.toList()) // 映射值：姓名列表
                   ));
           System.out.println("按班级分组（仅姓名）：" + groupByClassWithName);
           // 输出：{一班=[张三, 王五], 二班=[李四, 赵六]}

           // 3. 按班级分组，并计算每组的平均分
           Map<String, Double> avgScoreByClass = students.stream()
                   .collect(Collectors.groupingBy(
                           Student::className,
                           Collectors.averagingInt(Student::score)
                   ));
           System.out.println("各班平均分：" + avgScoreByClass); // {一班=92.5, 二班=82.5}
       }
   }
   ```

5. 拼接字符串（joining）

   ```java
   import java.util.Arrays;
   import java.util.List;
   import java.util.stream.Collectors;

   public class CollectJoining {
       public static void main(String[] args) {
           List<String> words = Arrays.asList("Java", "Stream", "Collect");

           // 1. 直接拼接
           String join1 = words.stream().collect(Collectors.joining());
           System.out.println(join1); // JavaStreamCollect

           // 2. 用分隔符拼接
           String join2 = words.stream().collect(Collectors.joining(","));
           System.out.println(join2); // Java,Stream,Collect

           // 3. 带前缀、分隔符、后缀
           String join3 = words.stream().collect(Collectors.joining(",", "[", "]"));
           System.out.println(join3); // [Java,Stream,Collect]
       }
   }
   ```

## 7、并行流

### 并行流的获取

1. 将串行流转为并行流

   直接调用`parallel()`方法即可

   ```java
   Stream.of(1,2,3,4,5).parallel().filter((s)->{
       System.out.println(Thread.currentThread() + "" +  s);
       return s >1;
   }).count();

   // Thread[#1,main,5,main]3
   // Thread[#33,ForkJoinPool.commonPool-worker-4,5,main]4
   // Thread[#31,ForkJoinPool.commonPool-worker-2,5,main]1
   // Thread[#32,ForkJoinPool.commonPool-worker-3,5,main]5
   // Thread[#30,ForkJoinPool.commonPool-worker-1,5,main]2
   ```

2. 直接获取并行流

   通过`parallelStream()`方法

   ```java
   Stream<Object> objectStream = new ArrayList<>().parallelStream();
   ```

### 线程安全问题

如果直接使用并行流处理线程不安全的数据，就会导致数据丢失

```java
Stream<Object> objectStream = new ArrayList<>().parallelStream();
// ArrayList是线程不安全的list，这里又使用并行流进行操作，就会导致数据丢失
ArrayList<Object> list = new ArrayList<>();
IntStream.rangeClosed(1, 1000).parallel().forEach(list::add);
// list不一定会存到1000条数据
System.out.println(list.size());
```

解决方式

1. 使用锁

   ```java
   import java.util.ArrayList;
   import java.util.stream.IntStream;
   import java.util.stream.Stream;

   public class ParallelStream {
       public static void main(String[] args) {
           Stream<Object> objectStream = new ArrayList<>().parallelStream();
           ArrayList<Object> list = new ArrayList<>();

           Object obj = new Object();
           IntStream.rangeClosed(1, 1000).parallel().forEach(s->{
               // 加入同步锁
               synchronized(obj) {
                   list.add(s);
               }
           });
           System.out.println(list.size()); // 1000
       }
   }

   ```

2. 使用线程安全的集合

   ```java
   Vector vector = new Vector();
   IntStream.rangeClosed(1, 1000).parallel().forEach(vector::add);
   System.out.println(vector.size()); // 1000
   ```

3. 将线程不安全的集合转为线程安全的

   ```java
   import java.util.ArrayList;
   import java.util.Collections;
   import java.util.List;
   import java.util.stream.Collectors;
   import java.util.stream.IntStream;

   public class ParallelStream {
       public static void main(String[] args) {
           Stream<Object> objectStream = new ArrayList<>().parallelStream();
           ArrayList<Object> list = new ArrayList<>();
           // 将线程不安全的集合转为线程全的集合
           List<Object> synchronizedList = Collections.synchronizedList(list);
           IntStream.rangeClosed(1, 1000).parallel().forEach(synchronizedList::add);
   		// 1000
           System.out.println(list.size());

       }
   }
   ```

4. 调用`Stream`流中的`collect/toArray`

   ```java
   import java.util.ArrayList;
   import java.util.List;
   import java.util.stream.Collectors;
   import java.util.stream.IntStream;
   import java.util.stream.Stream;

   public class ParallelStream {
       public static void main(String[] args) {

           Stream<Object> objectStream = new ArrayList<>().parallelStream();
           // ArrayList是线程不安全的list，这里又使用并行流进行操作，就会导致数据丢失
           ArrayList<Object> list = new ArrayList<>();

           List<Integer> list1 = IntStream.rangeClosed(1, 1000).parallel().boxed().collect(Collectors.toList());
           System.out.println(list1.size()); // 1000
       }
   }
   ```

## 8、Optional

Optional 是 Java 8 引入的一个容器类，它可以**保存类型为 T 的值，或者仅仅保存 null**。它的核心作用是：

- 显式地表达 “值可能存在也可能不存在”，让代码语义更清晰；
- 避免手动写大量的 `null` 检查，减少空指针异常；
- 提供一系列便捷的方法，让空值处理更优雅。

### 创建方式

- **of**

  必须传入非 null 值，否则直接抛空指针，适合确定值不为 null 的场景；

  ```java
  Optional<String> string = Optional.of("张三");
  ```

- **ofNullable**

  最常用，兼容 null 和非 null 值，推荐优先使用；

  ```java
  Optional<String> string1 = Optional.ofNullable("str");
  Optional<String> string2= Optional.ofNullable(null);
  ```

- **empty()**

  直接创建空的 Optional，显式表示 “无值”

  ```java
  Optional<String> emptyOptional = Optional.empty();
  ```

### 判断值

通过 `isPresent()` 判断值是否存在：

```java
Optional<String> optional1 = Optional.of("Java");
Optional<String> optional2 = Optional.empty();

// 判断值是否存在（true/false）
System.out.println(optional1.isPresent()); // true
System.out.println(optional2.isPresent()); // false
```

### 读取值

通过`get`读取值，如果是空就会报错，所以要搭配`isPresent`来使用

```java
Optional<String> string1 = Optional.ofNullable(null);

if (string1.isPresent()) {
    System.out.println(string1.get());
}else {
    System.out.println("没有值");
}
```

### 判断

- `orElse`

  如果`Optional`有值则使用原有的值，否则使用`orElse`的值

  ```java
  Optional<String> string = Optional.of("张三");
  Optional<String> string1 = Optional.empty();

  String s1 = string.orElse("李四");
  String s2 = string1.orElse("李四");

  System.out.println(s1); // 张三
  System.out.println(s1); // 李四
  ```

- `ifPresent`

  一个方法，接受一个`Consumer`参数，如果`Optional`有值就会执行里面的代码体

  ```java
  Optional<String> string = Optional.of("张三");
  Optional<String> string1 = Optional.empty();

  string.ifPresent(System.out::println); // 张三
  string1.ifPresent(System.out::println); // 不会打印
  ```

- `ifPresentOrElse`

  接受两个参数，有值执行前面的`Consumer`函数，没有值执行后面的`Runnable`函数

  ```java
  Optional<String> string = Optional.of("张三");

  string.ifPresentOrElse(s -> System.out.println("有值" + s),()->System.out.println("没有值")); // 有值 张三
  ```

### 映射

map 进行值的类型转换，或着其他的转换

```java
Optional<String> string = Optional.of("hello");
// 转为大写
Optional<String> s2 = string.map(String::toUpperCase);
System.out.println(s2); // HELLO

Optional<String> string = Optional.of("1");
// 转为数字
Optional<Integer> s2 = string.map(Integer::parseInt);
System.out.println(s2); // 1
```
