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

4.
