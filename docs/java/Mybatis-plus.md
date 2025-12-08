---
sidebar: auto
---

# Mybatis-plus

## 1、安装使用

1. 安装

   ```xml
   <dependency>
       <groupId>com.baomidou</groupId>
       <artifactId>mybatis-plus-boot-starter</artifactId>
       <version>3.5.3.1</version>
   </dependency>
   ```

2. 使用

   1. 启动类上加入扫描注解

      ```java
      import org.mybatis.spring.annotation.MapperScan;
      import org.springframework.boot.SpringApplication;
      import org.springframework.boot.autoconfigure.SpringBootApplication;

      @MapperScan("com.ldlang.mapper")
      @SpringBootApplication
      public class MpDemoApplication {

          public static void main(String[] args) {
              SpringApplication.run(MpDemoApplication.class, args);
          }

      }
      ```

   2. 配置 yaml

      ```yaml
      mybatis:
        mapper-locations: classpath*:mapper/*.xml
      ```

   3. `mapper`上继承`mybatis-plus`，并传入对应实体类

      ```java
      import com.baomidou.mybatisplus.core.mapper.BaseMapper;
      import com.itheima.mp.domain.po.User;

      // 继承BaseMapper接口并传入对应实体类即可
      public interface UserMapper extends BaseMapper<User> {
      }
      ```

   4. 使用

      此时`UserMapper`上就有很过方法了

      例：

      - 查询

        ```java
        // selectById 是继承来的方法可以直接使用
        User user = userMapper.selectById(5L);
        ```

      - 删除

        ```java
        // deleteById 也是继承来的方法
        userMapper.deleteById(5L);
        ```

## 2、常用注解

mybatisPlus 默认是配置

- 默认以驼峰转下划线作为表名的
- 默认将 id 作为表的主键
- 默认将变量名驼峰转下划线作为字段名

### `@TableName`

设置表名，如果表名不符合约定，即可使用该注解在实体类上手动设置表名以对应数据库

```java
@TableName("user")
public class User {}
```

### `@TableId`

设置主键，默认方式行为是以`雪花id`填入

```java
@TableId(value = "id", type = IdType.ASSIGN_ID)
private Long id;
```

type 支持的方式

- `IdType.AUTO`：数据库自增长
- `IdType.INPUT`：手动输入
- `IdType.ASSIGN_ID`：雪花 id（默认值）

### `@TableField`

- 变量名不能通过驼峰转下划线匹配时，需要手动指定
- 变量名以`is`开头的但数据库不是布尔值也需要手动指定
- 变量名是数据库关键字
- 变量不是数据库字段，设置忽略

```java
@TableField("`order`") // 关键字冲突
@TableField("is_show") // is的非布尔值
@TableField(exist = false) // 忽略该字段的映射
```

## 3、推荐开启配置

```yaml
mybatis-plus:
  type-aliases-package: com.ldlang.pojo # 别名扫描包
  mapper-locations: classpath*:/mapper/**/*.xml # Mapper.xml文件地址
  configuration:
    map-underscore-to-camel-case: true # 开启下划线和驼峰的映射转换
    cache-enabled: false # 是否开启二级缓存
  global-config:
    db-config:
      id-type: assign_id # 默认的id传入值
      update-strategy: not_null # 只更新非空字段
```

## 4、条件构造器

```java
QueryWrapper（查询/删除条件构造器）
UpdateWrapper（更新条件构造器）
// 用法同上面一致，但是字段需要传入一个函数，避免了硬编码，推荐使用下面的类
LambdaQueryWrapper（Lambda 版，避免硬编码字段名）
LambdaUpdateWrapper（Lambda 版，避免硬编码字段名）
```

### 1. 等值 / 不等值条件

| 方法                       | 说明             | SQL 示例                 |
| -------------------------- | ---------------- | ------------------------ |
| `eq(R column, Object val)` | 等于 =           | `WHERE age = 20`         |
| `ne(R column, Object val)` | 不等于 <>        | `WHERE age <> 20`        |
| `isNull(R column)`         | 字段 IS NULL     | `WHERE name IS NULL`     |
| `isNotNull(R column)`      | 字段 IS NOT NULL | `WHERE name IS NOT NULL` |

### 2. 范围条件

| 方法                                             | 说明                      | SQL 示例                          |
| ------------------------------------------------ | ------------------------- | --------------------------------- |
| `gt(R column, Object val)`                       | 大于 >                    | `WHERE salary > 5000`             |
| `ge(R column, Object val)`                       | 大于等于 >=               | `WHERE salary >= 5000`            |
| `lt(R column, Object val)`                       | 小于 <                    | `WHERE salary < 10000`            |
| `le(R column, Object val)`                       | 小于等于 <=               | `WHERE salary <= 10000`           |
| `between(R column, Object val1, Object val2)`    | BETWEEN val1 AND val2     | `WHERE age BETWEEN 18 AND 30`     |
| `notBetween(R column, Object val1, Object val2)` | NOT BETWEEN val1 AND val2 | `WHERE age NOT BETWEEN 18 AND 30` |

### 3. 模糊查询

| 方法                              | 说明             | SQL 示例                     |
| --------------------------------- | ---------------- | ---------------------------- |
| `like(R column, Object val)`      | LIKE '%val%'     | `WHERE name LIKE '%张%'`     |
| `notLike(R column, Object val)`   | NOT LIKE '%val%' | `WHERE name NOT LIKE '%张%'` |
| `likeLeft(R column, Object val)`  | LIKE '%val'      | `WHERE name LIKE '%张'`      |
| `likeRight(R column, Object val)` | LIKE 'val%'      | `WHERE name LIKE '张%'`      |

### 4. 包含 / 排除条件

| 方法                                  | 说明                | SQL 示例                                               |
| ------------------------------------- | ------------------- | ------------------------------------------------------ |
| `in(R column, Collection<?> coll)`    | IN (coll 元素)      | `WHERE id IN (1,2,3)`                                  |
| `notIn(R column, Collection<?> coll)` | NOT IN (coll 元素)  | `WHERE id NOT IN (1,2,3)`                              |
| `inSql(R column, String inValue)`     | IN (自定义 SQL)     | `WHERE id IN (SELECT id FROM user WHERE age > 20)`     |
| `notInSql(R column, String inValue)`  | NOT IN (自定义 SQL) | `WHERE id NOT IN (SELECT id FROM user WHERE age > 20)` |

### 5. 分组 / 排序

| 方法                                                      | 说明          | SQL 示例                     |
| --------------------------------------------------------- | ------------- | ---------------------------- |
| `groupBy(R... columns)`                                   | 分组 GROUP BY | `GROUP BY age, dept_id`      |
| `orderByAsc(R... columns)`                                | 升序 ORDER BY | `ORDER BY age ASC, id ASC`   |
| `orderByDesc(R... columns)`                               | 降序 ORDER BY | `ORDER BY age DESC, id DESC` |
| `orderBy(boolean condition, boolean isAsc, R... columns)` | 自定义排序    | `ORDER BY age DESC`          |

### 6. 逻辑条件

| 方法                                                 | 说明          | 示例                                           |
| ---------------------------------------------------- | ------------- | ---------------------------------------------- |
| `and(Consumer<Wrapper> consumer)`                    | 嵌套 AND 条件 | `and(i -> i.eq("sex", 1).gt("age", 20))`       |
| `or(Consumer<Wrapper> consumer)`                     | 嵌套 OR 条件  | `or(i -> i.eq("status", 0).eq("del_flag", 1))` |
| `not(Consumer<Wrapper> consumer)`                    | 嵌套 NOT 条件 | `not(i -> i.like("name", "测试"))`             |
| `and(boolean condition, Consumer<Wrapper> consumer)` | 带条件的 AND  | `and(flag, i -> i.eq("dept_id", 10))`          |

### 7. 自定义 SQL 片段

| 方法                                       | 说明                            | SQL 示例                                                       |
| ------------------------------------------ | ------------------------------- | -------------------------------------------------------------- |
| `apply(String applySql, Object... params)` | 自定义 SQL 片段（防注入）       | `apply("date_format(create_time, '%Y-%m') = {0}", "2024-01")`  |
| `last(String lastSql)`                     | 拼接到 SQL 最后（慎用，防注入） | `last("LIMIT 10")`                                             |
| `exists(String existsSql)`                 | 存在子查询                      | `exists("SELECT 1 FROM dept WHERE dept.id = user.dept_id")`    |
| `notExists(String existsSql)`              | 不存在子查询                    | `notExists("SELECT 1 FROM dept WHERE dept.id = user.dept_id")` |

### 8. 更新专用（UpdateWrapper）

| 方法                                           | 说明           | SQL 示例                           |
| ---------------------------------------------- | -------------- | ---------------------------------- |
| `set(R column, Object val)`                    | 设置更新字段   | `SET name = '张三'`                |
| `setSql(String setSql)`                        | 自定义更新 SQL | `setSql("salary = salary + 1000")` |
| `set(boolean condition, R column, Object val)` | 带条件设置字段 | `set(flag, "status", 1)`           |

### 例：

- 删除

  ```java
  // 删除id为1的数据
  QueryWrapper<User> wrapper = new QueryWrapper<User>()
      .in("id", List.of(1L));

  userMapper.delete(wrapper);

  // lambda方式，推荐
  QueryWrapper<User> wrapper = new QueryWrapper<User>()
      .in(User::getId, List.of(1L));

  userMapper.delete(wrapper);
  ```

- 查询

  ```java
  // 将id为 2,3 的 balance 减 200
  UpdateWrapper<User> wrapper = new UpdateWrapper<User>()
      .setSql("balance  = balance - 200")
      .in("id", List.of(2L, 3L));

  userMapper.update(null, wrapper);

  // lambda方式，推荐
  UpdateWrapper<User> wrapper = new UpdateWrapper<User>()
      .setSql("balance  = balance - 200")
      .in(User::getId, List.of(2L, 3L));

  userMapper.update(null, wrapper);
  ```

- 修改

  ```java
  // 将 username 为 jack 的 balance 设置为 2000
  User user = new User();
  user.setBalance(2000);
  QueryWrapper<User> wrapper = new QueryWrapper<User>().eq("username", "jack");

  userMapper.update(user, wrapper);

  // lambda方式，推荐
  User user = new User();
  user.setBalance(2000);
  LambdaUpdateWrapper<User> wrapper = new LambdaUpdateWrapper<User>().eq(User::getUsername, "jack");

  userMapper.update(user, wrapper);
  ```

## 5、自定义 sql（sql 拼接）

在业务层不建议写`sql`语句，因此可以将`mybatis-plus`和`xml`中的`sql`结合，进行`sql`的简化

实现`sql`将 id 为 2 和 3 的 balance 增加 100

1. 构建`where`的查询条件

   ```java
   int amount = 100;
   // 查询id为2和3的数据
   LambdaUpdateWrapper<User> wrapper = new LambdaUpdateWrapper<User>().in(User::getId, List.of(2L, 3L));

   userMapper.updateBalance(wrapper, amount);
   ```

2. mapper 中实现方法

   ```java
   public interface UserMapper extends BaseMapper<User> {

       // LambdaUpdateWrapper<User> wrapper 必须指定参数名为 ew 或者 Constants.WRAPPER
       void updateBalance(@Param("ew") LambdaUpdateWrapper<User> wrapper, @Param("amount") int amount);
   }
   ```

3. 在`xml`中拼接 sql

   ```xml
   <mapper namespace="com.itheima.mp.mapper.UserMapper">
       <update id="updateBalance">
           <!-- 注意这里的拼接的要使用$  -->
           update user set balance = balance + #{amount} ${ew.customSqlSegment}
       </update>
   </mapper>
   ```
