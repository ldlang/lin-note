---
sidebar: auto
---

# 多表查询

## 实现多表查询

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

   多张张表连接查询语法：

   ```sql
   SELECT 表1.字段1, 表1.字段2, 表2.字段3, 表3.字段4
   FROM 表1, 表2
   WHERE 表1.字段1 = 表2.字段3
   AND 表2.字段3 = 表3.字段4
   ```

   查询 employees 表的 employee_id、salary 和 departments 表的 department_name，并指定连接关系

   ```sql
   SELECT employees.employee_id, departments.department_name , employees.salary
   FROM employees, departments
   WHERE employees.department_id = departments.department_id;
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

## 多表查询的分类

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
