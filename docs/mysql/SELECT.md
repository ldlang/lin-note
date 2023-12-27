---
sidebar: auto
---

# select 语句

## SELECT... FROM...

- 查询一张表的所有字段

  语法：

  ```sql
  SELECT * FROM 表名;
  ```

  查询 emp 表的所有字段：

  ```sql
  SELECT * FROM emp;
  ```

- 查询一张表指定的字段

  语法：字段名之间用`,`隔开，最后一个字段不要`,`后

  ```sql
  SELECT 字段名, 字段名 FROM 表名;
  ```

  查询 emp 表的 id，name，sex 字段

  ```sql
  SELECT id, name, sex FROM emp;
  ```

## 列的别名

- 方式一

  直接查询字段后面跟别名

  语法：

  ```sql
  SELECT 字段名 别名, 字段名 别名 FROM 表名;
  ```

  查询 emp 表的 id 和 name 字段，并进行重命名

  ```sql
  SELECT id emp_id, name first_name FROM emp;
  ```

- 方式二 AS 关键字

  语法：

  ```sql
  SELECT 字段名 AS 别名, 字段名 AS 别名 FROM 表名;
  ```

  查询 emp 表的 id 和 name 字段，并进行重命名

  ```sql
  SELECT id AS emp_id, name AS first_name FROM emp;
  ```

- 方式三 通过`""`将别名包起来（推荐使用）

  语法：

  ```sql
  SELECT 字段名 "别名", 字段名 "别名" FROM 表名;
  ```

  查询 emp 表的 id 和 name 字段，并进行重命名

  ```sql
  SELECT id "emp_id", name "first_name" FROM emp;
  ```

## DISTINCT 去除重复行

语法：

```sql
SELECT DISTINCT 字段名 FROM 表名;
```

查询 emp 表的 age 字段，并去除重复的

```sql
SELECT DISTINCT age FROM emp;
```

**注意**：DISTINCT 查询是最好只查询一个字段，如果 DISTINCT 有查询的字段那么会报错，如果后面查询了不止一个字段，那么查出来的也没有什么意义

## NULL 值

1. null 值不等同于 0、""、"null"
2. null 如果参与了运算那么值也是 null

## `` 着重号

使用场景，如果一张表的表名是 sql 中的关键字，那么就用``将表名包裹起来，就可以了

假如现在有一张表的表名是 select，与关键字重名了，那么就必需要用``将其包裹

```sql
SELECT * FROM `select`;
```

## 查询常数

语法：常数可以放任意位置

```sql
SELECT 常数，字段名 FROM 表名;
```

查询 emp 表的 id，name 字段，并添加两列常数

```sql
SELECT '林达浪', id, name, 'lin' FROM emp;
```

## DESCRIBE 或 DESE 查询表结构

语法：

```sql
DESC 表名;
DESCRIBE 表名;
```

## WHERE 条件查询

语法：

```sql
SELECT 字段名 FROM 表名 WHERE 条件;
```

查询 emp 表中工资大于 5000 的所有字段：

```sql
SELECT * FROM emp WHERE salary > 5000;
```

注意：WHERE 必须跟在 FORM 的后面
