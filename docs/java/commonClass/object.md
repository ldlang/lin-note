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
