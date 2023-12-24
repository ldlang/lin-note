---
sidebar: auto
---

# 聚合函数

对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。

## 1、常见聚合函数

### AVG

求**平均数**，得到一个值。

1. 平均值函数会自动过滤 NULL 值，也就是数假如有 20 条数据，其中一条是 NULL，那么 AVG 得到的数据则是所有 数据总和 / 19，而不是数据总和 / 总条数。
2. 只能用于数值的计算，在 mysql 如果是查询字符型，得到的结果是 0

```sql
# 查询工资平局值
SELECT AVG(salary) FROM employees;
```

### sum

求**总额**，得到一个值。

1. 总和函数会自动过滤 NULL 值
2. 只能用于数值的计算，在 mysql 如果是查询字符型，得到的结果是 0。

```sql
# 查询工资总和
SELECT SUM(salary) FROM employees;
```

### MAX 和 MIN

求**最大**和**最小**值

1. 如果是数值类型，则求出最大最小值。
2. 如果是字符串类型，最大值就是升序排列的最后一个，最小值就是升序排列的第一个。

```sql
SELECT MAX(last_name), MIN(last_name), MAX(salary), MIN(salary) FROM employees;
```

### COUNT

计算指定字段在查询结构中出现的格式

1. 在计算个数时，是不会计算 NULL 值的，因此处理同一个字段 AVG = SUM / COUNT
2. 如果 COUNT，并没有指定表中的某一个字段，而是 `1`,`*` 什么的，那么得到的就是该表的总条数

```sql
SELECT COUNT(*) FROM employees

# 具体字段
SELECT COUNT(salary) FROM employees
```

## 2、GROUP BY

### 单列分组查询。

例子：按 department_id 查询每个部门的平均工资的总工资。

```sql
SELECT department_id, AVG(salary), SUM(salary)
FROM employees
GROUP BY department_id;
```

### 多列分组查询

只需要在 GROUP BY 后面再加一个字段即可，查询结果并不会改变，单列的结果一致。

```sql
SELECT department_id,job_id, AVG(salary), SUM(salary)
FROM employees
GROUP BY department_id,job_id;
```

### WITH ROLLUP

比如说，对每个分组的部门加上了查平均工资，再加上 WITH ROLLUP，就会多出来一条记录，对所有的人进行求平均工资。

```sql
SELECT department_id,job_id, AVG(salary), SUM(salary)
FROM employees
GROUP BY department_id,job_id WITH ROLLUP;
```

### 注意

1. SELECT 中出现的非组函数的字段必须声明在`GROUP BY`中，而在`GROUP BY`中出现的字段可以不出现在 SELECT 中。
2. `GROUP BY`声明在`FROM`和`WHERE`的后面，声明在`ORDER BY`和`LIMIT`的前。
3. 使用了`WITH ROLLUP`就不能再使用`ORDER BY`

## 3、HAVING 过滤查询

用来过滤数据的，可以理解为`WHERE`，但是有一些局限性。

使用：

1. 当使用过滤条件中有聚合函数时，聚合函数的过滤条件必须声明在`HAVING`中。
2. 当过滤条件没有使用聚合函数时，过滤条件可以在`WHERE`和`HAVING`任意位置使用，但是非聚合函数的过滤条件在`WHERE`中的执行效率更高。

例：分组查询 deparment_id 的最高工资，并且 deparment_id 是 10，20，30 的，并且最高工资要大于 10000 的。

方式一：除了聚合函数的过滤条件都写在`WHERE`中

```sql
SELECT department_id,MAX(salary) FROM employees
WHERE  department_id IN (10,20,30)
GROUP BY department_id
HAVING MAX(salary) > 10000;
```

方式二：过滤条件都写在`HAVING`中

```sql
SELECT department_id,MAX(salary) FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000
AND department_id IN (10,20,30)
```

|        | 优点                         | 缺点                                   |
| ------ | ---------------------------- | -------------------------------------- |
| WHERE  | 先筛选数据再关联，执行效率高 | 不能使用分组中的计算函数进行筛选       |
| HAVING | 可以使用分组中的计算函数     | 在最后的结果集中进行筛选，执行效率较低 |

## 4、SELECT 的执行过程

### 查询的结构

```sql
#方式1：
SELECT ...,....,...
FROM ...,...,....
WHERE 多表的连接条件
AND 不包含组函数的过滤条件
GROUP BY ...,...
HAVING 包含组函数的过滤条件
ORDER BY ... ASC/DESC
LIMIT ...,...

#方式2：
SELECT ...,....,...
FROM ... JOIN ...
ON 多表的连接条件
JOIN ...
ON ...
WHERE 不包含组函数的过滤条件
AND/OR 不包含组函数的过滤条件
GROUP BY ...,...
HAVING 包含组函数的过滤条件
ORDER BY ... ASC/DESC
LIMIT ...,...

#其中：
#（1）from：从哪些表中筛选
#（2）on：关联多表查询时，去除笛卡尔积
#（3）where：从表中筛选的条件
#（4）group by：分组依据
#（5）having：在统计结果中再次筛选
#（6）order by：排序
#（7）limit：分页
```

### SELECT 执行顺序

1. 关键字的顺序是不能颠倒的

   ```sql
   SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...
   ```

2. SELECT 语句的执行顺序\*\*（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）

   ```sql
   FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT
   ```

   比如你写了一个 SQL 语句，那么它的关键字顺序和执行顺序是下面这样的：

   ```sql
   SELECT DISTINCT player_id, player_name, count(*) as num # 顺序 5
   FROM player JOIN team ON player.team_id = team.team_id # 顺序 1
   WHERE height > 1.80 # 顺序 2
   GROUP BY player.team_id # 顺序 3
   HAVING num > 2 # 顺序 4
   ORDER BY num DESC # 顺序 6
   LIMIT 2 # 顺序 7
   ```

3. 在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个`虚拟表`，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的。
