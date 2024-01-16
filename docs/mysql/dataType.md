---
sidebar: auto
---

# 数据类型

| 类型             | 类型举例                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 整数类型         | TINYINT、SMALLINT、MEDIUMINT、INT(或 INTEGER)、BIGINT                                                                        |
| 浮点类型         | FLOAT、DOUBLE                                                                                                                |
| 定点数类型       | DECIMAL                                                                                                                      |
| 位类型           | BIT                                                                                                                          |
| 日期时间类型     | YEAR、TIME、DATE、DATETIME、TIMESTAMP                                                                                        |
| 文本字符串类型   | CHAR、VARCHAR、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT                                                                          |
| 枚举类型         | ENUM                                                                                                                         |
| 集合类型         | SET                                                                                                                          |
| 二进制字符串类型 | BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB                                                                      |
| JSON 类型        | JSON 对象、JSON 数组                                                                                                         |
| 空间数据类型     | 单值类型：GEOMETRY、POINT、LINESTRING、POLYGON；<br/>集合类型：MULTIPOINT、MULTILINESTRING、MULTIPOLYGON、GEOMETRYCOLLECTION |

> 1 - 4 为数字类型
>
> 5 为日期类型
>
> 6 - 10 为字符串类型

常见数据类型的属性，如下：

| MySQL 关键字       | 含义                     |
| ------------------ | ------------------------ |
| NULL               | 数据列可包含 NULL 值     |
| NOT NULL           | 数据列不允许包含 NULL 值 |
| DEFAULT            | 默认值                   |
| PRIMARY KEY        | 主键                     |
| AUTO_INCREMENT     | 自动递增，适用于整数类型 |
| UNSIGNED           | 无符号                   |
| CHARACTER SET name | 指定一个字符集           |

## 设置字符集

如果字段没有设置字符集会往上找表的字符集，如果表没有设置则会找库的字符集，依次往上找，一般只需要设置一个数据的字符集即可。

### 1、设置数据库的字符集

语法：

```sql
CREATE DATABASE 数据库名 CHARACTER SET 字符集;
```

创建**dbtest**数据并指定字符集为**utf8**

```sql
CREATE DATABASE dbtest CHARACTER SET 'utf8';
```

查看数据库的创建语句、字符集等

```sql
SHOW CREATE DATABASE dbtest;
```

### 2、设置表的字符集

语法：

```sql
CREATE TABLE 表名 (
	id INT,
	`name` VARCHAR(15)
) CHARACTER SET 字符集
```

创建**emp**表并指定字符集为**utf8**

```sql
CREATE TABLE emp (
	id INT,
	`name` VARCHAR(15)
) CHARACTER SET 'utf8'
```

查看表的创建语句、字符集等

```sql
SHOW CREATE TABLE emp;
```

### 3、设置字段的字符集

语法：

```sql
CREATE TABLE 表名 (
	id INT,
	`name` VARCHAR(15) CHARACTER SET 字符集
)
```

创建**test**表，并指定**name**字段的字符集为**utf8mb4**

```sql
CREATE TABLE test (
	id INT,
	`name` VARCHAR(15) CHARACTER SET 'utf8mb4'
) CHARACTER SET 'utf8'
```

## 整数类型（整型）

### 1、类型分类

整数类型一共有 5 种，包括 TINYINT、SMALLINT、MEDIUMINT、INT（INTEGER）和 BIGINT。

| **整数类型** | **字节** | 有符号数取值范围                         | 无符号数取值范围       |
| ------------ | -------- | ---------------------------------------- | ---------------------- |
| TINYINT      | 1        | -128~127                                 | 0~255                  |
| SMALLINT     | 2        | -32768~32767                             | 0~65535                |
| MEDIUMINT    | 3        | -8388608~8388607                         | 0~16777215             |
| INT、INTEGER | 4        | -2147483648~2147483647                   | 0~4294967295           |
| BIGINT       | 8        | -9223372036854775808~9223372036854775807 | 0~18446744073709551615 |

### 2、可选属性

1. **M**

   `M`: 表示显示宽度，M 的取值范围是(0, 255)。例如，int(5)：当数据宽度小于 5 位的时候在数字前面需要用字符填满宽度。该项功能需要配合“`ZEROFILL`”使用，表示用“0”填满宽度，否则指定显示宽度无效。

   那么插入的数据宽度超过显示宽度限制不会对插入的数据有任何影响，还是按照类型的实际宽度进行保存，即`显示宽度与类型可以存储的值范围无关`。**从 MySQL 8.0.17 开始，整数数据类型不推荐使用显示宽度属性。**

2. **UNSIGNED** （无符号）

   UNSIGNED`: 无符号类型（非负），所有的整数类型都有一个可选的属性 UNSIGNED（无符号属性），无符号整数类型的最小取值为 0。所以，如果需要在 MySQL 数据库中保存非负整数值时，可以将整数类型设置为无符号类型。

3. **ZEROFILL**

   `ZEROFILL`: 0 填充,（如果某列是 ZEROFILL，那么 MySQL 会自动为当前列添加 UNSIGNED 属性），如果指定了 ZEROFILL 只是表示不够 M 位时，用 0 在左边填充，如果超过 M 位，只要不超过数据存储范围即可。

   原来，在 int(M) 中，M 的值跟 int(M) 所占多少存储空间并无任何关系。 int(3)、int(4)、int(8) 在磁盘上都是占用 4 bytes 的存储空间。也就是说，**int(M)，必须和 UNSIGNED ZEROFILL 一起使用才有意义。**如果整数值超过 M 位，就按照实际位数存储。只是无须再用字符 0 进行填充。

## 浮点类型
