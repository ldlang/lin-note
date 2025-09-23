---
sidebar: auto
---

# 多表查询

## 1、实现多表查询

1. 笛卡尔积的错误

   产生的原因：缺少了多表的连接条件，就会产生一张表的每一条记录，与另一张表的所有记录都匹配一次进行查询，最后得到的结果就是两张表数量的乘积。

   解决方式：在 WHERE 后在指定两张表的连接条件。

   ```sql
   # 会出现笛卡尔积的查询
   SELECT employee_id, department_name FROM employees, departments;
   ```

2. 指定两张表的连接条件，防止笛卡尔积

   语法：

   ```sql
   SELECT 字段1, 字段2 FROM 表1, 表2 WHERE 表1.字段1 = 表2.字段2;
   ```

   查询 employees 表的 employee_id 和 departments 表的 department_name，并指定连接关系

   ```sql
   SELECT employee_id, department_name FROM employees, departments
   WHERE employees.department_id = departments.department_id;
   ```

3. 如果一个字段名只在一张表中出现，是可以不用指定从那张表中查询的，但是如果同意这字段名在两张或者多张表中出现，那么就要指定从那张表中查询，为了 sql 的查询速度优化，最好每个字段都指定时从那张表来的。

   两张表连接查询语法：

   ```sql
   SELECT 表1.字段1, 表1.字段2, 表2.字段3
   FROM 表1, 表2
   WHERE 表1.字段1 = 表2.字段3
   ```

   多张表连接查询语法：

   ```sql
   SELECT 表1.字段1, 表1.字段2, 表2.字段3, 表3.字段4
   FROM 表1, 表2, 表3
   WHERE 表1.字段1 = 表2.字段3
   AND 表2.字段3 = 表3.字段4
   ```

   查询 employees 表的 employee_id、salary 和 departments 表的 department_name，并指定连接关系

   ```sql
   SELECT employees.employee_id, departments.department_name , employees.salary
   FROM employees, departments
   WHERE employees.department_id = departments.department_id;
   ```

   查询 employees 表的 employee_id、salary 、 departments 表的 department_name 和 locations 表的 locations_id，并指定连接关系。

   ```sql
   SELECT e.employee_id, d.department_name , e.salary, l.city
   FROM employees e, departments d,locations l
   WHERE e.department_id = d.department_id
   AND d.location_id = l.location_id;

   # 使用 JOIN...ON...的方式
   SELECT e.first_name, d.department_name, j.city
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   JOIN locations j
   ON d.location_id = j.location_id
   ```

4. 表示可以设置别名的，在 FROM 的表名后面接上别名即可，但是一旦给某张表齐了别名，name 所有用到这张表的地方都要使用这张表的别名。

   语法：

   ```sql
   SELECT 别名1.字段1, 别名2.字段2 , 别名1.字段3
   FROM 表名1 别名1, 表名2 别名2
   WHERE 别名1.字段1 = 别名2.字段3;
   ```

   使用别名查询 employees 表的 employee_id、salary 和 departments 表的 department_name，并指定连接关系

   ```sql
   SELECT t1.employee_id, t2.department_name, t1.salary
   FROM employees t1, departments t2
   WHERE t1.department_id = t2.department_id;
   ```

5. 如果有 n 张表进行连接查询，那么只是有 n-1 个连接条件。

## 2、多表查询的分类

### 等值连接和非等值连接

- 等值连接

  就是在 WHERE 的条件后面通过字段与字段直接 = 的方式查询

  语法：

  ```sql
  SELECT 字段1, 字段2 FROM 表1, 表2 WHERE 表1.字段1 = 表2.字段2;
  ```

- 非等值连接

  就是在 WHERE 的条件后面通过不是 = 的方式查询，比如 >= 、BETWEEN... AND...

  查询 employees 的 salary 在 job_grades 表中属于的工资等级。

  ```sql
  SELECT e.salary, e.first_name, j.grade_level
  FROM employees e,job_grades j
  WHERE e.salary
  BETWEEN j.lowest_sal AND j.highest_sal;
  ```

### 自连接和 非自连接

- 自连接就是在将一张表认为是两张表进行条件查询

  注意：自连接一定要指定每个字段是从那种表来的

  查询 employees 表中 first_name，manager_id 和他管理者的 first_name 和 employee_id

  ```sql
  SELECT e1.first_name, e1.manager_id, e2.first_name, e2.employee_id
  FROM employees e1,employees e2
  WHERE e1.manager_id = e2.employee_id
  ```

- 非自连接就是，不是从同一张表去连接查询

### 内连接和外连接

1. 内连接

   合并具有同一列的两个以上的表的行，结果集中不包含一个表与另一个表不匹配的行，就是在有两张表等于的条件下查询其他字段。

   ```sql
   # 必有 where...  ＝ 的条件基础下，对表进行查询
   SELECT e.first_name, d.department_name
   FROM employees e,departments d
   WHERE e.department_id = d.department_id
   ```

   使用`JOIN...ON...`的方式实现两张表的内连接

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   ```

   使用`JOIN...ON...`的方式实现多张表的内连接

   ```sql
   SELECT e.first_name, d.department_name, j.city
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   JOIN locations j
   ON d.location_id = j.location_id
   ```

2. 外连接

   合并具有同一列的两个以上的表的行，结果集中除了包含一个表与另一个表匹配的行之二外，还查询到了左表和右边中不匹配的行。

### 外连接的分类

在`mysql`中使用`JOIN...ON...`实现，`JOIN...ON...`不仅仅是能解决外连接，也能实现其他的多表查询。

1. 左外连接

   两个表在连接过程中除了返回满足连接条件的行以外还返回了左表中不满足条件的行

   `LEFT JOIN...ON...`，除了查询到所有满足条件的记录，还查询了左表(employees)不满足条件的记录

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   ```

2. 右外连接

   两个表在连接过程中除了返回满足连接条件的行以外还返回了右表中不满足条件的行

   `RIGHT JOIN...ON...`，除了查询到所有满足条件的记录，还查询了右表(departments)不满足条件的记录

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   ```

3. 满连接 或 全连接

   在 sql 的语法中是使用 `FULL JOIN...ON...`实现，但是`mysql`**不支持**，在`mysql`就得借助`UNION`实现

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e FULL JOIN departments d
   ON e.department_id = d.department_id
   ```

### UNION

1. `UNION`操作符返回两个查询的结果集的并集，去除重复记录。
2. `UNION ALL`操作符返回两个查询的结果集的并集，不去除重复记录。

注意：执行`UNION ALL`语句时，所需要的资源比`UNION`语句少，如果明确的指导合并数据后的结果不存在重复的数据，获取不需要去重，则尽量使用`UNION ALL`提高数据查询的效率

### JION 的 7 中情况查询

![image](/mysql/JOIN.png)

1. 第 1 部分：左外连接

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   ```

2. 第 2 部分：右外连接

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   ```

3. 第 3 部分：内连接

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   ```

4. 第 4 部分：

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL;
   ```

5. 第 5 部分：

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL;
   ```

6. 第 6 部分：满连接

   第 1 部分和第 5 部分组合起来，或者第 2 部分和第 4 部分组合起来就是满连接

   ```sql
   # 第1部分和第5部分组合起来
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   UNION ALL
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL;

   # 第2部分和第2部分组合起来
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   UNION ALL
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL;
   ```

7. 第 7 部分：

   第 4 部分和第 5 部分组合起来就是第 7 部分

   ```sql
   SELECT e.first_name, d.department_name
   FROM employees e LEFT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL
   UNION ALL
   SELECT e.first_name, d.department_name
   FROM employees e RIGHT JOIN departments d
   ON e.department_id = d.department_id
   WHERE e.department_id IS NULL;
   ```
