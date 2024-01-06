---
sidebar: auto
---

# 子查询

**在 SELECT 语句中除了 GROUP BY 和 LIMIT 之外其他的地方都可以写子查询**

子查询指一个查询语句嵌套在另一个查询语句内部的查询，一个查询语句的结果被另一条查询语句所使用。

- 子查询（内查询）在主查询之前一次执行完成。

- 子查询的结果被主查询（外查询）使用 。

  **注意：**

  - 子查询要包含在括号内
  - 将子查询放在比较条件的右侧
  - 单行操作符对应单行子查询，多行操作符对应多行子查询

例：查询工资比 Abel 高的人的姓名和工资。

- 方式一

  ```sql
  # 先查询 Abel 的工资，结果为 11000
  SELECT salary FROM employees WHERE last_name = 'Abel'

  # 在查询工资比 11000 高的人
  SELECT last_name, salary FROM employees WHERE salary > 11000
  ```

- 方式二

  ```sql
  # 自连接
  SELECT e2.last_name,e2.salary
  FROM employees e1,employees e2
  WHERE e1.last_name = 'Abel'
  AND e1.`salary` < e2.`salary`
  ```

- 方式三

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

- 单行子查询
- 多行子查询

分类方式 2：按内查询是否被执行多次，将子查询划分为`相关(或关联)子查询`和`不相关(或非关联)子查询`。

- 相关(或关联)子查询：子查询从数据表中查询了数据结果，如果这个数据结果只执行一次，然后这个数据结果作为主查询的条件进行执行，那么这样的子查询叫做不相关子查询
- 不相关(或非关联)子查询：如果子查询需要执行多次，即采用循环的方式，先从外部查询开始，每次都传入子查询进行查询，然后再将结果反馈给外部，这种嵌套的执行方式就称为相关子查询

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

- 练习一

  返回 job_id 与 141 号员工相同，salary 比 143 号员工多的员工姓名，job_id 和工资

  ```sql
  SELECT last_name, job_id, salary FROM employees
  WHERE job_id = (
  	SELECT job_id FROM employees WHERE employee_id = 141
  )
  AND salary > (
      SELECT salary FROM employees WHERE employee_id = 143
  )
  ```

- 练习二

  返回公司工资最少的员工的 last_name,job_id 和 salary

  ```sql
  SELECT last_name, job_id, salary FROM employees
  WHERE salary = (
      SELECT MIN(salary) FROM employees
  )
  ```

- 练习三

  查询与 141 号员工的 manager_id 和 department_id 相同的其他员工的 employee_id，manager_id，department_id

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

- 练习四

  查询最低工资大于 50 号部门最低工资的部门 id 和其最低工资

  ```sql
  SELECT department_id, MIN(salary)
  FROM employees
  GROUP BY department_id
  HAVING MIN(salary) > (
  	SELECT MIN(salary) FROM employees WHERE department_id = 50
  )
  ```

- 练习五

  显式员工的 employee_id,last_name 和 location。其中，若员工 department_id 与 location_id 为 1800 的 department_id 相同，则 location 为 Canada，其余则为 USA。

  ```sql
  SELECT employee_id, last_name,
         (CASE department_id
          WHEN
              (SELECT department_id FROM departments WHERE location_id = 1800)
          THEN 'Canada' ELSE 'USA' END) location
  FROM employees;
  ```

### 多行子查询

- 也叫集合比较子查询
- 内查询返回多行
- 使用多行比较操作符

多行子查询使用的操作符

| 操作符 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| IN     | 等于列表中的**任意一个**                                     |
| ANY    | 需要和单行比较操作符一起使用，和子查询返回的**某一个**值比较 |
| ALL    | 需要和单行比较操作符一起使用，和子查询返回的**所有**值比较   |
| SOME   | 实际上是 ANY 的别名，作用相同，一般常使用 ANY                |

- 练习一

  返回其它 job_id 中比 job_id 为‘IT_PROG’部门**任一**工资低的员工的员工号、姓名、job_id 以及 salary

  ```sql
  SELECT employee_id, last_name, job_id, salary
  FROM employees
  WHERE job_id <> 'IT_PROG'
  AND salary < ANY (
  	SELECT salary FROM employees WHERE job_id = 'IT_PROG'
  )

  ```

- 练习二

  返回其它 job_id 中比 job_id 为‘IT_PROG’部门所有工资**都**低的员工的员工号、姓名、job_id 以及 salary

  ```sql
  SELECT employee_id, last_name, job_id, salary
  FROM employees
  WHERE job_id <> 'IT_PROG'
  AND salary < ALL (
  	SELECT salary FROM employees WHERE job_id = 'IT_PROG'
  )
  ```

- 练习三

  查询平均工资最低的部门 id

  ```sql
  # 解析
  # 先查出每个部门的平均工资
  SELECT department_id,AVG(salary) avg_sa
  FROM employees
  GROUP BY department_id

  # 把上面的结果单做一张表，查出他的最低工资
  SELECT MIN(avg_sa) FROM (
      SELECT department_id,AVG(salary) avg_sa
      FROM employees
      GROUP BY department_id
  ) t_avg_sa

  # 用最低工资去等于查出对应的部门id
  SELECT department_id , AVG(salary)
  FROM employees
  GROUP BY department_id
  HAVING AVG(salary) = (
  	SELECT MIN(avg_sa) FROM (
  		SELECT department_id,AVG(salary) avg_sa
  		FROM employees
  		GROUP BY department_id
  	) t_avg_sa
  )

  # 方式二
  # 解析子查询查出来的每个部门的平均工资，父查询只要小于平均工资全部的最小值
  SELECT department_id , AVG(salary)
  FROM employees
  GROUP BY department_id
  HAVING AVG(salary) <= ALL (
  		SELECT AVG(salary) avg_sa
  		FROM employees
  		GROUP BY department_id
  )
  ```

### 相关子查询

如果子查询的执行依赖于外部查询，通常情况下都是因为子查询中的表用到了外部的表，并进行了条件关联，因此每执行一次外部查询，子查询都要重新计算一次，这样的子查询就称之为`关联子查询`。相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询。

- 练习一

  查询员工中工资大于本部门平均工资的员工的 last_name,salary 和其 department_id

  ```sql
  # 方式一
  SELECT department_id, last_name, salary
  FROM employees e1
  WHERE salary > All (
  	SELECT AVG(salary) FROM employees e2
  	WHERE department_id = e1.department_id
  )

  # 方式二
  SELECT e.department_id, e.last_name, e.salary
  FROM employees e, (
  	SELECT department_id, AVG(salary) avg_sa
  	FROM employees
  	GROUP BY department_id) t_e2
  WHERE  e.department_id = t_e2.department_id
  AND e.salary > t_e2.avg_sa

  # 方式二解析
  # 1.把每个部门的平均工资和department_id查出来当做一张表
  SELECT department_id, AVG(salary) avg_sa
  	FROM employees
  	GROUP BY department_id

  # 2.把两张表连起来进行多表查询，连接条件就是 department_id 相等，并且salary上面那张表
  # 查出来的平均工资。
  SELECT e.department_id, e.last_name, e.salary
  FROM employees e, (
  	SELECT department_id, AVG(salary) avg_sa
  	FROM employees
  	GROUP BY department_id) t_e2
  WHERE  e.department_id = t_e2.department_id
  AND e.salary > t_e2.avg_sa
  ```

- 练习二

  查询员工的 id,salary,按照 department_name 排序

  ```sql
  SELECT employee_id, salary
  FROM employees e
  ORDER BY (
  	SELECT department_name FROM departments d
  	WHERE e.department_id = d.department_id
  ) ASC;

  # 解析
  # 下面查出来的只是这个部门的department_name，把他当做一个字段来看即可。
  SELECT department_name FROM departments d
  WHERE e.department_id = d.department_id
  ```

- 练习三

  若 employees 表中 employee_id 与 job_history 表中 employee_id 相同的数目不小于 2，输出这些相同 id 的员工的 employee_id,last_name 和其 job_id

  ```sql
  SELECT e.employee_id, last_name,e.job_id
  FROM   employees e
  WHERE  2 <= (SELECT COUNT(*)
               FROM   job_history
               WHERE  employee_id = e.employee_id);
  ```

### EXISTS 与 NOT EXISTS 关键字

- 关联子查询通常也会和 EXISTS 操作符一起来使用，用来检查在子查询中是否存在满足条件的行。
- **如果在子查询中不存在满足条件的行：**
  - 条件返回 FALSE
  - 继续在子查询中查找
- **如果在子查询中存在满足条件的行：**
  - 不在子查询中继续查找
  - 条件返回 TRUE
- NOT EXISTS 关键字表示如果不存在某种条件，则返回 TRUE，否则返回 FALSE。

练习：查询公司管理者的 employee_id，last_name，job_id，department_id 信息

- 方式一

  ```sql

  SELECT employee_id, last_name, job_id, department_id
  FROM   employees e1
  WHERE  EXISTS ( SELECT *
                   FROM   employees e2
                   WHERE  e2.manager_id = e1.employee_id
  );
  ```

- 方式二

  ```sql
  # 自连接
  SELECT DISTINCT e1.employee_id, e1.last_name, e1.job_id, e1.department_id
  FROM   employees e1 JOIN employees e2
  WHERE e1.employee_id = e2.manager_id;
  ```

- 方式三

  ```sql
  SELECT employee_id,last_name,job_id,department_id
  FROM employees
  WHERE employee_id IN (
  		     SELECT DISTINCT manager_id
  		     FROM employees
  	     );
  ```
