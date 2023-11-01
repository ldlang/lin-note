---
sidebar: auto
---

# mysql

## sql 语句分类

1. DDL：数据库定义语言，用来定义数据库对象（数据库，表，字段）。

   ```sq
   CREATE ALTER DROP RENAME TRUNCATE
   ```

2. DML：数据操作语言，数据的操作，用来对数据库表中的数据进行增删改查。

   ```sql
   INSERT DELETE UPDATE SELECT
   ```

3. DCL：数据控制语言，用来创建数据库用户，控制数据库的访问权限。

   ```sql
   COMMIT ROLLBACK SAVEPOINT GRANT REVOKE
   ```

4. DQL：数据库查询语言，用来查询数据库中表的记录，部分分类会把 SELECT 单独分为 DQL 语句

## 规则和规范

1. 基本规则

   - 一条 sql 语句可以写成多行，以提高可读性。
   - 每条命令必须以`;`结尾，在命令行中也可以是以`\g`或`\G`结尾。
   - 字符串类型和日期时间的数据类型可以使用单引号。
   - 列的别名尽量使用双引号，不建议使用 as。

2. 大小写规范

   - mysql 在 window 环境下可以不区分大小写

   - mysql 在 Linux 环境下是区分大小写的

     > 推荐关键字使用大写，表名等使用小写

3. 命名规则（后续补充）

## 导入数据库

* source + 文件路径			在命令行中执行
* 借助图形化的工具