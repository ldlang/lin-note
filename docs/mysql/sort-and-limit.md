---
sidebar: auto
---

# 排序和分页

## 排序

1. 语法： ASC 升序（默认值可以不写）， DESC 降序

   ```sql
   SELECT 字段 FROM 表名 ORDER BY 字段 ASC;
   ```

2. ORDER BY 中可以使用字段的别名，因为 SELECT 执行的顺序中 ORDER BY 在 SELECT 之后执行。

   SELECT 的执行基本顺序

   1. 先执行 FROM 看从那张表查询
   2. 再执行 WHERE 过滤掉不符合条件的
   3. 再执行 SELECT 查看需要的字段，此时才可以声明别名
   4. 最后执行 ORDER BY。

3. 多列排序，先满足第一列排序的条件，再满足第二列排序的条件，以此类推。

   ```sql
   SELECT 字段 FROM 表名 ORDER BY 字段一 ASC, 字段二 DESC;

   # 字段一后面没有写升序还是降序，则默认为升序排列。
   SELECT 字段 FROM 表名 ORDER BY 字段一, 字段二 DESC;
   ```

## 分页

1. 语法

   ```sql
   SELECT 字段 FROM 表名 LIMIT 偏移量（页码）, 条目数（每页多少条）;
   ```

2. 查询第一页的 10 条数据

   ```sql
   SELECT 字段 FROM 表名 LIMIT 0,10;

   # 等价于
   SELECT 字段 FROM 表名 LIMIT 10;
   ```

3. 如果要依次查询第一页 10 条，第二页 10 条.... 的公式

   ```sql
   SELECT 字段 FROM 表名 LIMIT （页码 - 1）* 条目数, 条目数

   例，查询第五页的10条数据
   SELECT 字段 FROM 表名 LIMIT （5 - 1）* 10, 10;
   ```

4. 其实偏移量就是要从第几条数据 - 1 条数据开始查询，条目数就是要查几条数据，因为偏移量是从 0 开始的，第 0 条其实就是第一条数据。

   比如说要查询第 15 条数据后面的 3 条数据

   ```sql
   SELECT * FROM LIMIT (15 - 1 ) , 3;
   ```

5. 书写的顺序，LIMIT 必须放置语句的最后
   SELECT => FROM => WHERE => ORDER BY => LIMIT

6. mysql 8.0 的语法

   ```sql
   SELECT 字段 FROM LIMIT 条目数 OFFSET 偏移量（页码）;
   ```
