---
sidebar: auto
---

# Mybatis

MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

## 1、创建 Mybatis 应用

### 基础配置

1. 导入必须的包

   ```xml
   <dependencies>
       <dependency>
           <groupId>mysql</groupId>
           <artifactId>mysql-connector-java</artifactId>
           <version>8.0.33</version>
       </dependency>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13.2</version>
           <scope>test</scope>
       </dependency>
       <dependency>
           <groupId>org.mybatis</groupId>
           <artifactId>mybatis</artifactId>
           <version>3.5.19</version>
       </dependency>
   </dependencies>
   ```

2. 在 resource 下创建`mybatis-config.xml`文件，并写入以下内容，用于连接数据库

   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
   <!DOCTYPE configuration
           PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
           "https://mybatis.org/dtd/mybatis-3-config.dtd">
   <configuration>
       <environments default="development">
           <environment id="development">
               <transactionManager type="JDBC"/>
               <dataSource type="POOLED">
                   <!--固定写法-->
                   <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                   <!--数据库连接地址 + 表名 + 参数-->
                   <property name="url"
                             value="jdbc:mysql://localhost:3306/school?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
                   <property name="username" value="root"/>
                   <property name="password" value="root"/>
               </dataSource>
           </environment>
       </environments>

       <!--每一个mapper都需要在这里注册，下面仅为示例-->
       <mappers>
           <mapper resource="com/ldlang/dao/GradeMapper.xml"/>
       </mappers>
   </configuration>
   ```

3. 编写 Mybatis 工具类

   ```java
   import org.apache.ibatis.io.Resources;
   import org.apache.ibatis.session.SqlSession;
   import org.apache.ibatis.session.SqlSessionFactory;
   import org.apache.ibatis.session.SqlSessionFactoryBuilder;

   import java.io.IOException;
   import java.io.InputStream;

   public class MybatisUtils {
       private static SqlSessionFactory sqlSessionFactory;

       // 使用mybatis 第一步，获取sqlSessionFactory对象
       static {
           try {
               String resource = "mybatis-config.xml";
               InputStream inputStream = Resources.getResourceAsStream(resource);
               sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
           } catch (IOException e) {
               throw new RuntimeException(e);
           }
       }

       // 获取SqlSession实例
       public static SqlSession getSqlSession() {
           return sqlSessionFactory.openSession();
       }
   }
   ```

### 使用

1. 创建 Dao 接口

   ```java
   import com.ldlang.pojo.Grade;
   import java.util.List;

   public interface GradeDao {
        List<Grade> getGradeList();
   }
   ```

2. 创建 pojo 配置

   ```java
   package com.ldlang.pojo;

   // 每个字段都是对应数据库中的字段（字段类型也要一一对应），类名就是表名
   public class Grade {
       private int gradeid;
       private String gradename;

       public Grade() {
       }

       public Grade(String gradename, int gradeid) {
           this.gradename = gradename;
           this.gradeid = gradeid;
       }

       public int getGradeid() {
           return gradeid;
       }

       public void setGradeid(int gradeid) {
           this.gradeid = gradeid;
       }

       public String getGradename() {
           return gradename;
       }

       public void setGradename(String gradename) {
           this.gradename = gradename;
       }

       @Override
       public String toString() {
           return "Garde{" +
                   "gradeid=" + gradeid +
                   ", gradename='" + gradename + '\'' +
                   '}';
       }
   }
   ```

3. 创建 xml 文件写 sql 语句

   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
   <!DOCTYPE mapper
           PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <mapper namespace="com.ldlang.dao.GradeDao">
       <select id="getGradeList" resultType="com.ldlang.pojo.Grade">
           select * from grade
       </select>
   </mapper>
   ```

4. 在`mybatis-config.xml`中加入上一步`xml`的地址

   ```xml
   <mappers>
       <mapper resource="com/ldlang/dao/GradeMapper.xml"/>
   </mappers>
   ```

5. 调试是否成功，在 test 文件夹下创建相同目录结构的类用于测试

   ```java
   package com.ldlang.dao;

   import com.ldlang.pojo.Grade;
   import com.ldlang.utils.MybatisUtils;
   import org.apache.ibatis.session.SqlSession;
   import org.junit.Test;

   import java.util.List;

   public class GradeTest {
       @Test
       public void test(){
           // 获取sqlSession对象
           SqlSession sqlSession = MybatisUtils.getSqlSession();

           // 执行sql语句
           GradeDao mapper = sqlSession.getMapper(GradeDao.class);
           System.out.println("gradeDao---------" + mapper);
           mapper.getGradeList();
           List<Grade> gradeList = mapper.getGradeList();

           for (Grade grade : gradeList) {
               System.out.println("grade==========" + grade);
           }

           // 关闭连接
           sqlSession.close();
       }
   }
   ```

## 2、crud

- xml 中的 namespace 的包名要和 Dao/mapper 接口的报名一致

### select

- select 标签
  - id 对应的就是 mapper 中的方法名
  - resultType 就是 sql 语句返回值的类型
  - parameterType 是 mapper 中的方法的参数类型

1. 在 mapper 接口中增加方法

   ```java
   import com.ldlang.pojo.Grade;
   import java.util.List;

   public interface GradeMapper {
       // 查询所有
       List<Grade> getGradeList();

       // 根据id查询
       Grade getGradeById(int gradeid);
   }
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <!--参数可以直接拿，因为在调用的时候会传递-->
   <select id="getGradeById" resultType="com.ldlang.pojo.Grade" parameterType="int">
       select * from grade where gradeid = #{gradeid}
   </select>
   ```

3. 调试

   ```java
   @Test
   public void getGradeById(){
       // 获取sqlSession对象
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       // 执行sql语句
       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);
       Grade grade = mapper.getGradeById(1);

       System.out.println("根据Id查Grade："+grade);

       // 关闭连接
       sqlSession.close();
   }
   ```

### insert

1. 在 mapper 接口中增加方法

   ```java
   // 增加
   int insertGrade(Grade grade);
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <insert id="insertGrade" parameterType="com.ldlang.pojo.Grade">
       insert into grade (gradeid, gradename) values (#{gradeid}, #{gradename})
   </insert>
   ```

3. 调试

   ```java
   // 所有的增删改必须提交事务
   // 插入
   @Test
   public void insertGrade(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);
       int res = mapper.insertGrade(new Grade(3,"王五"));

       if (res > 0) {
           System.out.println("插入成功了");
       }
       // 提交事务
       sqlSession.commit();
       sqlSession.close();
   }
   ```

### update

1. 在 mapper 接口中增加方法

   ```java
   // 修改
   int upGrade(Grade grade);
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <update id="upGrade" parameterType="com.ldlang.pojo.Grade">
       update grade set gradename=#{gradename} where gradeid = #{gradeid}
   </update>
   ```

3. 调试

   ```java
   // 修改
   @Test
   public void upGrade(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);
       int res = mapper.upGrade(new Grade(3, "哈哈"));

       if (res > 0) {
           System.out.println("修改成功了");
       }

       sqlSession.commit();
       sqlSession.close();
   }
   ```

### delete

1. 在 mapper 接口中增加方法

   ```java
   // 删除
   int delGrade(int gradeid);
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <delete id="delGrade" parameterType="int">
       delete from grade where gradeid = #{gradeid}
   </delete>
   ```

3. 调试

   ```java
   // 删除
   @Test
   public void delGrade(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);
       int res = mapper.delGrade(3);

       if (res > 0) {
           System.out.println("删除成功了");
       }

       sqlSession.commit();
       sqlSession.close();
   }
   ```

## 3、万能 map

### 模糊查询

1. 在 mapper 接口中增加方法

   ```java
   List<Grade> getGradeListMap(Map<String, Object> map);
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <!--使用map进行like查询-->
   <select id="getGradeListMap" resultType="com.ldlang.pojo.Grade" parameterType="map">
       <!--传递的参数不需要和数据库中的键名一直，数据库中是gradename，这里可以是任何值，例name-->
       select * from grade where gradename like #{name}
   </select>
   ```

3. 调试

   ```java
   @Test
   public void getGradeListMap(){
       // 获取sqlSession对象
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       // 执行sql语句
       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);
       HashMap<String, Object> map = new HashMap<String, Object>();
       // 这里的name就是对应的上面的name
       map.put("name", "%一%");

       List<Grade> gradeList = mapper.getGradeListMap(map);

       System.out.println("模糊查询Grade："+gradeList);

       // 关闭连接
       sqlSession.close();
   }
   ```

### 新增

1. 在 mapper 接口中增加方法

   ```java
   int insertGradeMap(Map<String,Object> map);
   ```

2. 在 xml 文件中书写 sql 语句

   ```xml
   <!--使用map新增-->
   <insert id="insertGradeMap" parameterType="map">
       insert into grade (gradeid, gradename) values (#{id}, #{name})
   </insert>
   ```

3. 调试

   ```java
   @Test
   public void insertGradeMap(){
       SqlSession sqlSession = MybatisUtils.getSqlSession();

       GradeMapper mapper = sqlSession.getMapper(GradeMapper.class);

       HashMap<String,Object> map = new HashMap<String,Object>();
       map.put("id", 10);
       map.put("name","六年级");

       int res = mapper.insertGradeMap(map);

       if (res > 0) {
           System.out.println("插入成功了");
       }
       // 提交事务
       sqlSession.commit();
       sqlSession.close();
   }
   ```

## 4、配置解析

### 1、环境配置（environments）

可以配置多个环境，但每次只能选择一个环境，相当于可以配置开发环境，正式环境等

> 默认事务管理器是 JDBC，连接池 POOLED

```xml
<!--default用于选择环境-->
<environments default="test">
    <!--默认环境是development-->
    <environment id="development">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="url" value="jdbc:mysql://localhost:3306/school?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
            <property name="username" value="root"/>
            <property name="password" value="root"/>
        </dataSource>
    </environment>
    <environment id="test">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="url" value="jdbc:mysql://localhost:3306/school?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
            <property name="username" value="root"/>
            <property name="password" value="root"/>
        </dataSource>
    </environment>
</environments>
```

### 2、属性（properties）

用于读取外部的配置文件属性，也可以在标签内书写属性，标签内的属性优先级**小于**外部的读取的

1. 配置文件（db.properties）

   ```properties
   driver=com.mysql.cj.jdbc.Driver
   url=jdbc:mysql://localhost:3306/school?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai
   username=root
   password=root
   ```

2. 读取配置文件

   ```xml
   <--这里虽然也写了配置，但是优先级小于外部配置文件，如果外部有同名属性，则这里的属性无效-->
   <properties resource="db.properties" >
       <property name="username" value="root"/>
       <property name="password" value="root"/>
   </properties>
   ```

3. 使用

   ```xml
   <--读取或设置的属性，这里就能直接使用读取的属性-->
   <environments default="development">
       <environment id="development">
           <transactionManager type="JDBC"/>
           <dataSource type="POOLED">
               <property name="driver" value="${driver}"/>
               <property name="url" value="${url}"/>
               <property name="username" value="${username}"/>
               <property name="password" value="${password}"/>
           </dataSource>
       </environment>
   </environments>
   ```

## 3、类型别名

1. 方式一

   - 给指定的实体类指定别名

     ```xml
     <typeAliases>
         <typeAlias type="com.ldlang.pojo.Grade" alias="Grade" />
     </typeAliases>
     ```

   - 使用（在 sql 的 xml 中）

     ```xml
     <--com.ldlang.pojo.Grade返回值类型就不需要这样写了-->
     <select id="getGradeList" resultType="Grade">
     	select * from grade
     </select>
     ```

2. 方式二

   - 扫描指定文件夹下的实体类，起类型就是类名的首字母小写，写成大写也不会报错

     ```xml
     <typeAliases>
         <package name="com.ldlang.pojo"/>
     </typeAliases>
     ```

   - 使用

     ```xml
     <select id="getGradeList" resultType="grade">
         select * from grade
     </select>
     ```

   - 也可以在实体类上加注解自定义返回值的类型（前提是要将当前包通过 package 的方式导入）

     ```java
     import org.apache.ibatis.type.Alias;

     @Alias("Gh")
     public class Grade {}
     ```

   - 使用

     ```xml
     <select id="getGradeList" resultType="Gh">
         select * from grade
     </select>
     ```

### 4、设置（settings）

| 设置名                             | 描述                                                                                                                                                                                                                                                                                                                               | 有效值                                                                                                     | 默认值                                                |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **cacheEnabled**                   | 全局性地开启或关闭所有映射器配置文件中已配置的任何缓存。                                                                                                                                                                                                                                                                           | true \| false                                                                                              | true                                                  |
| **lazyLoadingEnabled**             | 延迟加载的全局开关。当开启时，所有关联对象都会延迟加载。 特定关联关系中可通过设置 `fetchType` 属性来覆盖该项的开关状态。                                                                                                                                                                                                           | true \| false                                                                                              | false                                                 |
| aggressiveLazyLoading              | 开启时，任一方法的调用都会加载该对象的所有延迟加载属性。 否则，每个延迟加载属性会按需加载（参考 `lazyLoadTriggerMethods`)。                                                                                                                                                                                                        | true \| false                                                                                              | false （在 3.4.1 及之前的版本中默认为 true）          |
| multipleResultSetsEnabled          | 是否允许单个语句返回多结果集（需要数据库驱动支持）。                                                                                                                                                                                                                                                                               | true \| false                                                                                              | true                                                  |
| useColumnLabel                     | 使用列标签代替列名。实际表现依赖于数据库驱动，具体可参考数据库驱动的相关文档，或通过对比测试来观察。                                                                                                                                                                                                                               | true \| false                                                                                              | true                                                  |
| useGeneratedKeys                   | 允许 JDBC 支持自动生成主键，需要数据库驱动支持。如果设置为 true，将强制使用自动生成主键。尽管一些数据库驱动不支持此特性，但仍可正常工作（如 Derby）。                                                                                                                                                                              | true \| false                                                                                              | False                                                 |
| autoMappingBehavior                | 指定 MyBatis 应如何自动映射列到字段或属性。 NONE 表示关闭自动映射；PARTIAL 只会自动映射没有定义嵌套结果映射的字段。 FULL 会自动映射任何复杂的结果集（无论是否嵌套）。                                                                                                                                                              | NONE, PARTIAL, FULL                                                                                        | PARTIAL                                               |
| autoMappingUnknownColumnBehavior   | 指定发现自动映射目标未知列（或未知属性类型）的行为。`NONE`: 不做任何反应`WARNING`: 输出警告日志（`'org.apache.ibatis.session.AutoMappingUnknownColumnBehavior'` 的日志等级必须设置为 `WARN`）`FAILING`: 映射失败 (抛出 `SqlSessionException`)Note that there could be false-positives when `autoMappingBehavior` is set to `FULL`. | NONE, WARNING, FAILING                                                                                     | NONE                                                  |
| defaultExecutorType                | 配置默认的执行器。SIMPLE 就是普通的执行器；REUSE 执行器会重用预处理语句（PreparedStatement）； BATCH 执行器不仅重用语句还会执行批量更新。                                                                                                                                                                                          | SIMPLE REUSE BATCH                                                                                         | SIMPLE                                                |
| defaultStatementTimeout            | 设置超时时间，它决定数据库驱动等待数据库响应的秒数。                                                                                                                                                                                                                                                                               | 任意正整数                                                                                                 | 未设置 (null)                                         |
| defaultFetchSize                   | 为驱动的结果集获取数量（fetchSize）设置一个建议值。此参数只可以在查询设置中被覆盖。                                                                                                                                                                                                                                                | 任意正整数                                                                                                 | 未设置 (null)                                         |
| defaultResultSetType               | 指定语句默认的滚动策略。（新增于 3.5.2）                                                                                                                                                                                                                                                                                           | FORWARD_ONLY \| SCROLL_SENSITIVE \| SCROLL_INSENSITIVE \| DEFAULT（等同于未设置）                          | 未设置 (null)                                         |
| safeRowBoundsEnabled               | 是否允许在嵌套语句中使用分页（RowBounds）。如果允许使用则设置为 false。                                                                                                                                                                                                                                                            | true \| false                                                                                              | False                                                 |
| safeResultHandlerEnabled           | 是否允许在嵌套语句中使用结果处理器（ResultHandler）。如果允许使用则设置为 false。                                                                                                                                                                                                                                                  | true \| false                                                                                              | True                                                  |
| mapUnderscoreToCamelCase           | 是否开启驼峰命名自动映射，即从经典数据库列名 A_COLUMN 映射到经典 Java 属性名 aColumn。                                                                                                                                                                                                                                             | true \| false                                                                                              | False                                                 |
| localCacheScope                    | MyBatis 利用本地缓存机制（Local Cache）防止循环引用和加速重复的嵌套查询。 默认值为 SESSION，会缓存一个会话中执行的所有查询。 若设置值为 STATEMENT，本地缓存将仅用于执行语句，对相同 SqlSession 的不同查询将不会进行缓存。                                                                                                          | SESSION \| STATEMENT                                                                                       | SESSION                                               |
| jdbcTypeForNull                    | 当没有为参数指定特定的 JDBC 类型时，空值的默认 JDBC 类型。 某些数据库驱动需要指定列的 JDBC 类型，多数情况直接用一般类型即可，比如 NULL、VARCHAR 或 OTHER。                                                                                                                                                                         | JdbcType 常量，常用值：NULL、VARCHAR 或 OTHER。                                                            | OTHER                                                 |
| lazyLoadTriggerMethods             | 指定对象的哪些方法触发一次延迟加载。                                                                                                                                                                                                                                                                                               | 用逗号分隔的方法列表。                                                                                     | equals,clone,hashCode,toString                        |
| defaultScriptingLanguage           | 指定动态 SQL 生成使用的默认脚本语言。                                                                                                                                                                                                                                                                                              | 一个类型别名或全限定类名。                                                                                 | org.apache.ibatis.scripting.xmltags.XMLLanguageDriver |
| defaultEnumTypeHandler             | 指定 Enum 使用的默认 `TypeHandler` 。（新增于 3.4.5）                                                                                                                                                                                                                                                                              | 一个类型别名或全限定类名。                                                                                 | org.apache.ibatis.type.EnumTypeHandler                |
| callSettersOnNulls                 | 指定当结果集中值为 null 的时候是否调用映射对象的 setter（map 对象时为 put）方法，这在依赖于 Map.keySet() 或 null 值进行初始化时比较有用。注意基本类型（int、boolean 等）是不能设置成 null 的。                                                                                                                                     | true \| false                                                                                              | false                                                 |
| returnInstanceForEmptyRow          | 当返回行的所有列都是空时，MyBatis 默认返回 `null`。 当开启这个设置时，MyBatis 会返回一个空实例。 请注意，它也适用于嵌套的结果集（如集合或关联）。（新增于 3.4.2）                                                                                                                                                                  | true \| false                                                                                              | false                                                 |
| logPrefix                          | 指定 MyBatis 增加到日志名称的前缀。                                                                                                                                                                                                                                                                                                | 任何字符串                                                                                                 | 未设置                                                |
| logImpl                            | 指定 MyBatis 所用日志的具体实现，未指定时将自动查找。                                                                                                                                                                                                                                                                              | SLF4J \| LOG4J（3.5.9 起废弃） \| LOG4J2 \| JDK_LOGGING \| COMMONS_LOGGING \| STDOUT_LOGGING \| NO_LOGGING | 未设置                                                |
| proxyFactory                       | 指定 Mybatis 创建可延迟加载对象所用到的代理工具。                                                                                                                                                                                                                                                                                  | CGLIB （3.5.10 起废弃） \| JAVASSIST                                                                       | JAVASSIST （MyBatis 3.3 以上）                        |
| vfsImpl                            | 指定 VFS 的实现                                                                                                                                                                                                                                                                                                                    | 自定义 VFS 的实现的类全限定名，以逗号分隔。                                                                | 未设置                                                |
| useActualParamName                 | 允许使用方法签名中的名称作为语句参数名称。 为了使用该特性，你的项目必须采用 Java 8 编译，并且加上 `-parameters` 选项。（新增于 3.4.1）                                                                                                                                                                                             | true \| false                                                                                              | true                                                  |
| configurationFactory               | 指定一个提供 `Configuration` 实例的类。 这个被返回的 Configuration 实例用来加载被反序列化对象的延迟加载属性值。 这个类必须包含一个签名为`static Configuration getConfiguration()` 的方法。（新增于 3.2.3）                                                                                                                         | 一个类型别名或完全限定类名。                                                                               | 未设置                                                |
| shrinkWhitespacesInSql             | 从 SQL 中删除多余的空格字符。请注意，这也会影响 SQL 中的文字字符串。 (新增于 3.5.5)                                                                                                                                                                                                                                                | true \| false                                                                                              | false                                                 |
| defaultSqlProviderType             | 指定一个拥有 provider 方法的 sql provider 类 （新增于 3.5.6）. 这个类适用于指定 sql provider 注解上的`type`（或 `value`） 属性（当这些属性在注解中被忽略时）。 (e.g. `@SelectProvider`)                                                                                                                                            | 类型别名或者全限定名                                                                                       | 未设置                                                |
| nullableOnForEach                  | 为 'foreach' 标签的 'nullable' 属性指定默认值。（新增于 3.5.9）                                                                                                                                                                                                                                                                    | true \| false                                                                                              | false                                                 |
| argNameBasedConstructorAutoMapping | 当应用构造器自动映射时，参数名称被用来搜索要映射的列，而不再依赖列的顺序。（新增于 3.5.10）                                                                                                                                                                                                                                        | true \| false                                                                                              | false                                                 |

### 5、其他配置

- plugins

- environments

### 6、mappers

用于映射 sql 语句，每个 mapper 文件都必须要有映射

- 方式一：使用相对于类路径的资源引用

  ```xml
  <mappers>
      <mapper resource="com/ldlang/dao/GradeMapper.xml"/>
  </mappers>
  ```

- 方式二：使用映射器接口实现类的完全限定类名

  ```xml
  <mappers>
      <mapper class="com.ldlang.dao.GradeMapper" />
  </mappers>
  ```

- 方式三：将包内的映射器接口全部注册为映射器

  ```xml
  <mappers>
      <package name="com.ldlang.dao"/>
  </mappers>
  ```

> 以上所有方式注意点：
>
> 1. 接口和他的 mapper 文件必须同名
> 2. 接口和他的 mapper 文件必须在同一包下

## resultMap 结果集映射

用于解决实体类字段和属性名不一直的问题，当实体类的字段名和数据库中的字段名不一致时就是导致相应的字段查出来为 null

**解决方式：**

> ```java
> // 实体类的映射
> private int gradeid;
> private String name; // 数据库中是 gradename
> ```

1. 别名（不推荐）

   ```xml
   <select id="getGradeById" resultType="Grade" parameterType="int">
       select gradeid, gradename as name from grade where gradeid = #{gradeid}
   </select>
   ```

2. resultMap（推荐）

   ```xml
   <--id对应下面的resultMap，Type就是返回值的类型-->
   <resultMap id="GradeResultMap" type="Grade">
       <result column="gradename" property="name" />
   </resultMap>

   <select id="getGradeById" resultMap="GradeResultMap">
       select * from grade where gradeid = #{gradeid}
   </select>
   ```
