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

### 5、set 集合

- 无须、无下标，元素不可重复
- 方法：全部继承自 Collection 中的方法，没有自己独有的方法
