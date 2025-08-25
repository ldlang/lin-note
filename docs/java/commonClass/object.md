---
sidebar: auto
---

# 常用类

## 1、Object 类

1. Object 类是所有类的父类，位于继承树的最顶层
2. 任何类没有书写 extends 显示继承某个类，都默认直接继承 Object 类
3. Object 类中所定义的方法，是所有类都具备的方法
4. Object 类型可以存储任何对象，作为参数可接受任何对象，作为返回值也是

```java
// 公共示例类
public class Common {
    private String name;

    public Common(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class Getcom {
    private String name;

    public Getcom(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

### 1、getClass 方法

返回引用中存储的实际对象类型，通常用于判断两个引用中实际对象类型是否一致。

```java
public class Application {
    public static void main(String[] args) {
        GetCom getCom1 = new GetCom("张三");
        GetCom getCom2 = new GetCom("李四");
        Common common = new Common("张三");

        Class class1 = getCom1.getClass();
        Class class2 = getCom2.getClass();
        Class class3 = common.getClass();
        System.out.println(class1 == class2); // true
        System.out.println(class2 == class3); // true
    }
}
```

### 2、hashCode 方法

获取对象的哈希码值，哈希值是根据对象的地址或字符串或数字使用哈希算法计算出来的 int 类型的数值，一般情况下相同对象返回相同的哈希码。

```java
public class Application {
    public static void main(String[] args) {
        GetCom getCom1 = new GetCom("张三");
        GetCom getCom2 = new GetCom("张三");
        Common common = new Common("张三");

        System.out.println(getCom1.hashCode()); // 793589513
        System.out.println(getCom2.hashCode()); // 1313922862
        System.out.println(getCom1.hashCode() == getCom2.hashCode()); // false
    }
}
```

### 3、toString 方法

返回该对象的字符串表示，一般会被重写为展示对象各个属性值

- 没有重写

  ```java
  public class Application {
      public static void main(String[] args) {
          GetCom getCom1 = new GetCom("张三");

          System.out.println(getCom1.toString()); // obj.ldlang.GetCom@2f4d3709
      }
  }
  ```

- 重写后

  > 使用 alt + insert 快速重写

  ```java
  // 在 GetCom 中重写 toString 方法
  @Override
  public String toString() {
      return "GetCom{" +
          "name='" + name + '\'' +
          '}';
  }

  System.out.println(getCom1.toString()); // GetCom{name='张三'}
  ```

### 4、equals 方法

比较两个对象地址是否相同，可进行重写，比较两个对象的内容是否相同

- 重写前

  ```java
  public class Application {
      public static void main(String[] args) {
          GetCom getCom1 = new GetCom("张三");
          GetCom getCom2 = new GetCom("张三");

          System.out.println(getCom1.equals(getCom2)); // false
      }
  }
  ```

- 重写后

  ```java
  // 在 GetCom 中重写 equals 方法
  @Override
  public boolean equals(Object o) {
      if (o == null || this.getClass() != o.getClass()) return false;
      GetCom getCom = (GetCom) o;
      return Objects.equals(this.name, getCom.name);
  }

  public class Application {
      public static void main(String[] args) {
          GetCom getCom1 = new GetCom("张三");
          GetCom getCom2 = new GetCom("张三");

          System.out.println(getCom1.equals(getCom2)); // true
      }
  }

  public class Application {
      public static void main(String[] args) {
          GetCom getCom1 = new GetCom("张三");
          GetCom getCom2 = new GetCom("李四");

          System.out.println(getCom1.equals(getCom2)); // false
      }
  }
  ```

### 5、finalize 方法

- 当对象被判断为垃圾对象时，由 jvm 自动调用此方法，用以标记垃圾对象，进入回收队列
- 没有有效引用指向此对象时，为垃圾对象
- 垃圾回收有 GC 摧毁垃圾对象，释放数据存储空间
- 自动回收机制。JVM 的内存耗尽，一次性回收所有垃圾对象
- 手动回收机制，使用`System.gc()`，通知 JVM 进行回收，但也只能是通知

## 2、包装类

基本数据类型所对应的应用数据类型，`Object`可统一所有数据，包装类的默认值是`null`，变为引用类型之后就能使用`Object`上的方法。

| 基本数据类型 | 包装类      | 所属包      | 默认值     | 占用字节               |
| ------------ | ----------- | ----------- | ---------- | ---------------------- |
| `byte`       | `Byte`      | `java.lang` | `0`        | 1                      |
| `short`      | `Short`     | `java.lang` | `0`        | 2                      |
| `int`        | `Integer`   | `java.lang` | `0`        | 4                      |
| `long`       | `Long`      | `java.lang` | `0L`       | 8                      |
| `float`      | `Float`     | `java.lang` | `0.0f`     | 4                      |
| `double`     | `Double`    | `java.lang` | `0.0d`     | 8                      |
| `char`       | `Character` | `java.lang` | `'\u0000'` | 2                      |
| `boolean`    | `Boolean`   | `java.lang` | `false`    | 1 (JVM 规范未严格限定) |

### 1、装箱与拆箱（类型转换）

1. 装箱：将基本类型装换为**引用类型**

2. 拆箱：将引用类型装换为**基本类型**

   > valueOf 基本类型转为引用类型
   >
   > Integer integer12 = Integer.valueOf(sex);

例：

```java
public class Encasement {
    public static void main(String[] args) {
        int age = 30;
        // jdk1.5之后，自动装箱，拆箱
        // 装箱 => 转为引用类型
        Integer integer = age;
        Integer integer12 = Integer.valueOf(sex);
        // 拆箱 => 转为基本类型
        int age2 = integer;

        // jdk1.5之前，已弃用
        int sex = 1;
        // 装箱
        Integer integer1 = new Integer(sex);
        Integer integer12 = Integer.valueOf(sex);
        // 拆箱
        int sex1 = integer1.intValue();
    }
}
```

### 2、基本类型和字符串之间的转换

使用`parseXX()`方法能实现转为基本类型；

> int a = 10;
>
> int b = Integer.parseInt(a);
>
> String a = "ture";
> boolean b = Boolean.parseBoolean(a);

1. `int` 转 `字符串`

   ```java
   public class Encasement {
       public static void main(String[] args) {
           int age = 30;
           String a = age + "";
           String b = Integer.toString(age);
           // 转为 16 进制的字符串
           String c = Integer.toString(age, 16);
       }
   }
   ```

2. 字符串转基本类型

   ```java
   public class Encasement {
       public static void main(String[] args) {
           String a = "15";
           int b = Integer.parseInt(a);
       }
   }
   ```

3. 字符串转`boolean`

   **除了字符串的 true 能转为 boolean 的 true，其他的都是 false**

   ```java
   public class Encasement {
       public static void main(String[] args) {
           String a = "ture";
           boolean b = Boolean.parseBoolean(a);
           System.out.println(b);
       }
   }
   ```
