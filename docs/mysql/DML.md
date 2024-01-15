---
sidebar: auto
---

# DML 增删改

DML 操作默认情况下，执行完以后会自动提交数据，如果希望执行完以后不自动提交数据，需要先设置`SET autocommit = FALSE`执行完 DML 语句后在执行`COMMIT`

## 增加数据

语法：

```sql
INSERT INTO 表名(字段名1, 字段名2, ...) VALUES(字段1的值, 字段2的值, ...)
```

> 关键字 VALUES 也能写为 VALUE，但是不规范，推荐使用 VALUES

### 1、增加一条数据

1. 方式一（不推荐）

   每个字段值必须和要插入表的字段顺序一致

   ```sql
   INSERT INTO emp VALUES (字段1的值, 字段2的值, ....);
   ```

   例：往 emp 表中分别增加 id，name，date，salary 的值，值分别为 1, '张三', '2024-01-15', 1000

   ```sql
   INSERT INTO emp VALUES (5, '张三', '2024-01-15', 1000)
   ```

2. 方式二（推荐）

   指明每个字段的要插入的值，和表字段的无关，只要和前面声明的位置匹配即可。

   ```sql
   INSERT INTO 表名(字段名1, 字段名2, ...) VALUES(字段1的值, 字段2的值, ...)
   ```

   例：往 emp 表中分别增加 id，name，date，salary 的值，值分别为 1, '张三', '2024-01-15', 1000

   ```sql
   INSERT INTO emp(id, `name`, `date`, salary) VALUES(2, '张三', '2024-01-15', 1000)
   ```

### 2、同时增加多条数据

语法：

```sql
INSERT INTO 表名(字段名1, 字段名2, ...)
VALUES
(字段1的值, 字段2的值, ...),
(字段1的值, 字段2的值, ...),
(字段1的值, 字段2的值, ...),
...
```

例：

```sql
INSERT INTO emp(id, `name`, `date`, salary)
VALUES
(7, '张三', '2024-01-15', 1000),
(8, '张三', '2024-01-15', 1000),
(9, '张三', '2024-01-15', 1000)
```

### 3、将查询结构添加到表中

语法：

```sql
INSERT INTO 增加表的表名(字段1, 字段2, ...)
SELECT 字段1, 字段2, ...
FROM 查询表的表名
```

要查询出来的字段位置要和插入的字段位置一致，就是说查询出来的第一个字段会增加到要添加的第一个字段中

例：

```sql
INSERT INTO emp(id, `name`, `date`, salary)
SELECT employee_id, last_name, hire_date, salary
FROM employees
WHERE department_id IN (20, 30)
```

## 修改数据

语法：

```sql
UPDATE 表名 SET 字段1 = 值, 字段2 = 值,... WHERE 条件
```

> 注意：如果没有指定条件，那么会将表中修改字段的所有值都会改掉

例 1：修改 id 为 5 记录的 name 和 salary

```sql
UPDATE emp
SET `name` = '李四', salary = '5000'
WHERE id = 5;
```

例 2：修改 name 中包含**a**的 name 和 salary

```sql
UPDATE emp SET `name` = '李四', salary = '5000'
WHERE `name` LIKE '%a%';
```

## 删除数据

语法：

```sql
DELETE FROM 表名 WHERE 条件
```

> 注意：如果没有指定表名，那么将情况整张表

例：删除 name 中有`三`的记录

```sql
DELETE FROM emp WHERE name LIKE '%三%'
```
