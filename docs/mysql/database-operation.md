---
sidebar: auto
---

# 数据库表操作

## 数据库操作

### 1、数据库命名规范

- 数据库名、表名不得超过 30 个字符，变量名限制为 29 个
- 必须只能包含 A–Z, a–z, 0–9, \_共 63 个字符
- 数据库名、表名、字段名等对象名中间不要包含空格
- 同一个 MySQL 软件中，数据库不能同名；同一个库中，表不能重名；同一个表中，字段不能重名
- 必须保证你的字段没有和保留字、数据库系统或常用方法冲突。如果坚持使用，请在 SQL 语句中使用`（着重号）引起来
- 保持字段名和类型的一致性：在命名字段并为其指定数据类型的时候一定要保证一致性，假如数据类型在一个表里是整数，那在另一个表里可就别变成字符型了

### 2、数据库创建

- 方式 1：创建数据库

```mysql
CREATE DATABASE 数据库名;
```

- 方式 2：创建数据库并指定字符集

```mysql
CREATE DATABASE 数据库名 CHARACTER SET 字符集;
```

- 方式 3：判断数据库是否已经存在，不存在则创建数据库（`推荐`）

```mysql
CREATE DATABASE IF NOT EXISTS 数据库名;
```

如果 MySQL 中已经存在相关的数据库，则忽略创建语句，不再创建数据库。

> 注意：DATABASE 不能改名。一些可视化工具可以改名，它是建新库，把所有表复制到新库，再删旧库完成的。

### 3、数据库使用

- 查看当前所有的数据库

```mysql
SHOW DATABASES; #有一个S，代表多个数据库
```

- 查看当前正在使用的数据库

```mysql
SELECT DATABASE();  #使用的一个 mysql 中的全局函数
```

- 查看指定库下所有的表

```mysql
SHOW TABLES FROM 数据库名;
```

- 查看数据库的创建信息

```mysql
SHOW CREATE DATABASE 数据库名;
或者：
SHOW CREATE DATABASE 数据库名\G
```

- 使用/切换数据库

```mysql
USE 数据库名;
```

> 注意：要操作表格和数据之前必须先说明是对哪个数据库进行操作，否则就要对所有对象加上“数据库名.”。

### 4、修改数据库

- 更改数据库字符集
- 数据库名是不能更改的，可视化工具更改是新创建一个库，再把原来的库移过去并删除。

```sql
ALTER DATABASE 数据库名 CHARACTER SET 字符集;  #比如：gbk、utf8等
```

### 5、删除数据库

- 方式 1：删除指定的数据库

```mysql
DROP DATABASE 数据库名;
```

- 方式 2：删除指定的数据库（`推荐`）

```mysql
DROP DATABASE IF EXISTS 数据库名;
```

## 数据表操作

### 1、数据类型

| 类型             | 类型举例                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| 整数类型         | TINYINT、SMALLINT、MEDIUMINT、**INT(或 INTEGER)**、BIGINT                                                            |
| 浮点类型         | FLOAT、DOUBLE                                                                                                        |
| 定点数类型       | **DECIMAL**                                                                                                          |
| 位类型           | BIT                                                                                                                  |
| 日期时间类型     | YEAR、TIME、**DATE**、DATETIME、TIMESTAMP                                                                            |
| 文本字符串类型   | CHAR、**VARCHAR**、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT                                                              |
| 枚举类型         | ENUM                                                                                                                 |
| 集合类型         | SET                                                                                                                  |
| 二进制字符串类型 | BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB                                                              |
| JSON 类型        | JSON 对象、JSON 数组                                                                                                 |
| 空间数据类型     | 单值：GEOMETRY、POINT、LINESTRING、POLYGON；<br/>集合：MULTIPOINT、MULTILINESTRING、MULTIPOLYGON、GEOMETRYCOLLECTION |

其中，常用的几类类型介绍如下：

| 数据类型      | 描述                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| INT           | 从-2^31 到 2^31-1 的整型数据。存储大小为 4 个字节                                  |
| CHAR(size)    | 定长字符数据。若未指定，默认为 1 个字符，最大长度 255                              |
| VARCHAR(size) | 可变长字符数据，根据字符串实际长度保存，**必须指定长度**                           |
| FLOAT(M,D)    | 单精度，占用 4 个字节，M=整数位+小数位，D=小数位。 D<=M<=255,0<=D<=30，默认 M+D<=6 |
| DOUBLE(M,D)   | 双精度，占用 8 个字节，D<=M<=255,0<=D<=30，默认 M+D<=15                            |
| DECIMAL(M,D)  | 高精度小数，占用 M+2 个字节，D<=M<=65，0<=D<=30，最大取值范围与 DOUBLE 相同。      |
| DATE          | 日期型数据，格式'YYYY-MM-DD'                                                       |
| BLOB          | 二进制形式的长文本数据，最大可达 4G                                                |
| TEXT          | 长文本数据，最大可达 4G                                                            |

### 2、创建表

1. 语法

   加上了 IF NOT EXISTS 关键字，则表示：如果当前数据库中不存在要创建的数据表，则创建数据表；如果当前数据库中已经存在要创建的数据表，则忽略建表语句，不再创建数据表。

   ```sql
   CREATE TABLE [IF NOT EXISTS] 表名(
   	字段1, 数据类型 [约束条件] [默认值],
   	字段2, 数据类型 [约束条件] [默认值],
   	字段3, 数据类型 [约束条件] [默认值],
   	……
   	[表约束条件]
   );
   ```

2. MySQL 在执行建表语句时，将 id 字段的类型设置为 int(11)，这里的 11 实际上是 int 类型指定的显示宽度，默认的显示宽度为 11。也可以在创建数据表的时候指定数据的显示宽度。

   **在 MySQL 8.x 版本中，不推荐为 INT 类型指定显示长度，并在未来的版本中可能去掉这样的语法。**

   ```sql
   CREATE TABLE dept(
       -- int类型，自增
   	deptno INT(2) AUTO_INCREMENT,
   	dname VARCHAR(14),
   	loc VARCHAR(13),
       -- 主键
       PRIMARY KEY (deptno)
   );
   ```

3. 通过已有的表来创建新表

   - 指定的列和子查询中的列要一一对应
   - 通过列名和默认值定义列

   ```sql
   CREATE TABLE emp1 AS SELECT * FROM employees;

   CREATE TABLE emp2 AS SELECT * FROM employees WHERE false; -- 创建的emp2是空表

   # 或者
   CREATE TABLE dept80
   AS
   SELECT  employee_id, last_name, salary*12 ANNSAL, hire_date
   FROM    employees
   WHERE   department_id = 80;
   ```

### 3、查看表结构

在 MySQL 中创建好数据表之后，可以查看数据表的结构。MySQL 支持使用`DESCRIBE/DESC`语句查看数据表结构，也支持使用`SHOW CREATE TABLE`语句查看数据表结构。

```sql
SHOW CREATE TABLE 表名\G
```

### 4、修改表

1. 追加一个列

   ```sql
   ALTER TABLE 表名 ADD 字段名 字段类型 【FIRST|AFTER 字段名】;
   ```

   往 employees 表添加 name 列

   ```sql
   ALTER TABLE employees ADD name VARCHAR(25);
   ```

2. 修改一个列

   可以修改列的数据类型，长度、默认值和位置，默认值只对表后面的修改生效，并不会里面插入默认值。

   ```sql
   ALTER TABLE 表名 MODIFY 字段名1 字段类型 【DEFAULT 默认值】【FIRST|AFTER 字段名2】;
   ```

   修改 employees 的 name 字段为 int 并指定默认值为 1

   ```sql
   ALTER TABLE employees MODIFY `name` INT DEFAULT 1;
   ```

3. 重命名一个列

   使用`CHANGE old_column  new_column  dataType`子句重命名列

   ```sql
   ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
   ```

   修改 employees 的 name 为 new_name 并指定数据类型

   ```sql
   ALTER TABLE employees CHANGE `name` new_name VARCHAR(10);
   ```

4. 删除一个列

   删除表中某个字段的语法格式如下：

   ```sql
   ALTER TABLE 表名 DROP COLUMN 字段名
   ```

   删除 employees 的 new_name 列

   ```sql
   ALTER TABLE employees DROP COLUMN new_name
   ```

5. 重命名表

   ```sql
   RENAME TABLE 原表名 TO 新表名;

   # 或者
   ALTER table 原表名 RENAME [TO] 新表名;  -- [TO]可以省略
   ```

6. 删除表

   - 在 MySQL 中，当一张数据表`没有与其他任何数据表形成关联关系`时，可以将当前数据表直接删除。
   - 数据和结构都被删除
   - 所有正在运行的相关事务被提交
   - 所有相关索引被删除

   ```sql
   DROP TABLE [IF EXISTS] 数据表1 [, 数据表2, …, 数据表n];
   ```

   删除 employees 表

   ```sql
   DROP TABLE IF EXISTS employees
   ```

7. 清空表

   TRUNCATE TABLE，删除表中所有的数据，释放表的存储空间。

   ```sql
   TRUNCATE TABLE 表名; # 不可回滚

   # 或者
   DELETE FROM 表名; # 可以回滚
   ```

   TRUNCATE 语句**不能回滚**，而使用 DELETE 语句删除数据，可以回滚。

   DELETE FROM 会回滚之前要先执行`SET autocommit = FALSE`，清空表之后再执行`ROLLBACK`即可将表回滚至清空之前的状态。

   ```sql
   # 1
   SET autocommit = FALSE;

   # 2
   DELETE FROM emp2;
   #TRUNCATE TABLE emp2;

   # 3
   SELECT * FROM emp2;

   # 4
   ROLLBACK;

   # 5
   SELECT * FROM emp2;
   ```
