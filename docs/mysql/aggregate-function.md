---
sidebar: auto
---

# 聚合函数

对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。

## 常见聚合函数

### AVG

求**平均数**，得到一个值。

1. 平均值函数会自动过滤 NULL 值，也就是数假如有 20 条数据，其中一条是 NULL，那么 AVG 得到的数据则是所有 数据总和 / 19，而不是数据总和 / 总条数。
2. 只能用于数值的计算，在mysql如果是查询字符型，得到的结果是0

```sql
# 查询工资平局值
SELECT AVG(salary) FROM employees;
```

### sum

求**总额**，得到一个值。

1. 总和函数会自动过滤 NULL 值
2. 只能用于数值的计算，在mysql如果是查询字符型，得到的结果是0。

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

1. 在计算个数时，是不会计算NULL值的，因此处理同一个字段 AVG = SUM / COUNT
2. 如果COUNT，并没有指定表中的某一个字段，而是 `1`,`*` 什么的，那么得到的就是该表的总条数

```sql
SELECT COUNT(*) FROM employees

# 具体字段
SELECT COUNT(salary) FROM employees 
```

