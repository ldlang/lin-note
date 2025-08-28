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

## Collection

`Collection`是一个接口所以不能实例化，但是可实例化他的子级`class`

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
