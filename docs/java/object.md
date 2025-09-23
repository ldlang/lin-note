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

### getClass

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

### hashCode

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

### toString

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

### equals

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

### finalize

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

### 装箱与拆箱（类型转换）

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

### 基本类型和字符串之间的转换

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

### Integer 缓冲区

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

### length

获取字符串的长度

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdefghijklmnop";
        System.out.println( str.length() ); // 16
    }
}
```

### charAt

获取字符串指定下标的字符

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "abcdefghijklmnop";
        System.out.println(str.charAt(5)); // f
    }
}
```

### contains

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

### toCharArray

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

### indexOf 和 lastIndexOf

- indexOf **从左往右**查找字符首次出现的位置

- lastIndexOf **从右往左**查找字符首次出现的位置

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

### trim

去除字符串两端的空格

```java
public class StringClass {
    public static void main(String[] args) {
        String str = " ab cdbef ";

        System.out.println(str.trim()); // ab cdbef
    }
}
```

### toUpperCase 和 toLowerCase

- toUpperCase 将字符串中所有的字母转为**大写**

- toLowerCase 将字符串中所有的字母转为**小写**

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

### startWith 和 endWith

- startWith 判断字符串是否以某个字符串**开始**

- endWith 判断字符串是否以某个字符串**结束**

  ```java
  public class StringClass {
      public static void main(String[] args) {
          String str = "abcdbef中文b";

          System.out.println(str.startsWith("ab")); // true
          System.out.println(str.endsWith("文b")); // true
      }
  }
  ```

### replace

替换字符串中指定的字符

```java
public class StringClass {
    public static void main(String[] args) {
        String str = "我在学习java语言";

        System.out.println(str.replace("java", "php"));
    }
}
```

### split

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

### euqals 和 equalsIgnoreCase

- euqals 比较两个字符串的值是否相同
- equalsIgnoreCase 忽略大小写的比较两个字符串的值是否相同

> 为什么自动装箱的 String 对象没有进行比较地址
>
> - Java 为了优化内存使用，维护了一个特殊的存储区域叫 字符串常量池（位于堆内存中）。
> - 当通过 字面量（literal） 方式创建字符串（如 String str = "hello";）时，JVM 会先检查常量池中是否已存在该字符串：
>   - 如果存在，直接返回池中已有字符串的引用。
>   - 如果不存在，则在常量池中创建该字符串，并返回其引用。
>
> 因此下面的 str1 == str2 是 true

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

### substring

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

- 可变长字符串

不同点

- StringBuffer
  - JDK1.0 提供的
  - 运行效率比`String`快，但是比`StringBuilder`要慢，线程安全
- StringBuilder
  - JDK5.0 提供，运行效率最快，但是线程不安全

### append

追加

```java
// 增
sb.append("abc");
System.out.println(sb.toString()); // abc
```

### insert

插入

```java
// 插入
sb.insert(1, "s");
System.out.println(sb.toString()); // asbc
```

### replace

替换

```java
// 替换
sb.replace(2, sb.length(), "哈哈");
System.out.println(sb.toString()); // as哈哈
```

### delete

删除

```java
// 删除
sb.delete(2, sb.length());
System.out.println(sb.toString()); // as
```

完整实例

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

## 5、BigDecimal

用于计算精确的加减乘除，防止出现精度问题

```java
BigDecimal a1 = new BigDecimal("0.1");
BigDecimal b1 = new BigDecimal("0.2");
```

### add

加法

```java
BigDecimal addNum = a1.add(b1);
System.out.println(addNum); // 0.3
```

### subtract

减法

```java
BigDecimal subNum = a1.subtract(b1);
System.out.println(subNum); // -0.1
```

### multiply

乘法

```java
BigDecimal multiNum = a1.multiply(b1);
System.out.println(multiNum); // 0.02
```

### divide

除法

> 除不尽会报错，所以最好加上保留位数和取整方式

```java
BigDecimal divideNum = a1.divide(b1);
System.out.println(divideNum); // 0.5

System.out.println(new BigDecimal("10").divide(new BigDecimal("3"), 2, BigDecimal.ROUND_HALF_UP)); // 3.33
```

## 6、Date

Date 表示特定的瞬间，精确到毫秒，`Date`类中的大多数方法都已经被`Calendar`类中的方法所取代。因为不易于做国际化

### getTime

获取时间戳

```java
Date date = new Date();
// getTime 获取时间戳
System.out.println(date.getTime()); // 1756346340292
```

### before

测试此日期是否在指定日期之后

```java
Date date = new Date();

Date date1 = new Date(date.getTime() - (1000 * 60 * 60 * 24));
System.out.println(date1.toLocaleString()); // 2025年8月27日 09:59:00

// before 测试此日期是否在指定日期之后
boolean b1 = date1.before(date);
System.out.println(b1); // true
```

### after

测试此日期是否在指定日期之前

```java
Date date = new Date();

Date date1 = new Date(date.getTime() - (1000 * 60 * 60 * 24));
System.out.println(date1.toLocaleString()); // 2025年8月27日 09:59:00

// after 测试此日期是否在指定日期之前
boolean b2 = date1.after(date);
System.out.println(b2); // false
```

### equals

比较两个时间是否相同

```java
Date date = new Date();

Date date1 = new Date(date.getTime() - (1000 * 60 * 60 * 24));
System.out.println(date1.toLocaleString()); // 2025年8月27日 09:59:00

//equals 比较两个时间是否相同
boolean b3 = date1.equals(date);
System.out.println(b3); // false
```

完整实例

```java
import java.util.Date;

public class DateStu {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date); // Thu Aug 28 09:59:00 CST 2025
        System.out.println(date.toString()); // Thu Aug 28 09:59:00 CST 2025
        System.out.println(date.toLocaleString()); // 2025年8月28日 09:59:00
        // getTime 获取时间戳
        System.out.println(date.getTime()); // 1756346340292

        Date date1 = new Date(date.getTime() - (1000 * 60 * 60 * 24));
        System.out.println(date1.toLocaleString()); // 2025年8月27日 09:59:00

        // before 测试此日期是否在指定日期之后
        boolean b1 = date1.before(date);
        System.out.println(b1); // true

        // after 测试此日期是否在指定日期之前
        boolean b2 = date1.after(date);
        System.out.println(b2); // false

        //equals 比较两个时间是否相同
        boolean b3 = date1.equals(date);
        System.out.println(b3); // false

        int i1 = date1.compareTo(date);
        System.out.println(i1);
    }
}
```

## 7、Calendar

获取时间，是`Date`的替代，`Calendar`是受保护的所以不能直接`new`

### get

获取时间

> 读取的时间都是 Calendar.getInstance()，方法调用那一刻的时间。

```java
import java.util.Calendar;

public class CalendarStu {
    public static void main(String[] args) {
        // 获取当前时间
        Calendar calendar = Calendar.getInstance();
        System.out.println(calendar.getTime().toLocaleString());

        // 年
        int year = calendar.get(Calendar.YEAR);
        System.out.println(year);

        // 月 特别的是月份要+1才是当前月
        int month = calendar.get(Calendar.MONTH) + 1;
        System.out.println(month);

        // 日
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        System.out.println(day);

        // 时
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        System.out.println(hour);

        // 分
        int minute = calendar.get(Calendar.MINUTE);
        System.out.println(minute);

        // 秒
        int second = calendar.get(Calendar.SECOND);
        System.out.println(second);

        // 毫秒
        int millisecond = calendar.get(Calendar.MILLISECOND);
        System.out.println(millisecond);
    }
}
```

### set

设置时间

> 设置的时间都是 Calendar.getInstance()，方法调用那一刻的时间。

```java
import java.util.Calendar;

public class CalendarStu {
    public static void main(String[] args) {
        Calendar calendar1 = Calendar.getInstance();
        // 设置年
        calendar1.set(Calendar.YEAR, 2027);
        System.out.println(calendar1.get(Calendar.YEAR)); // 2027

        // 设置月
        calendar1.set(Calendar.MONTH, 2);
        System.out.println(calendar1.get(Calendar.MONTH)); // 2
    }
}
```

### add

增加时间，也可以增加负数，变成减

```java
import java.util.Calendar;

public class CalendarStu {
    public static void main(String[] args) {
        Calendar calendar2 = Calendar.getInstance();
        // 增加两个月
        calendar2.add(Calendar.MONTH, 2);
        System.out.println(calendar2.get(Calendar.MONTH));
    }
}

```

### getActualMaximum 和 getActualMinimum

- getActualMaximum：获取当前时间类型的**最大值**

- getActualMinimum：获取当前时间类型的**最小值**

  ```java
  import java.util.Calendar;

  public class CalendarStu {
      public static void main(String[] args) {
  		Calendar calendar2 = Calendar.getInstance();

          // 获取当前月的最后一天
          int maxMonthDay = calendar2.getActualMaximum(Calendar.DAY_OF_MONTH);
          // 获取当前月的第一天
          int minMonthDay = calendar2.getActualMinimum(Calendar.DAY_OF_MONTH);

          // 获取每天的第一个小时
          int maxHour = calendar2.getActualMaximum(Calendar.HOUR_OF_DAY);
          // 获取每天的最后一个小时
          int minHour = calendar2.getActualMinimum(Calendar.HOUR_OF_DAY);
      }
  }
  ```

## 8、SimpleDateFormat

是一个以与语言环境有关的方式来格式化和解析日期的具体类

| 符号   | 含义                | 示例        |
| ------ | ------------------- | ----------- |
| `yyyy` | 年（4 位）          | 2023        |
| `MM`   | 月（01-12）         | 10（10 月） |
| `dd`   | 日（01-31）         | 25          |
| `HH`   | 小时（00-23）       | 14          |
| `mm`   | 分钟（00-59）       | 30          |
| `ss`   | 秒（00-59）         | 45          |
| `SSS`  | 毫秒（000-999）     | 789         |
| `E`    | 星期几（如 "周一"） | 星期三      |
| `a`    | 上午/下午（AM/PM）  | 下午        |

### format

格式化日期

> 按照固定好的格式来格式化日期

```java
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class SimpleDateFormatStu {
    public static void main(String[] args) throws ParseException, ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
        Calendar calendar = Calendar.getInstance();

        String date = sdf.format(calendar.getTime());
        System.out.println(date); // 2025-08-28

        String date1 = sdf1.format(calendar.getTime());
        System.out.println(date1); // 2025年08月28日 11:18:48
    }
}
```

### parse

解析字符串的时间

> 字符串的格式也必须是规定的格式，不然会解析报错

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatStu {
    public static void main(String[] args) throws ParseException, ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = "2023-10-25 14:30:45";
        Date date = sdf.parse(dateStr);
        System.out.println(date.getTime());
    }
}
```

## 9、System

### arraycopy

复制数组，支持 5 个参数

```java
import java.util.Arrays;

public class SystemStu {
    public static void main(String[] args) {
        /**
         *  arraycopy
         *  Object src,      // 源数组（必须非 null）
         *  int srcPos,      // 源数组的起始索引（从 0 开始）
         *  Object dest,     // 目标数组（必须非 null）
         *  int destPos,     // 目标数组的起始索引（从 0 开始）
         *  int length       // 要复制的元素数量
         */
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] arr2 = new int[10];
        System.arraycopy(arr, 0, arr2, 6, 4);
        System.out.println(Arrays.toString(arr2)); // [0, 0, 0, 0, 0, 0, 1, 2, 3, 4]
    }
}
```

### currentTimeMillis

获取当前系统时间（毫秒级），可以用来计算一段代码的运行时长

```java
public class SystemStu {
    public static void main(String[] args) {

        long start = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < 99999; i++) {
            str += i;
        }
        long end = System.currentTimeMillis();
        System.out.println(end - start); // 2751
    }
}
```

### gc

通知 JVM 进行垃圾回收，但也只能通知

### exit

退出 JVM 程序，0 表示正常退出，其他值表示异常退出，退出之后就不会再执行后面的代码

```java
public class SystemStu {
    public static void main(String[] args) {
        System.exit(0);
        // 这里的代码不会执行
        System.out.println("程序退出了");
    }
}
```
