---
sidebar: auto
---

# Mybatis

MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

## 1、创建Mybatis应用

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

2. 在resource下创建`mybatis-config.xml`文件，并写入以下内容

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
                   <property name="driver" value="com.mysql.jdbc.Driver"/>
                   <!--数据库连接地址 + 表名 + 参数-->
                   <property name="url"
                             value="jdbc:mysql://localhost:3306/school?useUnicode=true&amp;characterEncoding=UTF-8"/>
                   <property name="username" value="root"/>
                   <property name="password" value="root"/>
               </dataSource>
           </environment>
       </environments>
       
       <!--每一个mapper都需要在这里注册，下面仅为示例-->
       <mappers>
           <mapper resource="org/mybatis/example/BlogMapper.xml"/>
       </mappers>
   </configuration>
   ```

3. 编写Mybatis工具类

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
               String resource = "org/mybatis/example/mybatis-config.xml";
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

4. 