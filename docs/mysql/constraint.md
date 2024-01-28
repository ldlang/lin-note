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

### 外键约束 (FOREIGN KEY)

限定某个表的某个字段的引用完整性。

主表（父表）：被引用的表，被参考的表

从表（子表）：引用别人的表，参考别人的表

1. 特点

   - 从表的外键列，必须引用/参考主表的主键或唯一约束的列

   为什么？因为被依赖/被参考的值必须是唯一的

   - 在创建外键约束时，如果不给外键约束命名，**默认名不是列名，而是自动产生一个外键名**（例如 student_ibfk_1;），也可以指定外键约束名。

   - 创建(CREATE)表时就指定外键约束的话，先创建主表，再创建从表

   - 删表时，先删从表（或先删除外键约束），再删除主表

   - 当主表的记录被从表参照时，主表的记录将不允许删除，如果要删除数据，需要先删除从表中依赖该记录的数据，然后才可以删除主表的数据

   - 在“从表”中指定外键约束，并且一个表可以建立多个外键约束

   - 从表的外键列与主表被参照的列名字可以不相同，但是数据类型必须一样，逻辑意义一致。如果类型不一样，创建子表时，就会出现错误“ERROR 1005 (HY000): Can't create table'database.tablename'(errno: 150)”。

   例如：都是表示部门编号，都是 int 类型。

   - **当创建外键约束时，系统默认会在所在的列上建立对应的普通索引**。但是索引名是外键的约束名。（根据外键查询效率很高）

   - 删除外键约束后，必须`手动`删除对应的索引

2. 建表时创建约束

   ```sql
   create table 主表名称(
   	字段1  数据类型  primary key,
       字段2  数据类型
   );

   create table 从表名称(
   	字段1  数据类型  primary key,
       字段2  数据类型,
       [CONSTRAINT <外键约束名称>] FOREIGN KEY（从表的某个字段) references 主表名(被参考字段)
   );
   -- (从表的某个字段)的数据类型必须与主表名(被参考字段)的数据类型一致，逻辑意义也一样
   -- (从表的某个字段)的字段名可以与主表名(被参考字段)的字段名一样，也可以不一样

   -- FOREIGN KEY: 在表级指定子表中的列
   -- REFERENCES: 标示在父表中的列
   ```

   例：

   ```sql
   create table dept( #主表
   	did int primary key,		#部门编号
       dname varchar(50)			#部门名称
   );

   create table emp(#从表
   	eid int primary key,  #员工编号
       ename varchar(5),     #员工姓名
       deptid int,				#员工所在的部门
       foreign key (deptid) references dept(did)   -- 在从表中指定外键约束
       -- emp表的deptid和和dept表的did的数据类型一致，意义都是表示部门的编号
   );
   ```

   > （1）主表 dept 必须先创建成功，然后才能创建 emp 表，指定外键成功。
   > （2）删除表时，先删除从表 emp，再删除主表 dept

3. 修改时增加约束

   一般情况下，表与表的关联都是提前设计好了的，因此，会在创建表的时候就把外键约束定义好。不过，如果需要修改表的设计（比如添加新的字段，增加新的关联关系），但没有预先定义外键约束，那么，就要用修改表的方式来补充定义。

   ```sql
   ALTER TABLE 从表名 ADD [CONSTRAINT 约束名] FOREIGN KEY (从表的字段) REFERENCES 主表名(被引用字段) [on update xx][on delete xx];
   ```

   例：

   ```sql
   ALTER TABLE emp1
   ADD [CONSTRAINT emp_dept_id_fk] FOREIGN KEY(dept_id) REFERENCES dept(dept_id);
   ```

4. 增删改特点

   - 添加了外键约束后，主表的修改和删除数据受约束
   - 添加了外键约束后，从表的添加和修改数据受约束
   - 在从表上建立外键，要求主表必须存在
   - 删除主表时，要求从表从表先删除，或将从表中外键引用该主表的关系先删除

5. 等级约束

   - `Cascade方式`：在父表上 update/delete 记录时，同步 update/delete 掉子表的匹配记录
   - `Set null方式`：在父表上 update/delete 记录时，将子表上匹配记录的列设为 null，但是要注意子表的外键列不能为 not null
   - `No action方式`：如果子表中有匹配的记录，则不允许对父表对应候选键进行 update/delete 操作
   - `Restrict方式`：同 no action， 都是立即检查外键约束
   - `Set default方式`（在可视化工具 SQLyog 中可能显示空白）：父表有变更时，子表将外键列设置成一个默认的值，但 Innodb 不能识别

   如果没有指定等级，就相当于 Restrict 方式。

   对于外键约束，最好是采用: `ON UPDATE CASCADE ON DELETE RESTRICT` 的方式。

6. 删除外键约束

   ```sql
   (1)第一步先查看约束名和删除外键约束
   SELECT * FROM information_schema.table_constraints WHERE table_name = '表名称';#查看某个表的约束名

   ALTER TABLE 从表名 DROP FOREIGN KEY 外键约束名;

   （2）第二步查看索引名和删除索引。（注意，只能手动删除）
   SHOW INDEX FROM 表名称; #查看某个表的索引名

   ALTER TABLE 从表名 DROP INDEX 索引名;
   ```

7. 总结

   - 建和不建外键约束的区别，建外键约束，你的操作（创建表、删除表、添加、修改、删除）会受到限制，从语法层面受到限制。例如：在员工表中不可能添加一个员工信息，它的部门的值在部门表中找不到。不建外键约束，你的操作（创建表、删除表、添加、修改、删除）不受限制，要保证数据的`引用完整性`，只能依`靠程序员的自觉`，或者是`在java程序中进行限定`。
   - 那么建和不建外键约束和查询没有关系，在 MySQL 里，外键约束是有成本的，需要消耗系统资源。对于大并发的 SQL 操作，有可能会不适合。比如大型网站的中央数据库，可能会`因为外键约束的系统开销而变得非常慢`。所以， MySQL 允许你不使用系统自带的外键约束，在`应用层面`完成检查数据一致性的逻辑。也就是说，即使你不用外键约束，也要想办法通过应用层面的附加逻辑，来实现外键约束的功能，确保数据的一致性。

### 检查约束 (check)

MySQL5.7 可以使用 check 约束，但 check 约束对数据验证没有任何作用。添加数据时，没有任何错误或警告

**MySQL 8.0 中可以使用 check 约束了**

### 默认值约束 (default)

给某个字段/某列指定默认值，一旦设置默认值，在插入数据时，如果此字段没有显式赋值，则赋值为默认值。

1. 创建时添加约束

   默认值约束一般不在唯一键和主键列上加

   ```sql
   create table 表名称(
   	字段名  数据类型  primary key,
       字段名  数据类型  unique key not null,
       字段名  数据类型  unique key,
       字段名  数据类型  not null default 默认值,
   );
   create table 表名称(
   	字段名  数据类型 default 默认值 ,
       字段名  数据类型 not null default 默认值,
       字段名  数据类型 not null default 默认值,
       primary key(字段名),
       unique key(字段名)
   );
   ```

2. 修改表时添加

   ```sql
   alter table 表名称 modify 字段名 数据类型 default 默认值;

   -- 如果这个字段原来有非空约束，你还保留非空约束，那么在加默认值约束时，还得保留非空约束，否则非空约束就被删除了
   -- 同理，在给某个字段加非空约束也一样，如果这个字段原来有默认值约束，你想保留，也要在modify语句中保留默认值约束，否则就删除了
   alter table 表名称 modify 字段名 数据类型 default 默认值 not null;
   ```

3. 删除默认值约束

   ```sql
   # 删除默认值约束，也不保留非空约束
   alter table 表名称 modify 字段名 数据类型 ;

   # 删除默认值约束，保留非空约束
   alter table 表名称 modify 字段名 数据类型  not null;

   #删除gender字段默认值约束，如果有非空约束，也一并删除
   alter table employee modify gender char;

   #删除tel字段默认值约束，保留非空约束
   alter table employee modify tel char(11)  not null;
   ```

4. 注意

   建表时，最好加 not null default '' 或 default 0，不想让表中出现 null 值，因为 null 是一种特殊值，比较时只能用专门的 is null 和 is not null 来比较。碰到运算符，通常返回 null，效率不高。影响提高索引效果。因此，我们往往在建表时 not null default '' 或 default 0。
