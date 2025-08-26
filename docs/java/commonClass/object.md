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

### 1、getClass

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

### 2、hashCode

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

### 3、toString

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

### 4、equals

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

### 5、finalize

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

### 3、Integer 缓冲区

`Integer`设置了一个`-128`到`127`的自动装箱缓冲区，只要是自动装箱的在这个区间的值相同，虽然是引用类型，但是也是比较的值，值相等就是`true`

```java
public class Encasement {
    public static void main(String[] args) {
        // 手动装箱，比较的是引用地址
        Integer a = new Integer(1);
        Integer b = new Integer(1);
        System.out.println(a == b); // false

        // 自动装箱且在 -128到127之间，能直接比较值
        Integer integer1 = 127;
        Integer integer2 = 127;
        System.out.println(integer1 == integer2); // true

        // 自动装箱，但是值不在缓冲区，比较的是引用地址
        Integer integer3 = 200;
        Integer integer4 = 200;
        System.out.println(integer3 == integer4); // false
    }
}
```

## 3、String 常用方法

### 1、length

获取字符串的长度

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdefghijklmnop";
        System.out.println( str.length() ); // 16
    }
}
```

### 2、charAt

获取字符串指定下标的字符

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdefghijklmnop";
        System.out.println(str.charAt(5)); // f
    }
}
```

### 3、contains

查看字符串中是否包含某个字符

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdefghijklmnop";
        System.out.println(str.contains("bc")); // true
        System.out.println(str.contains("cb")); // false
    }
}
```

### 4、toCharArray

转为数组

```java
import java.util.Arrays;

public class StringClass {
    public static void main(String[] args) {
        String str = "abcdef";

        // [a, b, c, d, e, f]
        System.out.println(Arrays.toString(str.toCharArray()));

        for (char c : str.toCharArray()) {
            // 依次打出每个字符
            System.out.println(c);
        }
    }
}
```

### 5、indexOf 和 lastIndexOf

* indexOf **从左往右**查找字符首次出现的位置

* lastIndexOf **从右往左**查找字符首次出现的位置

  > 找不到则返回 -1

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdbef";

        System.out.println(str.indexOf("b")); // 1
        System.out.println(str.lastIndexOf("b")); // 4
    }
}
```

### 6、trim

去除字符串两端的空格

```java
public class StringClass {
    public static void main(String[] args) {
        String str = " ab cdbef ";

        System.out.println(str.trim()); // ab cdbef
    }
}
```

### 7、toUpperCase 和 toLowerCase

* toUpperCase 将字符串中所有的字母转为**大写**

* toLowerCase 将字符串中所有的字母转为**小写**

  > 遇到中文会跳过

  ```java
  public class StringClass {
      public static void main(String[] args) {
          String str = "abcdbef中文b";
  
          System.out.println(str.toUpperCase()); // ABCDBEF中文B
          System.out.println(str.toUpperCase().toLowerCase()); // abcdbef中文b
      }
  }
  ```

### 8、startWith 和 endWith

* startWith 判断字符串是否以某个字符串**开始**

* endWith 判断字符串是否以某个字符串**结束**

  ```java
  public class StringClass {
      public static void main(String[] args) {
          String str = "abcdbef中文b";
  
          System.out.println(str.startsWith("ab")); // true
          System.out.println(str.endsWith("文b")); // true
      }
  }
  ```

### 9、replace

替换字符串中指定的字符

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "我在学习java语言";

        System.out.println(str.replace("java", "php"));
    }
}
```

### 10、split

以指定的字符分割字符串，变成一个数组

```java
import java.util.Arrays;

public class StringClass {
    public static void main(String[] args) {
        String str = "java is best language";
        // 得到的是转换后的引用地址
        System.out.println(str.split(" ")); // [Ljava.lang.String;@10f87f48
        System.out.println(Arrays.toString(str.split(" "))); // [java, is, best, language]
        
        for (String s : str.split(" ")) {
            System.out.println(s);
            // java
            // is
			// best
            // language
        }
    }
}
```

### 11、euqals 和 equalsIgnoreCase

* euqals  比较两个字符串的值是否相同
* equalsIgnoreCase 忽略大小写的比较两个字符串的值是否相同

> 为什么自动装箱的String对象没有进行比较地址
>
> * Java为了优化内存使用，维护了一个特殊的存储区域叫 字符串常量池（位于堆内存中）。
> * 当通过 字面量（literal） 方式创建字符串（如 String str = "hello";）时，JVM会先检查常量池中是否已存在该字符串：
>   * 如果存在，直接返回池中已有字符串的引用。
>   * 如果不存在，则在常量池中创建该字符串，并返回其引用。
>
> 因此下面的 str1 == str2 是 true
>

```java
public class StringClass {
    public static void main(String[] args) {
        String str1 = "hello";
        String str2 = "hello";
        // 不建议使用
        System.out.println(str1 == str2); // true
        System.out.println(str1.equals(str2)); // true
        
        String str3 = "hello";
        String str4 = "Hello";
        System.out.println(str3.equalsIgnoreCase(str4));  // true
    }
}
```

### 12、substring

截取字符串中指定区间的字符

> 一个参数：从指定开始位置截取到末尾（包含开始位置的字符）
>
> 两个参数：从制定开始位置（包含）截取到指定结束为止（不包含）

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "这是一个字符串";
        System.out.println(str.substring(2));
        System.out.println(str.substring(2, 4));
    }
}
```

## 4、StringBuffer 和 StringBuilder

相同点：

* 可变长字符串

不同点

* StringBuffer
  * JDK1.0提供的
  * 运行效率比`String`快，但是比`StringBuilder`要慢，线程安全
* StringBuilder
  * JDK5.0提供，运行效率最快，但是线程不安全

```java
public class StringClass {
    public static void main(String[] args) {
        /**
        * StringBuffer
        */
        StringBuffer sb = new StringBuffer();
        // 增
        sb.append("abc");
        System.out.println(sb.toString()); // abc
        // 插入
        sb.insert(1, "s");
        System.out.println(sb.toString()); // asbc
        // 替换
        sb.replace(2, sb.length(), "哈哈");
        System.out.println(sb.toString()); // as哈哈
        // 删除
        sb.delete(2, sb.length());
        System.out.println(sb.toString()); // as
        
        /**
        * StringBuilder
        */
        StringBuilder sb = new StringBuilder();
        // 增
        sb.append("abc");
        System.out.println(sb.toString()); // abc
        // 插入
        sb.insert(1, "s");
        System.out.println(sb.toString()); // asbc
        // 替换
        sb.replace(2, sb.length(), "哈哈");
        System.out.println(sb.toString()); // as哈哈
        // 删除
        sb.delete(2, sb.length());
        System.out.println(sb.toString()); // as
    }
}
```

运行效率比较

```java
public class StringClass {
    public static void main(String[] args) {
		// String
        long start = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < 99999; i++) {
            str += i;
        }
        long end = System.currentTimeMillis();
        System.out.println(end - start); // 2712

        // StringBuffer
        long start1 = System.currentTimeMillis();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 99999; i++) {
            sb.append(i);
        }
        long end1 = System.currentTimeMillis();
        System.out.println(end1 - start1); // 3

        // StringBuilder
        long start2 = System.currentTimeMillis();
        StringBuilder sb2 = new StringBuilder();
        for (int i = 0; i < 99999; i++) {
            sb2.append(i);
        }
        long end2 = System.currentTimeMillis();
        System.out.println(end2 - start2); // 2
    }
}
```

### 5、BigDecimal

用于计算精确的加减乘除，防止出现精度问题



