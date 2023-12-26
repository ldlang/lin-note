---
sidebar: auto
---

# 子查询

子查询指一个查询语句嵌套在另一个查询语句内部的查询，一个查询语句的结果被另一条查询语句所使用。

- 子查询（内查询）在主查询之前一次执行完成。

- 子查询的结果被主查询（外查询）使用 。

  **注意：**

  - 子查询要包含在括号内
  - 将子查询放在比较条件的右侧
  - 单行操作符对应单行子查询，多行操作符对应多行子查询

例：查询工资比 Abel高的人的姓名和工资。

* 方式一

  ```sql
  # 先查询 Abel 的工资，结果为 11000
  SELECT salary FROM employees WHERE last_name = 'Abel' 
  
  # 在查询工资比 11000 高的人
  SELECT last_name, salary FROM employees WHERE salary > 11000
  ```

* 方式二

  ```sql
  # 自连接
  SELECT e2.last_name,e2.salary
  FROM employees e1,employees e2
  WHERE e1.last_name = 'Abel'
  AND e1.`salary` < e2.`salary`
  ```

* 方式三

  ```sql
  # 子查询
  SELECT last_name,salary
  FROM employees
  WHERE salary > (
  		SELECT salary
  		FROM employees
  		WHERE last_name = 'Abel'
  		);
  ```

## 子查询的分类

分类方式一：按内查询的结果返回一条还是多条记录，将子查询分为`单行子查询`、`多行子查询`。

* 单行子查询
* 多行子查询

分类方式2：按内查询是否被执行多次，将子查询划分为`相关(或关联)子查询`和`不相关(或非关联)子查询`。

* 相关(或关联)子查询：子查询从数据表中查询了数据结果，如果这个数据结果只执行一次，然后这个数据结果作为主查询的条件进行执行，那么这样的子查询叫做不相关子查询
* 不相关(或非关联)子查询：如果子查询需要执行多次，即采用循环的方式，先从外部查询开始，每次都传入子查询进行查询，然后再将结果反馈给外部，这种嵌套的执行方式就称为相关子查询

### 单行子查询

单行子查询能使用的操作符

| 操作符 |
| :----: |
|   =    |
|   >    |
|   >=   |
|   <    |
|   <=   |
|   <>   |

**注意：**

1. 单行子查询必须只能返回一条数据给主查询使用。
2. 如果子查询的内容为空，那么主查询的内容也必为空。

* 练习一

  返回job_id与141号员工相同，salary比143号员工多的员工姓名，job_id和工资

  ```sql
  SELECT last_name, job_id, salary FROM employees
  WHERE job_id = (
  	SELECT job_id FROM employees WHERE employee_id = 141
  ) 
  AND salary > ( 
      SELECT salary FROM employees WHERE employee_id = 143
  )
  ```

* 练习二

  返回公司工资最少的员工的last_name,job_id和salary

  ```sql
  SELECT last_name, job_id, salary FROM employees
  WHERE salary = (
      SELECT MIN(salary) FROM employees
  )
  ```

* 练习三

  查询与141号员工的manager_id和department_id相同的其他员工的employee_id，manager_id，department_id

  ```sql
  SELECT employee_id, manager_id, department_id
  FROM employees 
  WHERE manager_id = (
  	SELECT manager_id FROM employees WHERE employee_id = 141
  ) 
  AND department_id = (
  	SELECT department_id FROM employees WHERE employee_id = 141
  )
  AND employee_id <> 141
  ```

  或者

  ```sql
  SELECT	employee_id, manager_id, department_id
  FROM	employees
  WHERE  (manager_id, department_id) =
                        (SELECT manager_id, department_id
                         FROM   employees
                         WHERE  employee_id = 141)
  AND	employee_id <> 141;
  ```

* 练习四

  查询最低工资大于50号部门最低工资的部门id和其最低工资

  ```sql
  SELECT department_id, MIN(salary)
  FROM employees
  GROUP BY department_id
  HAVING MIN(salary) > (
  	SELECT MIN(salary) FROM employees WHERE department_id = 50
  )
  ```

* 练习五

  显式员工的employee_id,last_name和location。其中，若员工department_id与location_id为1800的department_id相同，则location为Canada，其余则为USA。

  ```sql
  SELECT employee_id, last_name,
         (CASE department_id
          WHEN
              (SELECT department_id FROM departments WHERE location_id = 1800) 
          THEN 'Canada' ELSE 'USA' END) location
  FROM employees;
  ```

  

