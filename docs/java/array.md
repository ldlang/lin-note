# 数组

## 1、数组的特性

1. 数组有length属性，代表数组里有多少个属性

   > array.length

2. 数组的索引是从0开始的

3. 数组的长度是确定的一旦被创建，它的大小就是不可以改变的

4. 数组中所有的元素类型必须相同，不允许出现混合类型

5. 数组中的元素可以是任何数据类型，包括基本数据类型和引用数据类型

6. 数组变量属引用类型，数组也可以看成是对象，数组中的每个元素相当于该对象的成员变量。数组本身就是对象，Java中对象是在堆中的，因此数组无论保存原始类型还是其他对象类型，数组对象本身是在堆中的。

7. 数组是引用类型，它的元素相当于类的实例变量，因此数组一经分配空间，其中的每个元素也被按照实例变量同样的方式被隐式初始化。

   > 如果动态初始化，在初始化的时候，每一项都是该类型的默认值，如int[]，则在没对每一项赋值之前，每一项都是默认值0

8. 

## 2、数组的声明与创建

1. 声明数组

   ```java
   // 声明一个数组，nums
   int[] nums;
   
   // 历史遗留，不建议
   int str[];
   ```

2. 数组的创建（语法）

   ```java
   // 数据类型[]  变量名 = new 数据类型[数组长度]
   
   // 为nums开辟了两个空间，并不是第一项为2
   int[] nums = new int[2];
   
   // 给第0项赋值为1，未赋值的项则是该类型数据的默认值
   num[0] = 99;
   
   System.out.println(num[0]);//99 
   System.out.println(num[0]);//0 未对第一项赋值所以是int类型的默认值0 
   ```

## 3、数组的三种初始化

1. 静态初始化

   ```java
   int[] nums  = {1,2,3,4,5};
   ```

2. 动态初始化

   ```java
   int[] nums1 = new int[10];
   nums1[0] = 1;
   ```

3. 数组的默认初始化

   数组是引用类型，它的元素相当于类的实例变量，因此数组一经分配空间，其中的每个元素也被按照实例变量同样的方式被隐式初始化。

## 4、数组的使用

1. for-Each循环

   ```java
   // 增强for循环，jdk1.5之后才有的
   int[] nums = {1,2,3,4,5,6};
   
   // nums是数组，num就是数组的每一项
   for (int num : nums) {
       System.out.println(num);
   }
   ```

2. 数组作为参数和返回值例子

   ```java
   public static void main(String[] args) {
       int[] nums = {1,2,3,4,5,6};
   
       for (int num : nums) {
           System.out.println(num);
       }
       System.out.println(Arrays.toString(revers(nums)));
   }
   
   // 反转数组
   public static int[] revers(int[] arr){
       int[] nums = new int[arr.length];
       for (int i = 0; i < arr.length; i++) {
           nums[arr.length - i - 1] = arr[i];
       }
       return nums;
   }
   // 反转数组
   public static int[] revers(int[] arr){
       int[] nums = new int[arr.length];
       for (int i = 0, j = nums.length-1; i < arr.length; i++,j--) {
           nums[j] = arr[i];
       }
       return nums;
   }
   ```

## 5、多维数组

1. 二维数组

   ```java
   int[][] nums = {{1,2},{2,3}};
   
   System.out.println(nums[1][1]); // 3
   ```

## 6、Arrays类

1. 数组工具中的`java.util.Arrays`

2. 由于数组对象本身并没有什么方法可以供我们调用，但API中提供了一个工具类Arrays供我们使用，从而可以对数据对象进行一些基本的操作。

3. Arrays类中的方法都是static修饰的静态方法，在使用的时候可以直接使用类名进行调用，而”不用”使用对象来调用（注意：是”不用”而不是“不能”)

4. 常用方法

   * 给数组赋值：通过fill方法。

     > ```java
     > int[] nums = {2,2,3,8,9,6};
     > 
     > Arrays.fill(nums,2,5,0);
     > System.out.println(Arrays.toString(nums));// [2, 2, 0, 0, 0, 6]
     > 
     > // 或者
     > Arrays.fill(nums,99);
     > System.out.println(Arrays.toString(nums));
     > // [99, 99, 99, 99, 99, 99]
     > ```

   * 对数组排序：通过sort方法，按升序。

     > ```java
     > int[] nums = {2,2,3,8,9,6};
     > Arrays.sort(nums);
     > System.out.println(Arrays.toString(nums));
     > ```

   * 比较数组：通过equals方法比较数组中元素值是否相等。

     > ```java
     > int[] nums = {2,2,3,8,9,6};
     > int[] nums1 = {2,2,3,8,9,6};
     > System.out.println(Arrays.equals(nums, nums1)); // true
     > ```

   * 查找数组元素：通过binarySearch方法能对排序好的数组进行二分查找法操作。