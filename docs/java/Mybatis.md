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
           select * from school.grade
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
       select * from school.grade where gradeid = #{gradeid}
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
       insert into school.grade (gradeid, gradename) values (#{gradeid}, #{gradename})
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
       update school.grade set gradename=#{gradename} where gradeid = #{gradeid}
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
       delete from school.grade where gradeid = #{gradeid}
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
