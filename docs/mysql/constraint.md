---
sidebar: auto
---

# 约束 (constraint)

为了保证数据的完整性，SQL 规范以约束的方式对**表数据进行额外的条件限制**。从以下四个方面考虑：

- `实体完整性（Entity Integrity）`
- `域完整性（Domain Integrity）`
- `引用完整性（Referential Integrity）`
- `用户自定义完整性（User-defined Integrity）`

约束是表级的强制规定。可以在**创建表时规定约束（通过 CREATE TABLE 语句）**，或者在**表创建之后通过 ALTER TABLE 语句规定约束**。

## 约束的分类

- **根据约束数据列的限制，**约束可分为：
  - **单列约束**：每个约束只约束一列
  - **多列约束**：每个约束可约束多列数据
- **根据约束的作用范围**，约束可分为：
  - **列级约束**：只能作用在一个列上，跟在列的定义后面
  - **表级约束**：可以作用在多个列上，不与列一起，而是单独定义

```
			位置			支持的约束类型					是否可以起约束名
列级约束：	列的后面		语法都支持，但外键没有效果		不可以
表级约束：	所有列的下面	   默认和非空不支持，其他支持	   可以（主键没有效果）
```

- **根据约束起的作用**，约束可分为：
  - **NOT NULL** **非空约束，规定某个字段不能为空**
  - **UNIQUE** **唯一约束**，**规定某个字段在整个表中是唯一的**
  - **PRIMARY KEY 主键(非空且唯一)约束**
  - **FOREIGN KEY** **外键约束**
  - **CHECK** **检查约束**
  - **DEFAULT** **默认值约束**

> 注意： MySQL 不支持 check 约束，但可以使用 check 约束，而没有任何效果

- 查看某个表已有的约束

  ```sql
  #information_schema数据库名（系统库）
  #table_constraints表名称（专门存储各个表的约束）
  SELECT * FROM information_schema.table_constraints
  WHERE table_name = '表名称';
  ```

### 非空约束 (NOT NULL)

限定某个字段/某列的值不允许为空。

#### 特点

- 默认，所有的类型的值都可以是 NULL，包括 INT、FLOAT 等数据类型
- 非空约束只能出现在表对象的列上，只能某个列单独限定非空，不能组合非空
- 一个表可以有很多列都分别限定了非空
- 空字符串''不等于 NULL，0 也不等于 NULL

#### 设置非空约束

1. 建表时设置约束

   ```sql
   CREATE TABLE 表名称(
   	字段名  数据类型,
       字段名  数据类型 NOT NULL,
       字段名  数据类型 NOT NULL
   );
   ```

2. 修改表时设置约束

   ```sql
   alter table 表名称 modify 字段名 数据类型 not null;
   ```

   例：

   ```sql
   ALTER TABLE emp
   MODIFY sex VARCHAR(30) NOT NULL;
   ```

3. 删除非空约束

   ```sql
   #去掉not null，相当于修改某个非注解字段，该字段允许为空
   alter table 表名称 modify 字段名 数据类型 NULL;
   ```

   或

   ```sql
   #去掉not null，相当于修改某个非注解字段，该字段允许为空
   alter table 表名称 modify 字段名 数据类型;
   ```

### 唯一性约束 (UNIQUE)

用来限制某个字段/某列的值不能重复。

- 同一个表可以有多个唯一约束。
- 唯一约束可以是某一个列的值唯一，也可以多个列组合的值唯一。
- 唯一性约束允许列值为空。
- 在创建唯一约束的时候，如果不给唯一约束命名，就默认和列名相同。
- **MySQL 会给唯一约束的列上默认创建一个唯一索引。**

1. 建表时设置唯一约束

   ```sql
   create table 表名称(
   	字段名  数据类型,
       字段名  数据类型  unique,
       字段名  数据类型  unique key,
   );
   create table 表名称(
   	字段名  数据类型,
       字段名  数据类型,
       -- 表级约束语法
       [constraint 自定义约束名] unique key(字段名1, 字段名2)
   );
   ```

   > 同时指定两个或以上字段为 unique，则是这两个字段都同时重复才算重复，否则不算重复

   例：

   ```sql
   create table student(
   	id int,
       name varchar(20),
       phone char(11) unique,
   );
   ```

   ```sql
   CREATE TABLE USER(
    id INT NOT NULL,
    NAME VARCHAR(25),
    PASSWORD VARCHAR(16),
    -- 使用表级约束语法
    CONSTRAINT name_pwd UNIQUE(NAME,PASSWORD)
   );
   ```

2. 修改表时指定唯一约束

   ```sql
   -- 字段列表中如果是一个字段，表示该列的值唯一。如果是两个或更多个字段，那么复合唯一，即多个字段的组合是唯一的

   -- 方式1：
   alter table 表名称 add unique key(字段列表);

   -- 方式2：
   alter table 表名称 modify 字段名 字段类型 unique;
   ```

   例：

   ```sql
   ALTER TABLE USER
   ADD UNIQUE(NAME,PASSWORD);
   ```

   ```sql
   ALTER TABLE USER
   ADD CONSTRAINT uk_name_pwd UNIQUE(NAME,PASSWORD);
   ```

   ```sql
   ALTER TABLE USER
   MODIFY NAME VARCHAR(20) UNIQUE;
   ```

3. 复合唯一约束

   字段列表中写的是多个字段名，多个字段名用逗号分隔，表示那么是复合唯一，即多个字段的组合是唯一的。

   ```sql
   create table 表名称(
   	字段名  数据类型,
       字段名  数据类型,
       字段名  数据类型,
       unique key(字段名1，字段名2)
       -- 和一中的表级约束语基本一直。
   );
   ```

4. 删除唯一约束

- 添加唯一性约束的列上也会自动创建唯一索引。
- 删除唯一约束只能通过删除唯一索引的方式删除。
- 删除时需要指定唯一索引名，唯一索引名就和唯一约束名一样。
- 如果创建唯一约束时未指定名称，如果是单列，就默认和列名相同；如果是组合列，那么默认和()中排在第一个的列名相同。也可以自定义唯一性约束名。

**查看都有哪些约束**

```sql
SELECT * FROM information_schema.table_constraints WHERE table_name = '表名';
```

**删除唯一约束**

```sql
ALTER TABLE 表名 DROP INDEX 索引;
```

### 主键约束 (PRIMARY KEY )

主键约束相当于**唯一约束+非空约束的组合**，主键约束列不允许重复，也不允许出现空值。

- 一个表最多只能有一个主键约束，建立主键约束可以在列级别创建，也可以在表级别上创建。

- 主键约束对应着表中的一列或者多列（复合主键）
- 如果是多列组合的复合主键约束，那么这些列都不允许为空值，并且组合的值不允许重复。
- **MySQL 的主键名总是 PRIMARY**，就算自己命名了主键约束名也没用。
- 当创建主键约束时，系统默认会在所在的列或列组合上建立对应的**主键索引**（能够根据主键查询的，就根据主键查询，效率更高）。如果删除主键约束了，主键约束对应的索引就自动删除了。

- 需要注意的一点是，不要修改主键字段的值。因为主键是数据记录的唯一标识，如果修改了主键的值，就有可能会破坏数据的完整性。

1. 建表时指定主键约束

   ```sql
   create table 表名称(
   	字段名  数据类型  primary key, #列级模式
       字段名  数据类型,
   );
   create table 表名称(
   	字段名  数据类型,
       字段名  数据类型,
       [constraint 约束名] primary key(字段名) #表级模式
   );
   ```

   例：

   ```sql
   create table temp(
   	id int primary key,
       name varchar(20)
   );
   ```

2. 修改时增加主键约束

   ```sql
   create table 表名称(
   	字段名  数据类型,
       字段名  数据类型,
       字段名  数据类型,
       -- 表示字段1和字段2的组合是唯一的，也可以有更多个字段
       primary key(字段名1,字段名2)
   );
   ```

   > 和非空约束一直，只要组合起来不一样就行，区别的是任意一个字段不能为空

   例：

   ```sql
   create table student_course(
   	sid int,
       cid int,
       score int,
       primary key(sid,cid)  #复合主键
   );
   ```

3. 删除主键约束

   删除主键约束，不需要指定主键名，因为一个表只有一个主键，删除主键约束后，非空还存在。

   ```sql
   alter table 表名称 drop primary key;
   ```

   > 开发中不可能出现几乎删除主键约束的情况

### 自增列 (AUTO_INCREMENT)

某个字段的值自增

- 一个表最多只能有一个自增长列

- 当需要产生唯一标识符或顺序值时，可设置自增长

- 自增长列约束的列必须是键列（主键列，唯一键列）

- 自增约束的列的数据类型必须是整数类型

- 如果自增列指定了 0 和 null，会在当前最大值的基础上自增；如果自增列手动指定了具体值，直接赋值为具体值。

1. 创建表时设置自增列

   ```sql
   create table 表名称(
   	字段名  数据类型  primary key auto_increment,
       字段名  数据类型,
   );
   create table 表名称(
       字段名  数据类型 unique key auto_increment,
       字段名  数据类型,
   );
   ```

2. 修改表时添加自增列

   ```sql
   alter table 表名称 modify 字段名 数据类型 auto_increment;
   ```

3. 删除自增约束

   去掉 auto_increment 相当于删除

   ```sql
   alter table 表名称 modify 字段名 数据类型;
   ```

4. mysql5 和 mysql8 的一点区别

   在 mysql5 中如果自增到 9，然后把 9 删了，再重启服务，那么在插入一条数据会是 9，而在 mysql8 中即使重启服务再插入一条数据也不会是 9，而是 10。原因是 MySQL 8.0 将自增主键的计数器持久化到`重做日志`中。每次计数器发生改变，都会将其写入重做日志中。如果数据库重启，InnoDB 会根据重做日志中的信息来初始化计数器的内存值。
