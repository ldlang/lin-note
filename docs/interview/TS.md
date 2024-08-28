---
sidebar: auto
---

# TS 面试题

## 1、TS 中的高级类型有哪些？

1. 交叉类型：`&`，多个类型**合并**为一个
2. 联合类型：`|`，多组类型满足其中一个即可
3. 类型别名：`type`
4. 类型索引：`keyof` ，取出所有的 key 组成联合类型）
5. 类型约束：`extends`，不是继承是约束
6. 类型映射：`in` 循环
7. 条件类型：`extends...? :` 三元运算符

## 2、枚举及枚举的分类

1. 数字枚举

   ```typescript
   enum color {
     red, // 0
     green, // 1
   }

   enum color {
     red, // 0
     green, // 1
     blue = 5,
     yellow, // 6
     purple = 10,
     white, // 11
   }
   ```

2. 字符串枚举

   如果其中一个枚举值设为了字符串，那么后续的也要赋值，除非后续某一个复制了数字；

   ```typescript
   enum color {
     red = "red",
     green = "green",
   }

   enum color {
     red = "red",
     green = "green",
     blue = 5,
     yellow, // yellow不需要赋值
   }
   ```

3. 异构枚举

   ```typescript
   enum color {
     red = "red",
     green = "green",
     blue = 5,
   }
   ```
