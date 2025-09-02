---
sidebar: auto
---

# 集合

1. 对象的容器，实现了对对象常用的操作，类似数组功能
2. 集合和数组的区别
   - 数组的长度固定，集合长度不固定
   - 数组可以存储基本类型和引用类型，集合直接存引用类型
3. 位置：`java.util.*`

![集合](/java/Collection.png)

> 1. Collection 是该体系的根接口，代表一组对象，称为集合
> 2. List 接口：有序、又下标、元素可重复
> 3. Set 接口：无序、无下标、元素不能重复

## 1、Collection

`Collection`是一个接口所以不能实例化，但是可实例化他的子级`class`

- size 返回集合的长度
- isEmpty 判断集合是否为空
- contains 判断集合中是否包含某个元素
  > collection.size() // 返回集合的长度
  > collection.isEmpty() // 判断集合是否为空
  > collection.contains("张三") // 判断集合中是否包含某个元素

### 添加元素

```java
import java.util.ArrayList;
import java.util.Collection;

public class CollectionStu {
    public static void main(String[] args) {
        Collection collection = new ArrayList();

        collection.add("张三");
        collection.add("李四");
        collection.add("王五");
        System.out.println(collection); // [张三, 李四, 王五]
    }
}
```

### 删除元素

1. remove 删除指定元素

   ```java
   import java.util.ArrayList;
   import java.util.Collection;

   public class CollectionStu {
       public static void main(String[] args) {
           Collection collection = new ArrayList();
           // collection里面的元素 [张三, 李四, 王五]
           // 删除指定元素
           collection.remove("张三");
           System.out.println(collection); // [李四, 王五]
       }
   }
   ```

2. removeAll 清空数组，要传入清空的对象

   ```java
   import java.util.ArrayList;
   import java.util.Collection;

   public class CollectionStu {
       public static void main(String[] args) {
           Collection collection = new ArrayList();
           // collection里面的元素 [张三, 李四, 王五]
           // 清空数组
           collection.removeAll(collection));
           System.out.println(collection); // []
       }
   }
   ```

3. clear 清空数组

   ```java
   import java.util.ArrayList;
   import java.util.Collection;

   public class CollectionStu {
       public static void main(String[] args) {
           Collection collection = new ArrayList();
           // collection里面的元素 [张三, 李四, 王五]
           // 清空数组
           collection.clear();
           System.out.println(collection); // []
       }
   }
   ```

### 遍历

1. 增强 for 循环

   ```java
   import java.util.ArrayList;
   import java.util.Collection;

   public class CollectionStu {
       public static void main(String[] args) {
           Collection collection = new ArrayList();
           // collection里面的元素 [张三, 李四, 王五]
           for (Object o : collection) {
               System.out.println(o); // 依次打印上面的元素
           }
       }
   }
   ```

2. Iterator 接口

   Iterator 有几个方法来实现循环

   - hasNext：如果迭代具有更多元素，则返回 true；
   - next：返回迭代中的下一个元素
   - remove：从底层集合中删除此迭代器返回的最后一个元素

   ```java
   import java.util.ArrayList;
   import java.util.Collection;
   import java.util.Iterator;

   public class CollectionStu {
       public static void main(String[] args) {
   		// collection里面的元素 [张三, 李四, 王五]
           Iterator it = collection.iterator();
           while (it.hasNext()) {
               Object obj = it.next();
               System.out.println(obj); // 依次打印数组中的元素
   			it.remove();
           }

           System.out.println(collection); // []
       }
   }
   ```

### 判断

contains 判断里面是否包含某个元素

```java
import java.util.ArrayList;
import java.util.Collection;

public class CollectionStu {
    public static void main(String[] args) {
		// collection里面的元素 [张三, 李四, 王五]
        Boolean b = collection.contains("张三");
        System.out.println(b); // true

        // 判断这个元素是否为空
        System.out.println(collection.isEmpty()); // false
    }
}
```

### 存储复杂类型数据

```java
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class CollectionStu1 {
    public static void main(String[] args) {
        Collection colleciton = new ArrayList();
        Student s1 = new Student(12, "张三");
        Student s2 = new Student(13, "李四");
        Student s3 = new Student(15, "王五");

        // 增加元素
        colleciton.add(s1);
        colleciton.add(s2);
        colleciton.add(s3);
        System.out.println(colleciton);
        System.out.println(colleciton.size());

        // 删除元素
        colleciton.remove(s1);
        System.out.println(colleciton);

        // 遍历元素
        Iterator it = colleciton.iterator();
        while (it.hasNext()) {
            Student student = (Student) it.next();
            System.out.println(student.toString());
        }

        for (Object s : colleciton) {
            Student student = (Student) s;
            System.out.println(student.toString());
        }
    }
}
```

## 2、List

有序、有下标、元素可重复，`List`是继承了`Collection`所以拥有`Collection`的所有方法，`List`也是一个接口，不能直接实例化，也只能通过他的实现类的实例化。

### 添加元素 / 设置元素

1. add 增加或插入元素

   > 一个参数为添加元素到末尾，两个参数为插入，第一个参数是插入的位置，第二个是插入的元素

2. set 设置元素

```java
import java.util.ArrayList;
import java.util.List;

public class ListStu {
    public static void main(String[] args) {
        List list = new ArrayList();

        // 按顺序添加
        list.add("张三");
        list.add("李四");

        // 类似于插入添加元素到指定为止
        list.add(0, "王五");
        System.out.println(list); // [王五, 张三, 李四]

        // 设置，将下标1为止的元素更改
        list.set(1, "哈哈");
        System.out.println(list); // [王五, 哈哈, 李四]
    }
}
```

### 删除

1. clear 清空数组
2. remove 删除指定下标或者指定的元素

```java
import java.util.ArrayList;
import java.util.List;

public class ListStu {
    public static void main(String[] args) {
        List list = new ArrayList();
        // list 的元素 [王五, 张三, 李四]
		list.clear();
        System.out.println(list); // []

        // list 的元素 [王五, 张三, 李四]
		list.remove(1);
        System.out.println(list); // [王五, 李四]

        // list 的元素 [王五, 张三, 李四]
		list.remove("王五");
        System.out.println(list); // [张三, 李四]
    }
}
```

元素是`int`类型怎么通过元素删除

```java
package collection.ldlang;

import java.util.ArrayList;
import java.util.List;

public class ListStu {
    public static void main(String[] args) {
        List list = new ArrayList();

        list.add(23); // 这里是会自动装箱的
        list.remove(23) // 报错。没有下标23的元素

        // 只能这种方式删除
        list.remove(new Integer(23));
        System.out.println(list);
    }
}
```

### 遍历

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class ListStu {
    public static void main(String[] args) {
        List list = new ArrayList();
		// list 的元素 [王五, 张三, 李四]
        // 遍历
        // 普通for循环
        for (int i = 0; i < list.size(); i++) {
            String s = (String) list.get(i);
            System.out.println(s);
        }

        // 增强for
        for (Object o : list) {
            System.out.println(o);
        }

        // 从Collection 继承的 iterator
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String s = (String) it.next();
            System.out.println(s);
        }

        // listIterator
        ListIterator li = list.listIterator();
        // 从前往后循环
        while (li.hasNext()) {
            System.out.println(li.nextIndex() + ":" + li.next());
        }

        // 倒序循环
        while (li.hasPrevious()) {
            System.out.println(li.previousIndex() + ":" + li.previous());
        }
    }
}
```

### 截取数组

subList：支持两个参数，第一个是起始位置，第二个是结束位置（含头不含尾）

```java
import java.util.ArrayList;
import java.util.List;

public class ListStu {
    public static void main(String[] args) {
        List list = new ArrayList();
        // list 的元素 [王五, 张三, 李四]
        List list1 = list.subList(1, 2);
        System.out.println(list1); // [张三]

    }
}
```

## 3、List 的实现类

1. ArrayList
   - 数据结构实现，查询快，增删慢
   - `JDK1.2`版本，运行效率快，线程不安全
2. Vector（已弃用）
   - 数据结构实现，查询快，增删慢
   - `JDK1.0`版本，运行效率慢，线程安全
3. LinkedList
   - 链表结构实现，增删快，查询慢

### ArrayList

增删改也是同上

```java
package collection.ldlang;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListStu {
    public static void main(String[] args) {
        ArrayList list = new ArrayList();
        list.add(23);
        list.add(24);
        System.out.println(list);

        list.remove(1);
        System.out.println(list);

        Iterator it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```

源码分析

1. DEFAULT_CAPACITY = 10；默认容量
2. 如果没有向集合中添加任何元素时，容量 0，添加一个元素之后容量 10，每次孔融大小是原来的 1.5 倍
3. elementData 存放元素的数组
4. size 实际元素个数
5. add 添加元素

### LinkList

```java
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

public class LinkListStu {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        Student s1 = new Student(12, "张三");
        Student s2 = new Student(13, "李四");
        Student s3 = new Student(15, "王五");

        // 增加元素
        list.add(s1);
        list.add(s2);
        list.add(s3);
        System.out.println(list);
        System.out.println(list.size());

//        list.remove(s1);
//        list.remove(1);

        // 遍历
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        for (Object o : list) {
            System.out.println(o);
        }

        Iterator it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

        ListIterator li = list.listIterator();
        while (li.hasNext()) {
            System.out.println(li.next());
        }

        System.out.println(list.contains(s1));
    }
}

```

## 4、泛型

- 泛型是`JDK1.5`中引入的一个新特性，其本质就是参数化类型，把类型作为参数传递
- 常见形式有，泛型类、泛型接口、泛型方法
- 语法：`<T...>`，T 称为占位符，表示一种引用类型
- 好处：
  - 提高代码的重用性
  - 防止类型转换异常，提高代码的安全性

### 泛型类

1. 泛型只能使用引用类型
2. 不同泛型类型对象之间不能相互赋值

```java
/**
 * <T,K,V> 可以同时定义很多个泛型
 * 语法：类名<T>
 * @param <T>
 */
public class MyGeneric<T> {
    // 使用泛型创建变量
    private T t;

    // 使用泛型作为函数返回值
    public T getT() {
        return t;
    }

    // 使用泛型作为函数参数
    public void setT(T t) {
        this.t = t;
    }
}

// 使用泛型类
public class Application {
    public static void main(String[] args) {
        // 实例化泛型类，并传入类型
        // 传入String
        MyGeneric<String> myGeneric = new MyGeneric<>();
        myGeneric.setT("hello");
        String s = myGeneric.getT();
        System.out.println(s);

        // 传入Integer
        MyGeneric<Integer> myGeneric2 = new MyGeneric<>();
        myGeneric2.setT(1);
        Integer i = myGeneric2.getT();
        System.out.println(i);
    }
}
```

### 泛型接口

- 定义泛型接口

  ```java
  public interface MyInterface<T> {
      T getT(T t);
  }
  ```

- 使用泛型接口

  - 方式一

    在类中就传入指定类型

    ```java
    public class UseInterface implements MyInterface<String> {
        @Override
        public String getT(String s) {
            return s;
        }
        public String setT(String s) {
            return s;
        }
    }

    // 使用泛型类
    public class Application {
        public static void main(String[] args) {
            UseInterface useInterface = new UseInterface();
            useInterface.setT("hello");
            System.out.println(useInterface.getT("hello"));
        }
    }
    ```

  - 方式二

    在

    ```java
    // 使用泛型类是使用泛型接口，最终的泛型类由实例化的时候确定
    public class UseeInterface1<T> implements MyInterface<T> {
        @Override
        public T getT(T t) {
            return t;
        }
    }

    // 实例化的时候再传入泛型类
    public class Application {
        public static void main(String[] args) {
            UseeInterface1<Integer> useeInterface1 = new UseeInterface1<>();
            int i = useeInterface1.getT(8);
            System.out.println(i);
        }
    }
    ```

### 泛型方法

泛型方法不需要传入指定的泛型，通过传入的形参自动推断

```java
/**
 * 泛型方法
 * 语法：修饰符 <T> 返回值类型 方法名
 */

// 定义泛型方法
public class GenericMethod {
    public <T> T getT(T t) {
        T t1 = t;
        return t1;
    }

    public <K> void getK(K k) {
        System.out.println(k);
    }

    public static <V> V getV(V v) {
        return v;
    }
}

// 使用泛型方法
public class Application {
    public static void main(String[] args) {
        GenericMethod genericMethod = new GenericMethod();
        // getT
        String s = genericMethod.getT("q");
        System.out.println(s);

		// getK
        genericMethod.getK('k');

        // getV
        String s1 = GenericMethod.getV("s");
        System.out.println(s1);
    }
}
```

### 泛型集合

- 参数化类型、类型安全的集合，强制卷积核元素的类型必须一致
- 特点
  - 编译时即可检查，而非运行时抛出异常
  - 访问时，不必类型转换（拆箱）
  - 不同泛型之间引用不能互相渎职，泛型不存在多态

```java
import java.util.ArrayList;

public class GenericArray {
    public static void main(String[] args) {
        Student student = new Student(12, "张三");
        // 规定好ArrayList的每个item类型就是Student
        ArrayList<Student> list = new ArrayList<>();
        list.add(student);
        list.add(1); // 报错，只能接受Student类型的参数
        System.out.println(list);
    }
}
```

## 5、set 集合

- 无须、无下标，元素不可重复
- 方法：全部继承自 Collection 中的方法，没有自己独有的方法

```java
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class SetStu {
    public static void main(String[] args) {
        Set<String> set = new HashSet<String>();
        set.add("a");
        set.add("b");
        set.add("c");
        set.add("a"); // 无法添加，因为set不能用重复的项

        // 删除
        set.remove("c");
        System.out.println(set.size()); // 2

        // 遍历
        for (String s : set) {
            System.out.println(s);
        }

        Iterator<String> it = set.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

        // 判断
        Boolean b = set.contains("a"); // true
        System.out.println(b);
        System.out.println(set.isEmpty()); // false
    }
}
```

### HashSet

- 基于 `HashCode`计算元素存放位置

- 当存入元素的哈希码相同时，会调用`equals`进行确认，若结果为`true`，则拒绝后者存入

- 存储结构：哈希表（数组+链表+红黑树）

  ```java
  import java.util.HashSet;
  import java.util.Iterator;

  public class HashSetStu {
      public static void main(String[] args) {
          HashSet<Student> hashSet = new HashSet<>();

          Student s1 = new Student(50, "张三");
          Student s2 = new Student(21, "李四");
          Student s3 = new Student(23, "王五");

          // 新增
          hashSet.add(s1);
          hashSet.add(s2);
          hashSet.add(s3);
          hashSet.add(s2);
          System.out.println(hashSet.toString());

          // 删除
          hashSet.remove(s1);
          System.out.println(hashSet.toString());

          // 遍历
          for (Student student : hashSet) {
              System.out.println(student);
          }

          Iterator<Student> it = hashSet.iterator();
          while (it.hasNext()) {
              Student student = it.next();
              System.out.println(student);
          }

          // 判断
          Boolean b = hashSet.contains(s2);
          System.out.println(b); // true
          System.out.println(hashSet.isEmpty()); // false
      }
  }
  ```

### TreeSet

- 基于排列顺序实现元素不重复

- 实现了`SortedSet`接口，对集合元素自动排序

- 元素对象的类型必须实现`Comparable`接口，指定排序规则

- 通过`CompareTo`方法确定是否为重复元素

- 存储结构红黑树

  方式一

  ```java
  // 要继承Comparable接口
  public class Student implements Comparable<Student> {
      String name;
      int age;

      public Student(int age, String name) {
          this.age = age;
          this.name = name;
      }

      @Override
      public String toString() {
          return "Student{" +
                  "name='" + name + '\'' +
                  ", age=" + age +
                  '}';
      }

      // 必须重写compareTo方法，否则无法实现对象的添加，会报错
      @Override
      public int compareTo(Student o) {
          int n1 = this.name.compareTo(o.name);
          int n2 = this.age - o.age;
          return n1 != 0 ? n1 : n2;
      }
  }

  // TreeSet的使用
  import java.util.Iterator;
  import java.util.TreeSet;

  public class TreeSetStu {
      public static void main(String[] args) {
          TreeSet<Student> treeSet = new TreeSet<>();

          Student s1 = new Student(50, "张三");
          Student s2 = new Student(21, "李四");
          Student s3 = new Student(23, "王五");

          // 添加
          treeSet.add(s1);
          treeSet.add(s2);
          treeSet.add(s3);
          System.out.println(treeSet.toString());

          // 删除
          treeSet.remove(s1);
          System.out.println(treeSet.toString());

          // 遍历
          for (Student student : treeSet) {
              System.out.println(student);
          }

          Iterator<Student> iterator = treeSet.iterator();
          while (iterator.hasNext()) {
              Student student = iterator.next();
              System.out.println(student);
          }

          // 判断
          System.out.println(treeSet.isEmpty()); // false
          System.out.println(treeSet.contains(s2)); // true
      }
  }

  ```

  方式二

  ```java
  // 在使用集合的时候使用匿名内部类去实现
  TreeSet<Student> treeSet = new TreeSet<>(new Comparator<Student>() {
      @Override
      public int compare(Student o1, Student o2) {
          int n1 = o1.name.compareTo(o2.name);
          int n2 = o1.age - o2.age;
          return n2 == 0 ? n1 : n2;
      }
  });
  ```

## 6、map 集合

存储一对数据，无序、无下标、键不可重复，值可重复

- 如果 key 重复，那么后面的 key 的 Value 会替换掉前面 key 的 Value，只保存一对键值对

![map集合](/java/Map.png)

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapStu {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();

        // 增加
        map.put("张三", "男");
        map.put("小红", "女");
        map.put("小明", "男");
        map.put("小明", "未知"); // 由于 小明 重复了，所以会替换掉原有的小明键值对
        System.out.println(map); // {张三=男, 小明=未知, 小红=女}

        // 删除
        map.remove("小明");
        System.out.println(map); // {张三=男, 小红=女}

        // 读取
        String sex = map.get("张三");
        System.out.println(sex);

        // 遍历
       	// 方式一：Set
        Set<String> keys = map.keySet();
        for (String key : keys) {
            System.out.println(key + ":" + map.get(key));
        }

        // 方式二：Entry
        Set<Map.Entry<String, String>> entries = map.entrySet();
        for (Map.Entry<String, String> entry : entries) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }
        // 方式三：forEach 基于JDK8
        map.forEach((key, value) -> {
            System.out.println(key + ":" + value);
        });
        // 判断
        Boolean b1 = map.containsKey("小明");
        Boolean b2 = map.containsValue("男");
        System.out.println(b1);
        System.out.println(b2);
    }
}
```

### HashMap

- `JDK1.2`版本，线程不安全，运行效率快，允许`null`作为`key`或者`value`

- 存储结构：哈希表（数组+链表+红黑树）

  ```java
  import java.util.HashMap;
  import java.util.Map;
  import java.util.Set;

  public class HashMapStu {
    public static void main(String[] args) {
          HashMap<MapStudet, Integer> map = new HashMap<>();

          MapStudet s1 = new MapStudet(12, "张三");
        MapStudet s2 = new MapStudet(23, "李四");
          MapStudet s3 = new MapStudet(32, "王五");

          // 增加
        map.put(s1, 1);
          map.put(s2, 2);
          map.put(s3, 3);
          // {MapStudet{age=23, name='李四'}=2, MapStudet{age=12, name='张三'}=1, MapStudet{age=32, name='王五'}=3}
          System.out.println(map);

          // 获取
        int i = map.get(s1);
          System.out.println(i); // 1

          // 遍历
        Set<MapStudet> keys = map.keySet();
          for (MapStudet key : keys) {
              System.out.println(key + ":" + map.get(key)); // MapStudet{age=23, name='李四'}:2
          }

          Set<Map.Entry<MapStudet, Integer>> ebtries = map.entrySet();
        for (Map.Entry<MapStudet, Integer> entry : ebtries) {
              // MapStudet{age=23, name='李四'}:2
              System.out.println(entry.getKey() + ":" + entry.getValue());
          }

          // 判断
        Boolean b1 = map.containsKey(s1);
          Boolean b2 = map.containsValue(2);
          System.out.println(b1); // true
          System.out.println(b2); // true
      }
  }
  ```

### Hashtable（已弃用）

- `JDK1.0`版本，线程安全，运行效率慢，不允许`null`作为`key`或者`value`

### Properties

- `Hashtable`的子类，要求`key`和`value`都是`String`。通常用于配置文件的读取

### TreeMap

- 实现了`SortedMap`接口（是 Map 的子接口），可以对`key`自动排序

* 元素对象的类型必须实现`Comparable`接口，指定排序规则

  ```java
  import java.util.Comparator;
  import java.util.Map;
  import java.util.Set;
  import java.util.TreeMap;

  public class TreeMapStu {
      public static void main(String[] args) {
          // 在这里写定制比较，或者类里面重写compareTo
          TreeMap<Student, Integer> treeMap = new TreeMap(new Comparator<Student>() {
              @Override
              public int compare(Student o1, Student o2) {
                  int n1 = o1.name.compareTo(o2.name);
                  int n2 = o1.age - o2.age;
                  return n2 == 0 ? n1 : n2;
              }
          });

          Student s1 = new Student(50, "张三");
          Student s2 = new Student(21, "李四");
          Student s3 = new Student(23, "王五");

          // 添加
          treeMap.put(s1, 2);
          treeMap.put(s2, 5);
          treeMap.put(s3, 9);
          System.out.println(treeMap.toString());

          // 删除
          treeMap.remove(s1);
          System.out.println(treeMap.toString());

          // 遍历
          Set<Student> keys = treeMap.keySet();
          for (Student key : keys) {
              System.out.println(key + ":" + treeMap.get(key));
          }

          Set<Map.Entry<Student, Integer>> entries = treeMap.entrySet();
          for (Map.Entry<Student, Integer> entry : entries) {
              System.out.println(entry.getKey() + ":" + entry.getValue());
          }

          // 判断
          Boolean b1 = treeMap.containsKey(s2);
          Boolean b2 = treeMap.containsValue(2);
          System.out.println(b1); // true
          System.out.println(b2); // false
      }
  }
  ```

## 7、Collections 工具类

- 集合工具类，定义了除了存取以外的集合常用方法

```java
// 基本的list，后续的操作都是基于这个list
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(90);
list.add(23);
list.add(31);
```

### reverse

- 反转元素的顺序

  ```java
  Collections.reverse(list);
  System.out.println(list); // [90, 31, 23, 2, 1]
  ```

### shuffle

- 随机重置集合元素的顺序（每次返回的顺序都不一样）

  ```java
  Collections.shuffle(list);
  System.out.println(list); // [90, 31, 1, 23, 2]
  ```

### sort

- 升序排列（元素类型必须实现`Compaeable`接口）

  ```java
  System.out.println("排序之前：" + list); // [1, 2, 90, 23, 31]
  Collections.sort(list);
  System.out.println("排序之后：" + list); // [1, 2, 23, 31, 90]
  ```

### binarySearch

- 查找对应的索引

- 如果返回负数则代表没有查找到，若返回 `-3`，表示元素应插入到索引 `2` 处（因为 `-(-3 + 1) = 2`）

  ```java
  int i = Collections.binarySearch(list, 23);
  System.out.println(i); // 2
  ```

### copy

- 复制数组

  ```java
  ArrayList<Integer> list2 = new ArrayList<>();
  // 应为数组的长度是固定的，直接复制会报错
  for (int j = 0; j < list.size(); j++) {
      list2.add(0);
  }
  Collections.copy(list2, list);
  System.out.println(list2); // [1, 2, 23, 31, 90]
  ```

### 集合转数组

```java
// Integer中的数字，如果大于list的长度，那么超出部分都是null，如果小于，那么长度就是list的长度
Integer[] arr = list.toArray(new Integer[0]);
System.out.println(Arrays.toString(arr)); // [90, 31, 23, 2, 1]
System.out.println(arr.length); // 5
```

### 数组转集合

```java
String[] arrs = {"张三", "李四"};
// 转换后的集合是一个受限集合，不能增加或删除
List<String> list3 = Arrays.asList(arrs);
System.out.println(list3); // [张三, 李四]
```
